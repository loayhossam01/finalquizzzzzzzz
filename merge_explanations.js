const fs = require('fs');
const path = require('path');

const targetFilePath = path.join(__dirname, 'quiz-app', 'questions.js');

// Read the original file
let content = fs.readFileSync(targetFilePath, 'utf-8');

const jsonStart = content.indexOf('[');
const jsonEnd = content.lastIndexOf(']') + 1;
const jsonStr = content.slice(jsonStart, jsonEnd);

let questions = JSON.parse(jsonStr);

// Paths to the generated explanation chunks
const chunkPaths = [
    'C:\\Users\\win\\.gemini\\antigravity\\brain\\a9fde2c1-1512-4f71-bf53-24a0c3071af2\\scratch\\explanations_10_39.json',
    'C:\\Users\\win\\.gemini\\antigravity\\brain\\eb75e79c-1a9f-430b-b37b-8553ff4b65af\\scratch\\explanations_40_69.json',
    'C:\\Users\\win\\.gemini\\antigravity\\brain\\7d871953-33d3-474e-aefe-592044a70f80\\scratch\\explanations_70_99.json',
    'C:\\Users\\win\\.gemini\\antigravity\\brain\\eb75e79c-1a9f-430b-b37b-8553ff4b65af\\scratch\\explanations_100_129.json',
    'C:\\Users\\win\\.gemini\\antigravity\\brain\\eb75e79c-1a9f-430b-b37b-8553ff4b65af\\scratch\\explanations_130_155.json',
    'C:\\Users\\win\\.gemini\\antigravity\\brain\\eb75e79c-1a9f-430b-b37b-8553ff4b65af\\scratch\\explanations_156_177.json'
];

let addedCount = 0;

chunkPaths.forEach(chunkPath => {
    try {
        if (fs.existsSync(chunkPath)) {
            const chunkData = JSON.parse(fs.readFileSync(chunkPath, 'utf-8'));
            chunkData.forEach(item => {
                if (questions[item.index]) {
                    questions[item.index].explanation = item.explanation;
                    addedCount++;
                }
            });
            console.log(`Successfully merged ${chunkData.length} items from ${path.basename(chunkPath)}`);
        } else {
            console.warn(`File not found: ${chunkPath}`);
        }
    } catch (e) {
        console.error(`Error processing ${chunkPath}:`, e.message);
    }
});

// Write back to the file
const newContent = `const quizData = ${JSON.stringify(questions, null, 4)};`;
fs.writeFileSync(targetFilePath, newContent, 'utf-8');

console.log(`Finished merging! Updated ${addedCount} explanations.`);
