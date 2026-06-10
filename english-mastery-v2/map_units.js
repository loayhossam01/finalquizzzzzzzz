const fs = require('fs');
const path = require('path');

const unitsTxtPath = path.join(__dirname, 'units.txt');
const questionsTsPath = path.join(__dirname, 'src', 'data', 'questions.ts');

const unitsText = fs.readFileSync(unitsTxtPath, 'utf8');
const questionsContent = fs.readFileSync(questionsTsPath, 'utf8');

// Parse the existing questions.ts to get the array
// Find `export const quizData: Question[] = [`
const jsonStart = questionsContent.indexOf('export const quizData: Question[] = ') + 36;
const arrayText = questionsContent.substring(jsonStart, questionsContent.length - 2);

let questions;
try {
  questions = eval(arrayText);
} catch (e) {
  console.error("Failed to eval questions");
  process.exit(1);
}

// Parse the units.txt
const lines = unitsText.split('\n');
let currentUnit = 'General';

for (const line of lines) {
  const t = line.trim();
  if (!t) continue;
  if (t.startsWith('UNIT ')) {
    currentUnit = t;
    continue;
  }
  if (t.startsWith('/poll ')) {
    const parts = t.substring(6).split('|').map(s => s.trim());
    const qText = parts[0];
    
    // Find the question in the array
    // Try to match the start of the question text
    let matched = false;
    for (let q of questions) {
      // Fuzzy match by removing punctuation and spaces
      const normalize = (s) => s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
      if (normalize(q.question).includes(normalize(qText)) || normalize(qText).includes(normalize(q.question))) {
        q.unit = currentUnit;
        matched = true;
        break;
      }
    }
    if (!matched) {
      console.log(`Could not find match for: ${qText}`);
    }
  }
}

// Set 'General' for those without a unit
let unitCount = {};
for (let q of questions) {
  if (!q.unit) q.unit = 'General';
  unitCount[q.unit] = (unitCount[q.unit] || 0) + 1;
}

console.log('Unit counts:', unitCount);

// Generate new questions.ts
const out = `export interface Question {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
  unit: string;
}

export const quizData: Question[] = ${JSON.stringify(questions, null, 2)};
`;

fs.writeFileSync(questionsTsPath, out, 'utf8');
console.log('Successfully updated questions.ts');
