const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'quiz-app', 'questions.js');
const dstDir = path.join(__dirname, 'english-mastery-v2', 'src', 'data');

if (!fs.existsSync(dstDir)) {
    fs.mkdirSync(dstDir, { recursive: true });
}

const c = fs.readFileSync(src, 'utf8');
const jsonStart = c.indexOf('[');
const jsonEnd = c.lastIndexOf(']') + 1;
const json = c.slice(jsonStart, jsonEnd);

const out = `export interface Question {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

export const quizData: Question[] = ${json};
`;

fs.writeFileSync(path.join(dstDir, 'questions.ts'), out, 'utf8');
console.log('Migration complete!');
