#!/usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'
import pdf from 'pdf-parse'

const SOURCE = process.argv[2] || path.join('public','resume','NtokozoSibiya_CV.pdf')
const OUT_TXT = path.join('scripts','resume-text.txt')
const OUT_JSON = path.join('scripts','resume-raw.json')

if (!fs.existsSync(SOURCE)) {
  console.error(`Source PDF not found: ${SOURCE}`)
  process.exit(1)
}

const data = fs.readFileSync(SOURCE)

pdf(data).then(function(result){
  fs.mkdirSync('scripts', { recursive: true })
  fs.writeFileSync(OUT_TXT, result.text, 'utf-8')
  fs.writeFileSync(OUT_JSON, JSON.stringify(result, null, 2), 'utf-8')
  console.log('Extracted text to', OUT_TXT)
}).catch(err => {
  console.error('Failed to parse PDF:', err)
  process.exit(1)
})
//
