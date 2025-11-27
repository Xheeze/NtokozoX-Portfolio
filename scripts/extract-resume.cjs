#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const pdf = require('pdf-parse')

const SOURCE = process.argv[2] || path.join('public','resume','NtokozoSibiya_CV.pdf')
const OUT_TEXT = path.join('public','resume','resume-text.txt')
const OUT_JSON = path.join('public','resume','resume-experience.json')

if (!fs.existsSync(SOURCE)) {
  console.error(`Source PDF not found: ${SOURCE}`)
  process.exit(1)
}

const data = fs.readFileSync(SOURCE)

pdf(data).then(function(result){
  try { fs.mkdirSync(path.join('public','resume'), { recursive: true }) } catch(e){}
  fs.writeFileSync(OUT_TEXT, result.text, 'utf-8')
  // Heuristic: split on double newlines and take blocks with years
  const blocks = result.text.split(/\r?\n\r?\n+/).map(s => s.trim()).filter(Boolean)
  const possible = blocks.filter(b => /\b(19|20)\d{2}\b|Present/i.test(b)).slice(0,10)
  const parsed = possible.map(b => ({ raw: b }))
  fs.writeFileSync(OUT_JSON, JSON.stringify(parsed, null, 2), 'utf-8')
  console.log('Wrote text and heuristic JSON to public/resume')
}).catch(err => {
  console.error('Failed to parse PDF:', err)
  process.exit(1)
})
//zazar
