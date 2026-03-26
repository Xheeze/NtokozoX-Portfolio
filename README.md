# Ntokozo Xheeze Sibiya - Power Platform & Web Developer Portfolio

> Modern, responsive portfolio showcasing Power Platform, React, and Azure expertise with interactive project galleries and Microsoft-inspired design.

![Portfolio Preview](src/assets/pp_banner.png)

## 🚀 Live Demo

**[View Portfolio](https://xheeze.github.io/NtokozoX-Portfolio/)** *(Update with your actual GitHub Pages URL)*

## ✨ Features

- 🎨 **Microsoft Fluent Design** - Clean, professional UI with Microsoft color palette
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile
- 🖼️ **Interactive Project Gallery** - Click to view full-size screenshots in modal viewer
- 📜 **Dynamic Experience Timeline** - Resume data loaded from JSON
- 🎓 **Certification Showcase** - Microsoft certifications with status badges
- ⚡ **Fast Performance** - Vite + React optimized build (52KB gzipped)
- 🔒 **Security Hardened** - CSP headers, secure external links
- ♿ **Accessible** - WCAG compliant, keyboard navigation, reduced motion support

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite 5
- **Styling**: Vanilla CSS with CSS Variables
- **Icons**: Inline SVG
- **Deployment**: GitHub Pages with automated CI/CD
- **Build Tools**: Sharp (image processing), pdf-parse (resume extraction)

## 📦 Project Structure

```
pp-portfolio/
├── public/
│   ├── resume/              # Resume JSON data
│   └── _headers             # Security headers
├── src/
│   ├── assets/
│   │   ├── Projects/        # Project screenshots
│   │   └── *.{svg,png,jpg}  # Icons and images
│   ├── components/
│   │   ├── Header.jsx       # Sticky navigation
│   │   ├── Hero.jsx         # Landing section
│   │   ├── Projects.jsx     # Project showcase with modal
│   │   ├── Experience.jsx   # Timeline view
│   │   ├── CertificateGrid.jsx
│   │   └── ...
│   ├── styles.css           # Global styles
│   └── main.jsx             # App entry point
├── scripts/
│   ├── extract-resume.cjs   # PDF to JSON parser
│   └── slice-tech-icons.mjs # Image slicer
└── package.json


## 🤝 Contributing

Contributions welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests

## 👨‍💻 Author

**Ntokozo Xheeze Sibiya**
- 💼 LinkedIn: [ntokozo-sibiya1](https://www.linkedin.com/in/ntokozo-sibiya1)
- 🐙 GitHub: [@xheeze](https://github.com/xheeze)
- 📧 Email: sibiya.ntokozo1@gmail.com

## 🙏 Acknowledgments

- Microsoft Fluent Design inspiration
- React & Vite communities
- GitHub Pages hosting

---

⭐ **If you like this portfolio template, give it a star!**
