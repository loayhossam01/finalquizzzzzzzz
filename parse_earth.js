const fs = require('fs');
const path = require('path');

const mdPath = 'C:\\Users\\win\\Downloads\\exam_questions.md';
const tsPath = 'C:\\Users\\win\\Documents\\antigravity\\beautiful-pascal\\english-mastery-v2\\src\\data\\earth-science-data.ts';

const content = fs.readFileSync(mdPath, 'utf8');

const blocks = content.split('## ').slice(1);
const questions = [];

blocks.forEach(block => {
  const lines = block.split('\n').map(l => l.trim()).filter(l => l);
  if (lines.length === 0) return;

  const titleLine = lines[0];
  const isNoteOnly = lines.some(l => l.startsWith('- **ملاحظة:**'));
  
  if (isNoteOnly) return; // Skip non-questions

  let questionText = '';
  let answerText = '';
  let imageUrl = '';
  let options = [];
  let type = 'text';

  lines.forEach(line => {
    if (line.startsWith('- **السؤال المستخرج:**')) {
      questionText = line.replace('- **السؤال المستخرج:**', '').trim();
    } else if (line.startsWith('- **ملاحظات:**')) {
      answerText = line.replace('- **ملاحظات:**', '').trim();
    } else if (line.startsWith('- **الإجابة:**') || line.startsWith('- **الجواب:**')) {
      answerText += '\n' + line.replace(/-\s\*\*(الإجابة|الجواب):\*\*/, '').trim();
    } else if (line.startsWith('![')) {
      const match = line.match(/\!\[.*\]\((.*)\)/);
      if (match && match[1]) {
        // Extract filename and encode appropriately
        const parts = match[1].split('/');
        const filename = decodeURIComponent(parts[parts.length - 1]);
        imageUrl = `/images/earth-science/${filename}`;
      }
    }
  });

  // some specific cleanups
  if (questionText && !answerText) {
    answerText = 'تحقق من الملاحظات والصور המرفقة';
  }

  // Set unit
  const unit = 'تجميعات علم الأرض';

  if (questionText) {
    questions.push({
      type: 'text', // mostly text/essay or short answers
      question: questionText,
      imageUrl: imageUrl || undefined,
      answer: answerText.trim(),
      explanation: answerText.trim(),
      unit: unit,
      options: []
    });
  }
});

const tsContent = `import { Question } from './questions';

export const earthScienceQuestions: Question[] = ${JSON.stringify(questions, null, 2)};
`;

fs.writeFileSync(tsPath, tsContent);
console.log('Successfully generated earth-science-data.ts with', questions.length, 'questions');
