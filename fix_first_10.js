const fs = require('fs');
const path = require('path');

const targetFilePath = path.join(__dirname, 'quiz-app', 'questions.js');

let content = fs.readFileSync(targetFilePath, 'utf-8');
const jsonStart = content.indexOf('[');
const jsonEnd = content.lastIndexOf(']') + 1;
const jsonStr = content.slice(jsonStart, jsonEnd);

let questions = JSON.parse(jsonStr);

const fixes = [
    "شرح: كلمة 'boost' تعني زيادة أو رفع شيء ما، ومرادفها هنا هو 'raise'. مثال: The new marketing campaign will boost sales. (الحملة التسويقية الجديدة ستزيد المبيعات).",
    "شرح: كلمة 'endure' تعني تحمل أو الصبر على شيء مزعج، ومرادفها 'put up with'. مثال: I can't endure this noise. (لا أستطيع تحمل هذا الضجيج).",
    "شرح: كلمة 'flop' تعني فشل ذريع، ومرادفها 'failure'. مثال: The new movie was a complete flop. (الفيلم الجديد كان فشلاً ذريعاً).",
    "شرح: كلمة 'novelty' تعني حداثة أو شيء جديد، ومرادفها 'new thing'. مثال: The novelty of the toy soon wore off. (حداثة اللعبة تلاشت قريباً).",
    "شرح: كلمة 'outraged' تعني غاضب جداً أو ساخط، ومرادفها 'very angry'. مثال: He was outraged by the unfair decision. (كان غاضباً جداً من القرار غير العادل).",
    "شرح: كلمة 'tampered' تعني العبث بـ أو التدخل في شيء لتخريبه، ومرادفها 'interfered with'. مثال: Someone tampered with the lock. (شخص ما عبث بالقفل).",
    "شرح: نستخدم 'may have + V3' لاستنتاج شيء ربما حدث في الماضي (احتمالية). مثال: I may have left my keys at home. (ربما تركت مفاتيحي في المنزل).",
    "شرح: نستخدم 'wasn\\'t supposed to' للتعبير عن شيء لم يكن من المفترض أن يحدث (خطة أو اتفاق لم يتبع). مثال: You weren\\'t supposed to tell anyone! (لم يكن من المفترض أن تخبر أحداً!).",
    "شرح: نستخدم 'must have + V3' لاستنتاج مؤكد في الماضي مبني على دليل قوي. (هنا الدليل هو الابتسامة). مثال: You must have been tired after the long trip. (لابد أنك كنت متعباً بعد الرحلة).",
    "شرح: نستخدم 'may have + V3' لافتراض احتمالي في الماضي عندما لا نكون متأكدين بنسبة 100%. مثال: She may have missed the bus. (ربما فاتتها الحافلة)."
];

for(let i = 0; i < fixes.length; i++) {
    if (questions[i]) {
        questions[i].explanation = fixes[i];
    }
}

const newContent = `const quizData = ${JSON.stringify(questions, null, 4)};`;
fs.writeFileSync(targetFilePath, newContent, 'utf-8');
console.log("Fixed first 10 questions.");
