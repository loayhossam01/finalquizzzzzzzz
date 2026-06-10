const fs = require('fs');

try {
    const content = fs.readFileSync('C:\\Users\\win\\.gemini\\antigravity\\brain\\eb75e79c-1a9f-430b-b37b-8553ff4b65af\\formatted_polls.md', 'utf-8');
    const lines = content.split('\n');
    const questions = [];

    for (const line of lines) {
        if (line.trim().startsWith('/poll')) {
            const text = line.replace('/poll', '').trim();
            const parts = text.split('|').map(p => p.trim());
            const qText = parts[0];
            const correct = parts[1];
            const options = parts.slice(1);
            
            // Shuffle options
            const shuffled = [...options];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            
            questions.push({
                question: qText,
                options: shuffled,
                answer: correct
            });
        }
    }

    const jsContent = `const quizData = ${JSON.stringify(questions, null, 2)};`;
    fs.writeFileSync('C:\\Users\\win\\Documents\\antigravity\\beautiful-pascal\\quiz-app\\questions.js', jsContent);
    console.log(`Generated ${questions.length} questions successfully!`);
} catch (error) {
    console.error("Error generating questions:", error);
}
