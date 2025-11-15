import React, { useEffect, useState } from "react";

const fallbackExperience = [
  {
    role: "Power Platform Developer",
    company: "Contoso Ltd.",
    dates: "July 2024 – Present",
    description: "Building low-code solutions with Power Apps, Automate, and Dataverse. Led migration of legacy workflows to Microsoft cloud.",
    tech: ["Power Apps", "Power Automate", "Dataverse", "Azure", "React"]
  },
  {
    role: "Frontend Engineer",
    company: "Fabrikam Inc.",
    dates: "Aug 2021 – Dec 2022",
    description: "Developed interactive dashboards and certification portals using React, Node.js, and Microsoft Graph.",
    tech: ["React", "Node.js", "Microsoft Graph", "JavaScript"]
  }
];

function parseHeuristic(raw) {
  // raw is expected to be an array of strings (blocks) or a single string
  const blocks = Array.isArray(raw) ? raw : [raw];
  return blocks.map(b => {
    // try to pull dates
    const dateMatch = b.match(/(\b\d{4}\b(?:\s*[–-]\s*\b\d{4}\b)?(?:\s*–\s*Present)?|Present)/i);
    const dates = dateMatch ? dateMatch[0] : '';
    let rest = b.replace(dates, '').trim();
    // split role and company
    let role = '';
    let company = '';
    const atMatch = rest.match(/(.+?)\s+at\s+(.+)/i);
    if (atMatch) { role = atMatch[1].trim(); company = atMatch[2].trim(); }
    else {
      const parts = rest.split(/,|@/).map(p => p.trim()).filter(Boolean);
      role = parts[0] || rest;
      company = parts[1] || '';
    }
    return { role, company, dates, description: '', tech: [] };
  });
}

function normalizeEntries(entries) {
  
  // dedupe by role+company+dates
  const seen = new Map();
  const normalized = [];
  for (const e of entries) {
    const key = `${(e.role||'').toLowerCase()}|${(e.company||'').toLowerCase()}|${(e.dates||'').toLowerCase()}`;
    if (seen.has(key)) continue;
    seen.set(key, true);
    normalized.push(e);
  }
  // parse start date heuristic for sorting and display
  const withYear = normalized.map(e => {
    const d = (e.dates || '').trim();
    let start = null;
    let startLabel = '';
    // match patterns like 'Feb - Aug 2025' (month-range with year at end)
    const mMonthRange = d.match(/([A-Za-z]{3,})\s*-\s*([A-Za-z]{3,})\s*(\d{4})/);
    if (mMonthRange) {
      startLabel = `${mMonthRange[1]} ${mMonthRange[3]}`;
      start = parseInt(mMonthRange[3], 10);
    } else {
      // match range with years 'Aug 2020 - May 2022' or '2020 - 2022'
      const mYears = d.match(/(19|20)\d{2}/g);
      if (mYears && mYears.length) {
        start = parseInt(mYears[0], 10);
        startLabel = mYears[0];
      } else {
        // fallback: look for single year
        const mSingle = d.match(/(19|20)\d{2}/);
        if (mSingle) { start = parseInt(mSingle[0], 10); startLabel = mSingle[0]; }
      }
    }
    // attach computed values for rendering
    e._start = start;
    e._startLabel = startLabel;
    return { e, start };
  });
  withYear.sort((a,b) => {
    if (a.start && b.start) return b.start - a.start; // descending
    if (a.start) return -1;
    if (b.start) return 1;
    return 0;
  });
  return withYear.map(x => x.e);
}

function cleanDescription(exp) {
  if (exp.description && exp.description.trim()) return exp.description.trim();
  if (!exp.raw) return '';
  const lines = exp.raw.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
  // remove leading lines that match role/company/dates patterns
  let start = 0;
  // if first line equals role, skip
  if (exp.role && lines[0] && lines[0].toLowerCase().includes((exp.role||'').toLowerCase())) start = 1;
  // skip next line if it contains company or a '|' date separator
  if (lines[start] && (exp.company && lines[start].toLowerCase().includes((exp.company||'').toLowerCase()) || /\|/.test(lines[start]) || /(19|20)\d{2}/.test(lines[start]))) start++;
  const rest = lines.slice(start).join(' ');
  return rest;
}

export default function Experience() {
  const [experience, setExperience] = useState(() => normalizeEntries(fallbackExperience));

  useEffect(() => {
    // Look for structured JSON produced by scripts/extract-resume.mjs
    const tryFetch = async () => {
      try {
        // First try scripts/resume-raw.json
        let res = await fetch('/resume/resume-experience.json');
        if (res.ok) {
          const j = await res.json();
          // If JSON contains structured objects with role/company fields, use them directly
          if (Array.isArray(j) && j.length && typeof j[0] === 'object' && (j[0].role || j[0].company)) {
            setExperience(normalizeEntries(j));
            return;
          }
          // j is expected to be an array of { raw: '...' } or strings - fall back to block parsing
          const blocks = Array.isArray(j) ? j.map(x => (typeof x === 'string' ? x : x.raw || '')) : [];
          if (blocks.length) {
            // parse each raw block into structured entries
            const parsed = [];
            for (const blk of blocks) {
              const lines = blk.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
              for (let i = 0; i < lines.length; i++) {
                const line = lines[i];
                // detect pattern: Role line followed by Company line containing '|' with a date
                if (i + 1 < lines.length && /\|/.test(lines[i+1]) && /\d{4}|Present/i.test(lines[i+1])) {
                  const role = line;
                  const [companyPart, datePart] = lines[i+1].split('|').map(s => s.trim());
                  const company = companyPart || '';
                  const dates = datePart || '';
                  // collect following description lines until next blank or next role pattern
                  let desc = '';
                  let j = i + 2;
                  while (j < lines.length && !(/\|/.test(lines[j]) && /\d{4}|Present/i.test(lines[j]))) {
                    // stop if next line looks like a new ROLE in all-caps or contains 'Intern' or 'Developer'
                    if (/^[A-Z\s]{5,}$/.test(lines[j]) && lines[j].length < 80) break;
                    desc += (desc ? ' ' : '') + lines[j];
                    j++;
                  }
                  parsed.push({ role, company, dates, description: desc, tech: [] });
                }
              }
            }
            if (parsed.length) { setExperience(normalizeEntries(parsed)); return; }
          }
        }
      } catch (e) {
        // ignore
      }
      // fallback stays
      // fallback stays
    };
    tryFetch();
  }, []);

  return (
    <section className="experience-section">
      <h2>Experience</h2>
      <div className="experience-timeline">
        {experience.map((exp, idx) => (
          <div className="timeline-item" key={idx}>
            <div className="timeline-marker" aria-hidden="true">
              <span className="marker-dot" />
              <span className="marker-line" />
            </div>
            <div className="timeline-content">
              <div className="exp-header">
                <span className="exp-role">{exp.role}</span>
                <span className="exp-company">{exp.company ? `@ ${exp.company}` : ''}</span>
              </div>
              <div className="exp-dates">
                {exp._startLabel ? <span className="exp-start">{exp._startLabel}</span> : null}
                {exp.dates ? <span className="exp-full">{exp.dates}</span> : null}
              </div>
                <div className="exp-description">{cleanDescription(exp)}</div>
              <div className="exp-tech">
                {(exp.tech || []).map((t, i) => (
                  <span className="exp-tech-item" key={i}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
