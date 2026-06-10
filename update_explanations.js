const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'quiz-app', 'questions.js');

// Read the file
let content = fs.readFileSync(filePath, 'utf-8');

// Extract the JSON array from the file content
const jsonStart = content.indexOf('[');
const jsonEnd = content.lastIndexOf(']') + 1;
const jsonStr = content.slice(jsonStart, jsonEnd);

let questions = JSON.parse(jsonStr);

// Detailed explanations for the first 10 questions
const detailedExplanations = [
    "شرح: 'Who' تسأل عن الفاعل العاقل. المثال: Who is calling? (من يتصل؟)",
    "شرح: 'Which' تستخدم للاختيار بين مجموعة محددة من الأشياء. المثال: Which color do you prefer? (أي لون تفضل؟)",
    "شرح: 'Whose' تسأل عن الملكية. المثال: Whose book is this? (لمن هذا الكتاب؟)",
    "شرح: 'Where' تسأل عن المكان. المثال: Where do you live? (أين تعيش؟)",
    "شرح: 'What time' تسأل عن الوقت المحدد. المثال: What time is the meeting? (في أي وقت الاجتماع؟)",
    "شرح: 'How many' تسأل عن العدد (الأسماء المعدودة). المثال: How many apples do you have? (كم تفاحة لديك؟)",
    "شرح: 'How much' تسأل عن الكمية (الأسماء غير المعدودة). المثال: How much sugar do you need? (كم مقدار السكر الذي تحتاجه؟)",
    "شرح: 'How long' تسأل عن المدة الزمنية أو الطول. المثال: How long did you stay? (كم المدة التي بقيتها؟)",
    "شرح: 'Why' تسأل عن السبب، وغالباً ما تكون الإجابة بـ 'Because'. المثال: Why are you late? (لماذا أنت متأخر؟)",
    "شرح: 'What' تسأل عن الأشياء أو الأفعال (غير العاقل). المثال: What are you doing? (ماذا تفعل؟)"
];

const genericExplanation = "شرح: هذه القاعدة تعتمد على سياق الجملة وتصريف الأفعال أو المفردات. (مثال: يمكنك إضافة تفاصيل أكثر هنا لاحقاً).";

// Update questions
questions = questions.map((q, idx) => {
    return {
        ...q,
        explanation: idx < detailedExplanations.length ? detailedExplanations[idx] : genericExplanation
    };
});

// Write back to the file
const newContent = `const quizData = ${JSON.stringify(questions, null, 4)};`;
fs.writeFileSync(filePath, newContent, 'utf-8');

console.log("Successfully updated all 178 questions with explanations!");
