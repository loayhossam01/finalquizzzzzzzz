const fs = require('fs');
const path = require('path');

const targetFilePath = path.join(__dirname, 'quiz-app', 'questions.js');
const scratchDir = path.join(__dirname, '.gemini', 'antigravity', 'brain', 'eb75e79c-1a9f-430b-b37b-8553ff4b65af', 'scratch');

let content = fs.readFileSync(targetFilePath, 'utf-8');
const jsonStart = content.indexOf('[');
const jsonEnd = content.lastIndexOf(']') + 1;
const jsonStr = content.slice(jsonStart, jsonEnd);

let questions = JSON.parse(jsonStr);
let totalUpdates = 0;

const auditFiles = [
    'audit_10_51.json',
    'audit_52_93.json',
    'audit_94_135.json',
    'audit_136_177.json'
];

auditFiles.forEach(file => {
    const fullPath = path.join(scratchDir, file);
    if (fs.existsSync(fullPath)) {
        try {
            const auditData = JSON.parse(fs.readFileSync(fullPath, 'utf-8'));
            if (Array.isArray(auditData)) {
                auditData.forEach(item => {
                    if (questions[item.index]) {
                        questions[item.index].explanation = item.explanation;
                        totalUpdates++;
                    }
                });
                console.log(`Successfully merged ${auditData.length} corrections from ${file}`);
            }
        } catch (e) {
            console.error(`Error parsing ${file}:`, e.message);
        }
    }
});

const newContent = `const quizData = ${JSON.stringify(questions, null, 4)};`;
fs.writeFileSync(targetFilePath, newContent, 'utf-8');
console.log(`Finished merging! Updated ${totalUpdates} explanations from audits.`);
