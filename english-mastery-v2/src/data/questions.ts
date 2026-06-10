export interface Question {
  type?: 'multiple-choice' | 'text' | 'number';
  question: string;
  imageUrl?: string;
  options?: string[]; // Optional for non-multiple-choice
  answer: string;
  explanation: string;
  unit: string;
}

export const quizData: Question[] = [
  {
    "question": "What is the definition of \"boost\"?",
    "options": [
      "put up with",
      "failure",
      "new thing",
      "raise"
    ],
    "answer": "raise",
    "explanation": "شرح: كلمة 'boost' تعني زيادة أو رفع شيء ما، ومرادفها هنا هو 'raise'. مثال: The new marketing campaign will boost sales. (الحملة التسويقية الجديدة ستزيد المبيعات).",
    "unit": "UNIT 7 - Everyone Makes Mistakes"
  },
  {
    "question": "What is the definition of \"endure\"?",
    "options": [
      "failure",
      "very angry",
      "new thing",
      "put up with"
    ],
    "answer": "put up with",
    "explanation": "شرح: كلمة 'endure' تعني تحمل أو الصبر على شيء مزعج، ومرادفها 'put up with'. مثال: I can't endure this noise. (لا أستطيع تحمل هذا الضجيج).",
    "unit": "UNIT 7 - Everyone Makes Mistakes"
  },
  {
    "question": "What is the definition of \"flop\"?",
    "options": [
      "very angry",
      "new thing",
      "interfered with",
      "failure"
    ],
    "answer": "failure",
    "explanation": "شرح: كلمة 'flop' تعني فشل ذريع، ومرادفها 'failure'. مثال: The new movie was a complete flop. (الفيلم الجديد كان فشلاً ذريعاً).",
    "unit": "UNIT 7 - Everyone Makes Mistakes"
  },
  {
    "question": "What is the definition of \"novelty\"?",
    "options": [
      "raise",
      "interfered with",
      "new thing",
      "very angry"
    ],
    "answer": "new thing",
    "explanation": "شرح: كلمة 'novelty' تعني حداثة أو شيء جديد، ومرادفها 'new thing'. مثال: The novelty of the toy soon wore off. (حداثة اللعبة تلاشت قريباً).",
    "unit": "UNIT 7 - Everyone Makes Mistakes"
  },
  {
    "question": "What is the definition of \"outraged\"?",
    "options": [
      "raise",
      "interfered with",
      "put up with",
      "very angry"
    ],
    "answer": "very angry",
    "explanation": "شرح: كلمة 'outraged' تعني غاضب جداً أو ساخط، ومرادفها 'very angry'. مثال: He was outraged by the unfair decision. (كان غاضباً جداً من القرار غير العادل).",
    "unit": "UNIT 7 - Everyone Makes Mistakes"
  },
  {
    "question": "What is the definition of \"tampered\"?",
    "options": [
      "raise",
      "failure",
      "put up with",
      "interfered with"
    ],
    "answer": "interfered with",
    "explanation": "شرح: كلمة 'tampered' تعني العبث بـ أو التدخل في شيء لتخريبه، ومرادفها 'interfered with'. مثال: Someone tampered with the lock. (شخص ما عبث بالقفل).",
    "unit": "UNIT 7 - Everyone Makes Mistakes"
  },
  {
    "question": "I have a sore throat. I _____ caught your cold.",
    "options": [
      "may have",
      "should have"
    ],
    "answer": "may have",
    "explanation": "شرح: نستخدم 'may have + V3' لاستنتاج شيء ربما حدث في الماضي (احتمالية). مثال: I may have left my keys at home. (ربما تركت مفاتيحي في المنزل).",
    "unit": "UNIT 7 - Everyone Makes Mistakes"
  },
  {
    "question": "He _____ know about the business deal, but he found out by accident.",
    "options": [
      "shouldn't have",
      "wasn't supposed to"
    ],
    "answer": "wasn't supposed to",
    "explanation": "شرح: نستخدم 'wasn\\'t supposed to' للتعبير عن شيء لم يكن من المفترض أن يحدث (خطة أو اتفاق لم يتبع). مثال: You weren\\'t supposed to tell anyone! (لم يكن من المفترض أن تخبر أحداً!).",
    "unit": "UNIT 7 - Everyone Makes Mistakes"
  },
  {
    "question": "You have a big smile on your face in all the vacation pictures. You _____ had a great time.",
    "options": [
      "should have",
      "must have"
    ],
    "answer": "must have",
    "explanation": "شرح: نستخدم 'must have + V3' لاستنتاج مؤكد في الماضي مبني على دليل قوي. (هنا الدليل هو الابتسامة). مثال: You must have been tired after the long trip. (لابد أنك كنت متعباً بعد الرحلة).",
    "unit": "UNIT 7 - Everyone Makes Mistakes"
  },
  {
    "question": "I don't know where she is, but she was very tired. She _____ gone to bed.",
    "options": [
      "should have",
      "may have"
    ],
    "answer": "may have",
    "explanation": "شرح: نستخدم 'may have + V3' لافتراض احتمالي في الماضي عندما لا نكون متأكدين بنسبة 100%. مثال: She may have missed the bus. (ربما فاتتها الحافلة).",
    "unit": "UNIT 7 - Everyone Makes Mistakes"
  },
  {
    "question": "I _____ paid more attention in English class. Now I'm completely confused.",
    "options": [
      "must have",
      "should have"
    ],
    "answer": "should have",
    "explanation": "شرح: نستخدم \"should have\" متبوعة بالتصريف الثالث للفعل للتعبير عن الندم على شيء لم نفعله في الماضي رغم أنه كان من الأفضل فعله. المثال: I should have studied harder. (كان ينبغي علي أن أدرس بجدية أكبر).",
    "unit": "UNIT 7 - Everyone Makes Mistakes"
  },
  {
    "question": "I _____ ordered that new laptop. It was way too expensive.",
    "options": [
      "must have",
      "shouldn't have"
    ],
    "answer": "shouldn't have",
    "explanation": "شرح: نستخدم \"shouldn't have\" متبوعة بالتصريف الثالث للتعبير عن الندم على فعل شيء في الماضي لم يكن من الأفضل القيام به. المثال: You shouldn't have eaten all that cake. (لم يكن ينبغي لك أن تأكل كل تلك الكعكة).",
    "unit": "UNIT 7 - Everyone Makes Mistakes"
  },
  {
    "question": "Did you get the package? It _____ arrive by today.",
    "options": [
      "was supposed to",
      "must have"
    ],
    "answer": "was supposed to",
    "explanation": "شرح: نستخدم \"was/were supposed to\" متبوعة بالفعل في المصدر للتعبير عن شيء كان من المتوقع أو المخطط حدوثه في الماضي ولكنه لم يحدث. المثال: The train was supposed to arrive at 8:00 AM. (كان من المفترض أن يصل القطار في الساعة 8:00 صباحاً).",
    "unit": "UNIT 7 - Everyone Makes Mistakes"
  },
  {
    "question": "You _____ said that. Now you've hurt your friend's feelings.",
    "options": [
      "should not have",
      "may not have"
    ],
    "answer": "should not have",
    "explanation": "شرح: نستخدم \"should not have\" مع التصريف الثالث للفعل لنوجه لوماً أو نعبّر عن أن فعلاً في الماضي كان خطأً. المثال: You should not have lied to me. (لم يكن ينبغي لك أن تكذب علي).",
    "unit": "UNIT 7 - Everyone Makes Mistakes"
  },
  {
    "question": "More laws need to be passed to ______ the planet. I don't think we're doing enough.",
    "options": [
      "vulnerable",
      "priority",
      "safeguard",
      "pledged"
    ],
    "answer": "safeguard",
    "explanation": "شرح: الكلمة \"safeguard\" تعني \"يصون\" أو \"يحمي\" من الخطر أو الضرر. تستخدم كفعل للتعبير عن توفير الحماية. المثال: We must safeguard our personal information online. (يجب أن نحمي معلوماتنا الشخصية على الإنترنت).",
    "unit": "UNIT 8 - Against the Odds"
  },
  {
    "question": "The student ______ to follow the school's ethical code of conduct.",
    "options": [
      "pledged",
      "summit",
      "safeguard",
      "disruption"
    ],
    "answer": "pledged",
    "explanation": "شرح: الفعل \"pledge\" (في الماضي pledged) يعني \"تعهد\" أو \"أعطى وعداً رسمياً\" بفعل شيء ما. المثال: He pledged to donate money to the charity. (تعهد بالتبرع بالمال للجمعية الخيرية).",
    "unit": "UNIT 8 - Against the Odds"
  },
  {
    "question": "The leaders of 12 African countries attended the ______ to discuss how to improve trade.",
    "options": [
      "vulnerable",
      "disruption",
      "priority",
      "summit"
    ],
    "answer": "summit",
    "explanation": "شرح: كلمة \"summit\" تعني \"قمة\" وتستخدم غالباً للإشارة إلى اجتماع يضم قادة أو رؤساء دول لمناقشة أمور مهمة. المثال: The presidents met at the global summit. (التقى الرؤساء في القمة العالمية).",
    "unit": "UNIT 8 - Against the Odds"
  },
  {
    "question": "Children are the most ______ members of our society, so we should protect them.",
    "options": [
      "vulnerable",
      "pledged",
      "summit",
      "safeguard"
    ],
    "answer": "vulnerable",
    "explanation": "شرح: صفة \"vulnerable\" تعني \"ضعيف\" أو \"معرض للأذى/الخطر\" سواء كان جسدياً أو نفسياً. المثال: Old people are particularly vulnerable to the flu. (كبار السن معرضون بشكل خاص للإصابة بالأنفلونزا).",
    "unit": "UNIT 8 - Against the Odds"
  },
  {
    "question": "You can help me wash the dishes, but that isn't a ______. Studying for exams is much more important.",
    "options": [
      "safeguard",
      "priority",
      "disruption",
      "vulnerable"
    ],
    "answer": "priority",
    "explanation": "شرح: كلمة \"priority\" تعني \"أولوية\"، أي الشيء الذي يعتبر أكثر أهمية من الأشياء الأخرى ويجب التعامل معه أولاً. المثال: My priority is to finish my homework. (أولويتي هي إنهاء واجباتي المدرسية).",
    "unit": "UNIT 8 - Against the Odds"
  },
  {
    "question": "A huge bird flew into our classroom today, knocking over books and causing a huge ______.",
    "options": [
      "summit",
      "pledged",
      "disruption",
      "priority"
    ],
    "answer": "disruption",
    "explanation": "شرح: كلمة \"disruption\" تعني \"اضطراب\" أو \"عرقلة\" لسير الأمور الطبيعي بسبب حدث مفاجئ. المثال: The storm caused a major disruption to train services. (تسببت العاصفة في اضطراب كبير لخدمات القطارات).",
    "unit": "UNIT 8 - Against the Odds"
  },
  {
    "question": "My grandfather drives ______ slowly that other drivers get annoyed.",
    "options": [
      "so",
      "so many",
      "such a",
      "so much"
    ],
    "answer": "so",
    "explanation": "شرح: نستخدم \"so\" متبوعة بصفة (أو ظرف) ثم \"that\" للتعبير عن النتيجة، وتعني \"لدرجة أن\". المثال: He was so tired that he fell asleep immediately. (كان متعباً جداً لدرجة أنه نام على الفور).",
    "unit": "UNIT 8 - Against the Odds"
  },
  {
    "question": "I got ______ sleep last night that I feel exhausted today.",
    "options": [
      "so little",
      "so much",
      "such a",
      "so few"
    ],
    "answer": "so little",
    "explanation": "شرح: نستخدم \"so little\" متبوعة باسم غير معدود للتعبير عن كمية ضئيلة جداً لدرجة تؤدي إلى نتيجة معينة. المثال: I have so little time that I can't take a break. (لدي وقت قليل جداً لدرجة أنني لا أستطيع أخذ استراحة).",
    "unit": "UNIT 8 - Against the Odds"
  },
  {
    "question": "He has ______ big family that he has cousins he hasn't even met.",
    "options": [
      "so much",
      "so many",
      "such a",
      "so"
    ],
    "answer": "such a",
    "explanation": "شرح: نستخدم \"such a/an\" متبوعة بصفة واسم مفرد معدود للإشارة إلى درجة قوية من شيء ما أدت إلى نتيجة معينة. المثال: It was such a beautiful day that we went to the beach. (لقد كان يوماً جميلاً جداً لدرجة أننا ذهبنا إلى الشاطئ).",
    "unit": "UNIT 8 - Against the Odds"
  },
  {
    "question": "They are ______ good friends that they are more like brothers.",
    "options": [
      "so",
      "so many",
      "such",
      "such a"
    ],
    "answer": "such",
    "explanation": "شرح: نستخدم \"such\" (بدون a/an) عندما يأتي بعدها صفة واسم جمع للتعبير عن المبالغة المؤدية لنتيجة. المثال: They are such nice people that everyone likes them. (إنهم أشخاص لطفاء جداً لدرجة أن الجميع يحبهم).",
    "unit": "UNIT 8 - Against the Odds"
  },
  {
    "question": "The restaurant was ______ crowded that we couldn't get a seat.",
    "options": [
      "so much",
      "such a",
      "so many",
      "so"
    ],
    "answer": "so",
    "explanation": "شرح: تُستخدم \"so\" قبل الصفة لبيان قوة أو شدة الصفة لدرجة تُحدث نتيجة تُذكر بعد \"that\". المثال: The test was so difficult that many students failed. (كان الاختبار صعباً جداً لدرجة أن العديد من الطلاب رسبوا).",
    "unit": "UNIT 8 - Against the Odds"
  },
  {
    "question": "There are ______ rooms left in the hotel that we'll have to take whatever is available.",
    "options": [
      "so little",
      "so few",
      "so many",
      "such"
    ],
    "answer": "so few",
    "explanation": "شرح: تُستخدم \"so few\" متبوعة باسم جمع للإشارة إلى عدد قليل جداً ينتج عنه أثر أو نتيجة معينة. المثال: There were so few tickets left that they sold out in minutes. (كان هناك عدد قليل جداً من التذاكر المتبقية لدرجة أنها بيعت في دقائق).",
    "unit": "UNIT 8 - Against the Odds"
  },
  {
    "question": "There are ______ good courses this year that I can't decide which ones to take.",
    "options": [
      "so many",
      "so much",
      "so few",
      "such a"
    ],
    "answer": "so many",
    "explanation": "شرح: تُستخدم \"so many\" قبل الاسم الجمع المعدود للتعبير عن كثرة العدد لدرجة تنتج عنها حالة معينة تذكر بعد \"that\". المثال: There are so many options that I am confused. (هناك خيارات كثيرة جداً لدرجة أنني في حيرة).",
    "unit": "UNIT 8 - Against the Odds"
  },
  {
    "question": "It's too bad we didn't know you were there. We ______ met up.",
    "options": [
      "was supposed to",
      "could have",
      "shouldn't have"
    ],
    "answer": "could have",
    "explanation": "شرح: تُستخدم \"could have\" مع التصريف الثالث للتعبير عن شيء كان ممكناً حدوثه في الماضي ولكنه لم يحدث. المثال: You could have told me! (كان بإمكانك أن تخبرني!).",
    "unit": "UNIT 8 - Against the Odds"
  },
  {
    "question": "She ______ study biology in school, but she ended up studying medicine instead.",
    "options": [
      "was supposed to",
      "must have",
      "could have"
    ],
    "answer": "was supposed to",
    "explanation": "شرح: نستخدم \"was/were supposed to\" متبوعة بالمصدر للتعبير عن التزام أو خطة كانت مفترضة في الماضي ولم تتم كما خطط لها. المثال: I was supposed to call him, but I forgot. (كان من المفترض أن أتصل به، لكني نسيت).",
    "unit": "UNIT 8 - Against the Odds"
  },
  {
    "question": "Farah ______ gone to Dubai this summer, but she decided to stay home instead.",
    "options": [
      "couldn't have",
      "could have",
      "was supposed to"
    ],
    "answer": "could have",
    "explanation": "شرح: تُستخدم \"could have\" مع التصريف الثالث لبيان وجود خيار أو قدرة على فعل شيء في الماضي ولكن تم اختيار عدم القيام به. المثال: He could have won the race, but he tripped. (كان بإمكانه الفوز بالسباق، لكنه تعثر).",
    "unit": "UNIT 8 - Against the Odds"
  },
  {
    "question": "He ______ have said that. I think they must have misunderstood him.",
    "options": [
      "couldn't",
      "was supposed to",
      "could"
    ],
    "answer": "couldn't",
    "explanation": "شرح: تُستخدم \"couldn't have\" (بإضافة have والتصريف الثالث) للتعبير عن الاستحالة أو الاستنتاج المنطقي السلبي في الماضي (من المستحيل أنه فعل ذلك). المثال: She couldn't have stolen the car; she doesn't know how to drive. (من المستحيل أنها سرقت السيارة؛ إنها لا تعرف كيف تقود).",
    "unit": "UNIT 8 - Against the Odds"
  },
  {
    "question": "It was such a beautiful day today. We ______ gone to the beach.",
    "options": [
      "wasn't supposed to",
      "should have",
      "couldn't have"
    ],
    "answer": "should have",
    "explanation": "شرح: نستخدم \"should have\" متبوعة بالتصريف الثالث للتعبير عن شيء كان من المفترض القيام به في الماضي ولكنه لم يُنفذ، كنوع من الندم أو العتب. المثال: We should have brought umbrellas. (كان ينبغي علينا إحضار المظلات).",
    "unit": "UNIT 8 - Against the Odds"
  },
  {
    "question": "What is the definition of \"absent-minded\"?",
    "options": [
      "forgetful, distracted",
      "harm",
      "a material that causes two materials to stick together",
      "something done without thought"
    ],
    "answer": "forgetful, distracted",
    "explanation": "شرح: مصطلح \"absent-minded\" يصف الشخص الذي ينسى الأشياء كثيراً أو لا يركز مع ما يدور حوله (شارد الذهن). المثال: The absent-minded professor forgot his keys. (نسي الأستاذ شارد الذهن مفاتيحه).",
    "unit": "UNIT 8 - Against the Odds"
  },
  {
    "question": "What is the definition of \"adhesive\"?",
    "options": [
      "a material that causes two materials to stick together",
      "something done without thought",
      "thrown away",
      "harm"
    ],
    "answer": "a material that causes two materials to stick together",
    "explanation": "شرح: كلمة \"adhesive\" تعني \"مادة لاصقة\"، أي المادة التي تُستخدم للصق الأشياء ببعضها مثل الغراء. المثال: You need a strong adhesive to fix this broken vase. (تحتاج إلى مادة لاصقة قوية لإصلاح هذه المزهرية المكسورة).",
    "unit": "UNIT 8 - Against the Odds"
  },
  {
    "question": "What is the definition of \"automatically\"?",
    "options": [
      "something done without thought, as is done by a machine",
      "harm",
      "thrown away",
      "found everywhere"
    ],
    "answer": "something done without thought, as is done by a machine",
    "explanation": "شرح: ظرف \"automatically\" يعني \"تلقائياً\" أو بشكل آلي دون حاجة للتدخل البشري. المثال: The doors open automatically when someone approaches. (تُفتح الأبواب تلقائياً عندما يقترب شخص ما).",
    "unit": "UNIT 8 - Against the Odds"
  },
  {
    "question": "What is the definition of \"damage\"?",
    "options": [
      "thrown away",
      "forgetful, distracted",
      "found everywhere",
      "harm"
    ],
    "answer": "harm",
    "explanation": "شرح: كلمة \"damage\" تعني \"أذى\" أو \"تلف\" يُصيب شيئاً ما ويقلل من قيمته أو كفاءته. المثال: The storm caused a lot of damage to the houses. (أحدثت العاصفة الكثير من الأضرار بالمنازل).",
    "unit": "UNIT 8 - Against the Odds"
  },
  {
    "question": "What is the definition of \"discarded\"?",
    "options": [
      "thrown away",
      "found everywhere",
      "forgetful, distracted",
      "a material that causes two materials to stick together"
    ],
    "answer": "thrown away",
    "explanation": "شرح: كلمة \"discarded\" هي صفة (أو تصريف ثالث) تعني شيئاً تم رميه أو التخلص منه لأنه لم يعد مرغوباً فيه أو مفيداً. المثال: He picked up a discarded newspaper from the seat. (التقط صحيفة مهملة من المقعد).",
    "unit": "UNIT 8 - Against the Odds"
  },
  {
    "question": "What is the definition of \"ubiquitous\"?",
    "options": [
      "forgetful, distracted",
      "something done without thought",
      "found everywhere",
      "a material that causes two materials to stick together"
    ],
    "answer": "found everywhere",
    "explanation": "شرح: كلمة \"ubiquitous\" هي صفة تعني أن شيئاً ما متواجد أو واسع الانتشار في كل مكان وبشكل ملحوظ. المثال: Mobile phones have become ubiquitous in modern society. (أصبحت الهواتف المحمولة موجودة في كل مكان في المجتمع الحديث).",
    "unit": "UNIT 8 - Against the Odds"
  },
  {
    "question": "A company rejected the patent for ______ telephone.",
    "options": [
      "a",
      "the",
      "(no article)",
      "an"
    ],
    "answer": "the",
    "explanation": "شرح: نستخدم أداة التعريف \"the\" مع الاختراعات عند الحديث عنها بشكل عام كنوع أو فئة وليس كجهاز واحد محدد. المثال: Alexander Graham Bell invented the telephone. (اخترع ألكسندر جراهام بيل الهاتف).",
    "unit": "UNIT 8 - Against the Odds"
  },
  {
    "question": "William Orton was offered the patent for ______ invention called the telephone.",
    "options": [
      "the",
      "an",
      "(no article)",
      "a"
    ],
    "answer": "an",
    "explanation": "شرح: نستخدم أداة النكرة \"an\" قبل الاسم المفرد المعدود الذي يبدأ بصوت متحرك (مثل i في كلمة invention). وتدل على شيء واحد غير محدد مسبقاً. المثال: She had an amazing idea. (كانت لديها فكرة مذهلة).",
    "unit": "UNIT 8 - Against the Odds"
  },
  {
    "question": "Orton may have made ______ worst business mistake in history.",
    "options": [
      "(no article)",
      "a",
      "the",
      "an"
    ],
    "answer": "the",
    "explanation": "شرح: نستخدم أداة التعريف \"the\" مع صيغة التفضيل العليا (superlative adjectives) مثل \"worst\" لتوضيح أن الشيء أو الشخص هو الأعلى أو الأقل في صفة معينة. المثال: He is the tallest boy in the class.",
    "unit": "UNIT 8 - Against the Odds"
  },
  {
    "question": "______ Alaska had been considered a burden rather than ______ asset by ______ Russia.",
    "options": [
      "a, the, -",
      "-, a, -",
      "-, an, -",
      "the, a, the"
    ],
    "answer": "-, an, -",
    "explanation": "شرح: لا نستخدم أداة تعريف (-) مع أسماء الدول أو الولايات مثل \"Alaska\" و \"Russia\". ونستخدم الأداة التنكيرية \"an\" قبل الكلمات المفردة التي تبدأ بصوت متحرك مثل \"asset\". المثال: She visited Italy and bought an umbrella.",
    "unit": "UNIT 8 - Against the Odds"
  },
  {
    "question": "Can I have ______ water, please?",
    "options": [
      "some",
      "any"
    ],
    "answer": "some",
    "explanation": "شرح: نستخدم \"some\" مع الأسماء غير المعدودة (مثل water) في الجمل الطلبية (الطلب المؤدب) أو العروض، بدلاً من \"any\". المثال: Would you like some tea?",
    "unit": "UNIT 8 - Against the Odds"
  },
  {
    "question": "Do you have ______ questions about the project?",
    "options": [
      "any",
      "some"
    ],
    "answer": "any",
    "explanation": "شرح: نستخدم \"any\" في الجمل الاستفهامية (الأسئلة) مع الأسماء المعدودة في صيغة الجمع (مثل questions) أو غير المعدودة للاستفسار عن وجود شيء ما. المثال: Do you have any money?",
    "unit": "UNIT 8 - Against the Odds"
  },
  {
    "question": "Would you like ______ coffee?",
    "options": [
      "some",
      "any"
    ],
    "answer": "some",
    "explanation": "شرح: نستخدم \"some\" في صيغة السؤال عندما نعرض على شخص شيئاً (العرض المؤدب)، مع الأسماء المعدودة وغير المعدودة. المثال: Would you like some biscuits?",
    "unit": "UNIT 8 - Against the Odds"
  },
  {
    "question": "Are there ______ books on the topic?",
    "options": [
      "some",
      "any"
    ],
    "answer": "any",
    "explanation": "شرح: نستخدم \"any\" في الأسئلة للسؤال عن توفر كمية أو عدد من الأسماء المعدودة الجمع أو غير المعدودة. المثال: Are there any apples left?",
    "unit": "UNIT 8 - Against the Odds"
  },
  {
    "question": "Is there ______ milk left in the fridge?",
    "options": [
      "any",
      "some"
    ],
    "answer": "any",
    "explanation": "شرح: تماماً مثل الأسماء المعدودة، نستخدم \"any\" في الأسئلة للسؤال عن الأسماء غير المعدودة (مثل milk). المثال: Is there any sugar in the tea?",
    "unit": "UNIT 8 - Against the Odds"
  },
  {
    "question": "She seems to have an ______ with handbags. She can't stop buying them.",
    "options": [
      "privileged",
      "obsession",
      "synthetic",
      "appealing"
    ],
    "answer": "obsession",
    "explanation": "شرح: الكلمة المناسبة للسياق هي \"obsession\" (هوس)، وهي اسم (Noun) يشير إلى التعلق الشديد بشيء ما، وتأتي بعد أداة التنكير \"an\". المثال: He has an obsession with cleanliness.",
    "unit": "UNIT 9 - Beauty Is Only Skin Deep"
  },
  {
    "question": "The outbreak of food poisoning was ______ to a shipment of bad tomatoes.",
    "options": [
      "obsession",
      "appealing",
      "traced",
      "extracted"
    ],
    "answer": "traced",
    "explanation": "شرح: نستخدم الفعل \"traced\" (تم تتبعه/إرجاعه) في صيغة المبني للمجهول \"was traced to\" للإشارة إلى اكتشاف مصدر المشكلة. المثال: The problem was traced to a software bug.",
    "unit": "UNIT 9 - Beauty Is Only Skin Deep"
  },
  {
    "question": "The scientist ______ genetic information from the skin sample.",
    "options": [
      "extracted",
      "traced",
      "elements",
      "synthetic"
    ],
    "answer": "extracted",
    "explanation": "شرح: الكلمة الصحيحة هي \"extracted\" (استخرج) كفعل ماضٍ (Past Verb) وتعني سحب شيء أو الحصول عليه من شيء آخر. المثال: They extracted oil from the ground.",
    "unit": "UNIT 9 - Beauty Is Only Skin Deep"
  },
  {
    "question": "Iron, copper, oxygen, and carbon are all examples of ______.",
    "options": [
      "privileged",
      "synthetic",
      "elements",
      "appealing"
    ],
    "answer": "elements",
    "explanation": "شرح: الكلمة المناسبة هي \"elements\" (عناصر) وهي اسم جمع (Plural Noun) وتُستخدم للإشارة إلى المواد الكيميائية الأساسية. المثال: Gold is a precious element.",
    "unit": "UNIT 9 - Beauty Is Only Skin Deep"
  },
  {
    "question": "There are no natural materials in this shirt. It's all ______.",
    "options": [
      "extracted",
      "appealing",
      "elements",
      "synthetic"
    ],
    "answer": "synthetic",
    "explanation": "شرح: الكلمة المناسبة هي الصفة \"synthetic\" (صناعي) وتُستخدم لوصف المواد غير الطبيعية التي يصنعها الإنسان. المثال: The shoes are made of synthetic leather.",
    "unit": "UNIT 9 - Beauty Is Only Skin Deep"
  },
  {
    "question": "You should feel ______ that you get to attend one of the best universities in the country.",
    "options": [
      "privileged",
      "appealing",
      "synthetic",
      "obsession"
    ],
    "answer": "privileged",
    "explanation": "شرح: الصفة \"privileged\" (محظوظ/يحظى بامتياز) تُستخدم لوصف الشعور بالحصول على فرصة نادرة أو ميزة خاصة، وتأتي بعد الفعل \"feel\". المثال: I feel privileged to work with you.",
    "unit": "UNIT 9 - Beauty Is Only Skin Deep"
  },
  {
    "question": "The food was left out overnight, so it no longer looked very ______.",
    "options": [
      "appealing",
      "obsession",
      "privileged",
      "elements"
    ],
    "answer": "appealing",
    "explanation": "شرح: الصفة \"appealing\" (جذاب/مشهي) تصف شيئاً يثير الإعجاب أو الرغبة، ونفيها هنا يناسب حالة الطعام المتروك. تأتي بعد الفعل \"look\". المثال: The idea of a holiday is very appealing.",
    "unit": "UNIT 9 - Beauty Is Only Skin Deep"
  },
  {
    "question": "Don't ______ you are supposed to meet us at the restaurant at 7:30 tonight.",
    "options": [
      "forget that",
      "complain that",
      "hope that"
    ],
    "answer": "forget that",
    "explanation": "شرح: نستخدم \"forget that\" (تنسى أن) كجملة أمرية منفية (Negative Imperative) متبوعة بجملة فعلية للتذكير بفعل شيء أو حدث مهم. المثال: Don't forget that we have an exam tomorrow.",
    "unit": "UNIT 9 - Beauty Is Only Skin Deep"
  },
  {
    "question": "We're sorry to hear that you're sick. We ______ you get better quickly.",
    "options": [
      "hope that",
      "suspect that",
      "forget that"
    ],
    "answer": "hope that",
    "explanation": "شرح: نستخدم الفعل \"hope that\" (نأمل أن) للتعبير عن تمني حدوث شيء جيد في المستقبل، ويأتي بعدها جملة كاملة (فاعل وفعل). المثال: I hope that you will succeed.",
    "unit": "UNIT 9 - Beauty Is Only Skin Deep"
  },
  {
    "question": "I ______ you like that color, but I think you look better in green.",
    "options": [
      "forget that",
      "know that",
      "complain that"
    ],
    "answer": "know that",
    "explanation": "شرح: نستخدم \"know that\" (أعرف أن) للتعبير عن إدراك حقيقة معينة قبل تقديم رأي مخالف. المثال: I know that it's late, but I must finish this.",
    "unit": "UNIT 9 - Beauty Is Only Skin Deep"
  },
  {
    "question": "She's always ______ it's too hot or too cold.",
    "options": [
      "hoping that",
      "complaining that",
      "reporting that"
    ],
    "answer": "complaining that",
    "explanation": "شرح: نستخدم \"complaining that\" (تشتكي من أن) لوصف شخص يعبر عن عدم رضاه باستمرار، وتأتي مع \"always\" في المضارع المستمر للتعبير عن العادة المزعجة. المثال: He is always complaining that he is tired.",
    "unit": "UNIT 9 - Beauty Is Only Skin Deep"
  },
  {
    "question": "I ______ you were going to come to the park with us.",
    "options": [
      "report that",
      "thought that",
      "forget that"
    ],
    "answer": "thought that",
    "explanation": "شرح: نستخدم \"thought that\" (اعتقدت أن) للتعبير عن اعتقاد في الماضي تبين أنه غير صحيح أو مختلف عن الواقع. المثال: I thought that it was going to rain.",
    "unit": "UNIT 9 - Beauty Is Only Skin Deep"
  },
  {
    "question": "The police ______ the criminal escaped the country.",
    "options": [
      "forget that",
      "reported that",
      "complain that"
    ],
    "answer": "reported that",
    "explanation": "شرح: نستخدم الفعل \"reported that\" (أبلغوا أن/أفادوا بأن) لنقل الأخبار أو المعلومات الرسمية (Reported Speech) ويأتي بعدها جملة كاملة. المثال: The news reported that the road is closed.",
    "unit": "UNIT 9 - Beauty Is Only Skin Deep"
  },
  {
    "question": "What is the definition of \"detectable\"?",
    "options": [
      "remaining whole and unharmed",
      "able to be found",
      "very thin and tired",
      "confused"
    ],
    "answer": "able to be found",
    "explanation": "شرح: الكلمة \"detectable\" عبارة عن صفة (Adjective) تعني \"يمكن اكتشافه\" أو \"ملاحظته\". تتكون من الفعل detect واللاحقة able-. المثال: The sound was barely detectable.",
    "unit": "UNIT 9 - Beauty Is Only Skin Deep"
  },
  {
    "question": "What is the definition of \"disoriented\"?",
    "options": [
      "confused",
      "able to be found",
      "very thin and tired",
      "very surprising"
    ],
    "answer": "confused",
    "explanation": "شرح: الكلمة \"disoriented\" هي صفة تعني \"تائه\" أو \"مشوش\"، وتُستخدم لوصف فقدان الاتجاه أو الارتباك، وتعمل هنا كصفة تصف حالة الشخص. المثال: When he woke up, he felt completely disoriented.",
    "unit": "UNIT 9 - Beauty Is Only Skin Deep"
  },
  {
    "question": "What is the definition of \"exhilarating\"?",
    "options": [
      "able to be found",
      "very thin and tired",
      "causing a strong feeling of excitement and happiness",
      "imagining things that are not real"
    ],
    "answer": "causing a strong feeling of excitement and happiness",
    "explanation": "شرح: الكلمة \"exhilarating\" تعني \"مبهج\" أو \"مثير جداً\"، وهي صفة (Adjective) منتهية بـ ing تُستخدم لوصف الأشياء أو التجارب التي تمنح شعوراً بالسعادة. المثال: The roller coaster ride was exhilarating.",
    "unit": "UNIT 9 - Beauty Is Only Skin Deep"
  },
  {
    "question": "What is the definition of \"haggard\"?",
    "options": [
      "very thin and tired",
      "imagining things that are not real",
      "remaining whole and unharmed",
      "confused"
    ],
    "answer": "very thin and tired",
    "explanation": "شرح: الكلمة \"haggard\" صفة (Adjective) تعني \"شاحب ومتعب\"، وتصف المظهر المرهق بسبب التعب أو القلق. المثال: After working all night, he looked haggard.",
    "unit": "UNIT 9 - Beauty Is Only Skin Deep"
  },
  {
    "question": "What is the definition of \"hallucinating\"?",
    "options": [
      "the quality of radio waves received by a device",
      "imagining things that are not real",
      "remaining whole and unharmed",
      "very surprising"
    ],
    "answer": "imagining things that are not real",
    "explanation": "شرح: الكلمة \"hallucinating\" (يهلوس) هي فعل في صيغة الاستمرار (Continuous Form) يعبر عن تخيل أشياء غير موجودة في الواقع. المثال: He had a high fever and started hallucinating.",
    "unit": "UNIT 9 - Beauty Is Only Skin Deep"
  },
  {
    "question": "What is the definition of \"intact\"?",
    "options": [
      "able to be found",
      "very surprising",
      "remaining whole and unharmed",
      "the quality of radio waves received by a device"
    ],
    "answer": "remaining whole and unharmed",
    "explanation": "شرح: الكلمة \"intact\" صفة (Adjective) تعني \"سليم\" أو \"غير متضرر\"، وتستخدم لوصف شيء لم يمسه التلف. المثال: The glass vase survived the fall intact.",
    "unit": "UNIT 9 - Beauty Is Only Skin Deep"
  },
  {
    "question": "What is the definition of \"reception\"?",
    "options": [
      "the quality of radio waves received by a device",
      "able to be found",
      "confused",
      "very surprising"
    ],
    "answer": "the quality of radio waves received by a device",
    "explanation": "شرح: الكلمة \"reception\" هنا اسم (Noun) يعني \"الاستقبال\" في سياق جودة إشارات الراديو أو الهاتف. المثال: The TV reception is very poor here.",
    "unit": "UNIT 9 - Beauty Is Only Skin Deep"
  },
  {
    "question": "What is the definition of \"startling\"?",
    "options": [
      "causing a strong feeling of excitement and happiness",
      "very surprising",
      "able to be found",
      "confused"
    ],
    "answer": "very surprising",
    "explanation": "شرح: الكلمة \"startling\" صفة (Adjective) تعني \"مفاجئ\" أو \"مذهل\" وتسبب دهشة أو فزعاً خفيفاً. تتكون من الفعل startle واللاحقة ing. المثال: She gave a startling answer to the question.",
    "unit": "UNIT 9 - Beauty Is Only Skin Deep"
  },
  {
    "question": "Ahmed ______ (cook) his favorite meal when the pan ______ (catch) fire.",
    "options": [
      "was cooking / caught",
      "had cooked / had caught",
      "cooked / caught"
    ],
    "answer": "was cooking / caught",
    "explanation": "شرح: نستخدم الماضي المستمر (Past Continuous: was cooking) لحدث كان مستمراً في الماضي، والماضي البسيط (Past Simple: caught) لحدث مفاجئ قطعه، وعادة نربطهما بكلمة \"when\". المثال: I was sleeping when the phone rang.",
    "unit": "UNIT 9 - Beauty Is Only Skin Deep"
  },
  {
    "question": "By the time we ______ (arrive) at the picnic, the rain ______ (stop).",
    "options": [
      "arrived / had stopped",
      "had arrived / stopped",
      "arrived / stopped"
    ],
    "answer": "arrived / had stopped",
    "explanation": "شرح: نستخدم الماضي التام (Past Perfect: had stopped) للحدث الذي وقع أولاً، والماضي البسيط (Past Simple: arrived) للحدث الذي وقع بعده. الرابط \"By the time\" يدل على هذا الترتيب الزمني. المثال: By the time I reached the station, the train had left.",
    "unit": "UNIT 9 - Beauty Is Only Skin Deep"
  },
  {
    "question": "Dinosaurs ______ (be) extinct for millions of years before the first humans ______ (appear).",
    "options": [
      "had been / appeared",
      "have been / appear",
      "were / had appeared"
    ],
    "answer": "had been / appeared",
    "explanation": "شرح: نستخدم الماضي التام (had been) للإشارة إلى الحدث الذي وقع أولاً في الماضي، والماضي البسيط (appeared) للحدث الذي وقع بعده، وعادة نربطهما بكلمة \"before\". مثال: They had finished the work before the manager arrived.",
    "unit": "UNIT 9 - Beauty Is Only Skin Deep"
  },
  {
    "question": "I ______ (never, travel) outside my country until I ______ (go) to Disney World last summer.",
    "options": [
      "have never traveled / went",
      "had never traveled / went",
      "never traveled / had gone"
    ],
    "answer": "had never traveled / went",
    "explanation": "شرح: نستخدم الماضي التام (had never traveled) للحدث الأقدم قبل وقت محدد في الماضي، والماضي البسيط (went) بعد الرابط 'until'. مثال: She had never seen snow until she visited Canada.",
    "unit": "UNIT 9 - Beauty Is Only Skin Deep"
  },
  {
    "question": "We wanted to get a picture of the meteorite, but when we ______ (arrive), the police ______ (already, take) it away.",
    "options": [
      "had arrived / already took",
      "arrive / have already taken",
      "arrived / had already taken"
    ],
    "answer": "arrived / had already taken",
    "explanation": "شرح: نستخدم الماضي البسيط (arrived) للحدث الأحدث بعد 'when'، والماضي التام (had already taken) للحدث الذي وقع واكتمل قبله. مثال: When I got to the station, the train had already left.",
    "unit": "UNIT 9 - Beauty Is Only Skin Deep"
  },
  {
    "question": "What is the definition of \"emerge\"?",
    "options": [
      "feeling rather than reason or behavior",
      "idea of perfection",
      "appear",
      "serious food shortage"
    ],
    "answer": "appear",
    "explanation": "شرح: كلمة 'emerge' تعني (يظهر أو يبرز)، ومرادفها 'appear'. مثال: The sun began to emerge from behind the clouds. (بدأت الشمس تظهر من خلف الغيوم).",
    "unit": "UNIT 9 - Beauty Is Only Skin Deep"
  },
  {
    "question": "What is the definition of \"famine\"?",
    "options": [
      "feeling rather than reason or behavior",
      "serious food shortage",
      "slightly overweight",
      "idea of perfection"
    ],
    "answer": "serious food shortage",
    "explanation": "شرح: كلمة 'famine' تعني (مجاعة أو نقص حاد في الغذاء)، ومرادفها 'serious food shortage'. مثال: The long drought caused a severe famine. (تسبب الجفاف الطويل في مجاعة شديدة).",
    "unit": "UNIT 9 - Beauty Is Only Skin Deep"
  },
  {
    "question": "What is the definition of \"ideal\"?",
    "options": [
      "feeling rather than reason or behavior",
      "slightly overweight",
      "idea of perfection",
      "the relationship of one part of something"
    ],
    "answer": "idea of perfection",
    "explanation": "شرح: كلمة 'ideal' تعني (مثالي أو نموذج للكمال)، ومرادفها 'idea of perfection'. مثال: This beach is an ideal place for a vacation. (هذا الشاطئ هو مكان مثالي لقضاء العطلة).",
    "unit": "UNIT 9 - Beauty Is Only Skin Deep"
  },
  {
    "question": "What is the definition of \"instinctive\"?",
    "options": [
      "the relationship of one part of something",
      "feeling rather than reason or behavior",
      "something against which other things are measured",
      "slightly overweight"
    ],
    "answer": "feeling rather than reason or behavior",
    "explanation": "شرح: كلمة 'instinctive' تعني (غريزي أو فطري يعتمد على الشعور بدلاً من العقل)، ومرادفها 'feeling rather than reason or behavior'. مثال: Birds have an instinctive fear of cats. (الطيور لديها خوف غريزي من القطط).",
    "unit": "UNIT 9 - Beauty Is Only Skin Deep"
  },
  {
    "question": "What is the definition of \"plump\"?",
    "options": [
      "slightly overweight",
      "something against which other things are measured",
      "change in form; be different from",
      "the relationship of one part of something"
    ],
    "answer": "slightly overweight",
    "explanation": "شرح: كلمة 'plump' تعني (ممتلئ الجسم قليلاً أو بدين نوعاً ما)، ومرادفها 'slightly overweight'. مثال: The baby has cute, plump cheeks. (يمتلك الطفل خدوداً ممتلئة ولطيفة).",
    "unit": "UNIT 9 - Beauty Is Only Skin Deep"
  },
  {
    "question": "What is the definition of \"proportion\"?",
    "options": [
      "change in form; be different from",
      "appear",
      "something against which other things are measured",
      "the relationship of one part of something"
    ],
    "answer": "the relationship of one part of something",
    "explanation": "شرح: كلمة 'proportion' تعني (نسبة أو تناسب جزء إلى آخر). مثال: The proportion of boys to girls in the class is 2 to 1. (نسبة الأولاد إلى البنات في الصف هي 2 إلى 1).",
    "unit": "UNIT 9 - Beauty Is Only Skin Deep"
  },
  {
    "question": "What is the definition of \"standards\"?",
    "options": [
      "something against which other things are measured",
      "appear",
      "serious food shortage",
      "change in form; be different from"
    ],
    "answer": "something against which other things are measured",
    "explanation": "شرح: كلمة 'standards' تعني (معايير أو مقاييس نُقيّم على أساسها). مثال: The company has high safety standards. (الشركة لديها معايير سلامة عالية).",
    "unit": "UNIT 9 - Beauty Is Only Skin Deep"
  },
  {
    "question": "What is the definition of \"vary\"?",
    "options": [
      "appear",
      "idea of perfection",
      "change in form; be different from",
      "serious food shortage"
    ],
    "answer": "change in form; be different from",
    "explanation": "شرح: كلمة 'vary' تعني (يختلف أو يتنوع أو يتغير). مثال: Prices vary depending on the season. (الأسعار تختلف حسب الموسم).",
    "unit": "UNIT 9 - Beauty Is Only Skin Deep"
  },
  {
    "question": "Use have or get: I will ____ my hair ____ tomorrow.",
    "options": [
      "had / cut",
      "have / cut",
      "having / cut"
    ],
    "answer": "have / cut",
    "explanation": "شرح: قاعدة السببية (Causative) تُستخدم عندما يقوم شخص آخر بالفعل نيابة عنك. الصيغة هنا في المستقبل البسيط: will + have + object + V3. مثال: I will have my car fixed.",
    "unit": "UNIT 9 - Beauty Is Only Skin Deep"
  },
  {
    "question": "Use have or get: I'm ____ my hair ____ tomorrow.",
    "options": [
      "have / cut",
      "had / cut",
      "having / cut"
    ],
    "answer": "having / cut",
    "explanation": "شرح: قاعدة السببية (Causative) في زمن المضارع المستمر للتعبير عن خطة مستقبلية: am/is/are + having + object + V3. مثال: I am having my house painted.",
    "unit": "UNIT 9 - Beauty Is Only Skin Deep"
  },
  {
    "question": "Use have or get: I'm going to ____ my hair ____ next week.",
    "options": [
      "have / cut",
      "had / cut",
      "having / cut"
    ],
    "answer": "have / cut",
    "explanation": "شرح: قاعدة السببية (Causative) باستخدام صيغة (going to) للتخطيط المستقبلي: am/is/are going to + have + object + V3. مثال: He is going to have his watch repaired.",
    "unit": "UNIT 9 - Beauty Is Only Skin Deep"
  },
  {
    "question": "Use have or get: I ____ my hair ____ yesterday.",
    "options": [
      "having / cut",
      "have / cut",
      "had / cut"
    ],
    "answer": "had / cut",
    "explanation": "شرح: قاعدة السببية (Causative) في زمن الماضي البسيط لأن الحدث وقع بالأمس: had + object + V3. مثال: She had her dress washed yesterday.",
    "unit": "UNIT 9 - Beauty Is Only Skin Deep"
  },
  {
    "question": "Shorten: Companies that sell beauty products understand...",
    "options": [
      "Companies selling beauty products understand...",
      "Companies sold beauty products understand..."
    ],
    "answer": "Companies selling beauty products understand...",
    "explanation": "شرح: لاختصار عبارة الوصل المبنية للمعلوم (Active Relative Clause)، نحذف ضمير الوصل (that/who/which) ونحول الفعل إلى صيغة اسم الفاعل (Verb+ing). مثال: The man standing there is my uncle.",
    "unit": "UNIT 9 - Beauty Is Only Skin Deep"
  },
  {
    "question": "Shorten: People who arrive early will be given priority seating.",
    "options": [
      "People arriving early will be given priority seating.",
      "People arrived early will be given..."
    ],
    "answer": "People arriving early will be given priority seating.",
    "explanation": "شرح: يتم تقصير عبارة الوصل المبنية للمعلوم عن طريق حذف ضمير الوصل (who) وتحويل الفعل إلى صيغة (ing)، مثل (arrive -> arriving). مثال: Students studying hard will pass.",
    "unit": "UNIT 9 - Beauty Is Only Skin Deep"
  },
  {
    "question": "Shorten: The cosmetics industry, which was built around making people...",
    "options": [
      "The cosmetics industry, building around...",
      "The cosmetics industry, built around making people..."
    ],
    "answer": "The cosmetics industry, built around making people...",
    "explanation": "شرح: لاختصار عبارة الوصل المبنية للمجهول (Passive Relative Clause)، نحذف ضمير الوصل (which) وفعل الكينونة (was) ونكتفي بالتصريف الثالث (built). مثال: The book written by him is great.",
    "unit": "UNIT 9 - Beauty Is Only Skin Deep"
  },
  {
    "question": "Shorten: The jewelry which was stolen last week has been found.",
    "options": [
      "The jewelry stolen last week has been found.",
      "The jewelry stealing last week..."
    ],
    "answer": "The jewelry stolen last week has been found.",
    "explanation": "شرح: تقصير عبارة الوصل للمجهول يكون بحذف ضمير الوصل (which) وفعل الكينونة (was) والإبقاء على التصريف الثالث (stolen). مثال: The car stolen yesterday was found.",
    "unit": "UNIT 9 - Beauty Is Only Skin Deep"
  },
  {
    "question": "What is the definition of \"brilliant\"?",
    "options": [
      "pointing out bad points about",
      "move around",
      "exceptional",
      "say complimentary things"
    ],
    "answer": "exceptional",
    "explanation": "شرح: كلمة 'brilliant' تعني (رائع جداً، متألق أو استثنائي)، ومرادفها 'exceptional'. مثال: She gave a brilliant performance. (قدمت أداءً استثنائياً رائعاً).",
    "unit": "UNIT 10 - They Said, We Said"
  },
  {
    "question": "What is the definition of \"circulate\"?",
    "options": [
      "making fun of",
      "move around",
      "say complimentary things",
      "pointing out bad points about"
    ],
    "answer": "move around",
    "explanation": "شرح: كلمة 'circulate' تعني (يتنقل، يدور، أو ينتشر)، ومرادفها 'move around'. مثال: Blood circulates through the body. (الدم يدور في جميع أنحاء الجسم).",
    "unit": "UNIT 10 - They Said, We Said"
  },
  {
    "question": "What is the definition of \"Criticism\"?",
    "options": [
      "pointing out bad points about",
      "information that comes from gossip",
      "say complimentary things",
      "making fun of"
    ],
    "answer": "pointing out bad points about",
    "explanation": "شرح: كلمة 'Criticism' تعني (النقد أو الإشارة إلى النقاط السلبية)، ومعناها 'pointing out bad points about'. مثال: He cannot accept constructive criticism. (إنه لا يستطيع تقبل النقد البناء).",
    "unit": "UNIT 10 - They Said, We Said"
  },
  {
    "question": "What is the definition of \"praise\"?",
    "options": [
      "gossip that follows an embarrassing event",
      "making fun of",
      "say complimentary things",
      "information that comes from gossip"
    ],
    "answer": "say complimentary things",
    "explanation": "شرح: كلمة 'praise' تعني (المديح أو الثناء على شخص/شيء)، ومعناها 'say complimentary things'. مثال: The teacher praised the student for his hard work. (أشاد المعلم بالطالب لعمله الجاد).",
    "unit": "UNIT 10 - They Said, We Said"
  },
  {
    "question": "What is the definition of \"Ridicule\"?",
    "options": [
      "making fun of",
      "morally good characteristics",
      "information that comes from gossip",
      "gossip that follows an embarrassing event"
    ],
    "answer": "making fun of",
    "explanation": "شرح: كلمة 'Ridicule' تعني (السخرية أو الاستهزاء من شخص/شيء)، ومعناها 'making fun of'. مثال: It's wrong to ridicule someone for their mistakes. (من الخطأ السخرية من شخص بسبب أخطائه).",
    "unit": "UNIT 10 - They Said, We Said"
  },
  {
    "question": "What is the definition of \"Rumor\"?",
    "options": [
      "information that comes from gossip",
      "morally good characteristics",
      "gossip that follows an embarrassing event",
      "exceptional"
    ],
    "answer": "information that comes from gossip",
    "explanation": "شرح: كلمة 'Rumor' تعني (إشاعة)، وهي معلومات تنتشر كثرثرة وقد لا تكون صحيحة. مثال: There is a rumor that the company is closing. (هناك إشاعة بأن الشركة ستغلق).",
    "unit": "UNIT 10 - They Said, We Said"
  },
  {
    "question": "What is the definition of \"scandal\"?",
    "options": [
      "morally good characteristics",
      "exceptional",
      "move around",
      "gossip that follows an embarrassing event"
    ],
    "answer": "gossip that follows an embarrassing event",
    "explanation": "شرح: كلمة 'scandal' تعني (فضيحة)، وهي أحداث محرجة أو غير أخلاقية تسبب صدمة أو غضباً للناس وتنتشر كثرثرة. مثال: The politician was involved in a financial scandal. (كان السياسي متورطاً في فضيحة مالية).",
    "unit": "UNIT 10 - They Said, We Said"
  },
  {
    "question": "What is the definition of \"Virtues\"?",
    "options": [
      "exceptional",
      "move around",
      "morally good characteristics",
      "pointing out bad points about"
    ],
    "answer": "morally good characteristics",
    "explanation": "شرح: كلمة 'Virtues' تعني (فضائل)، وهي الصفات الأخلاقية الحميدة أو الخصائص الجيدة. مثال: Honesty and courage are great virtues. (الصدق والشجاعة من الفضائل العظيمة).",
    "unit": "UNIT 10 - They Said, We Said"
  },
  {
    "question": "Change to indirect: My mother said, \"Gossiping is a bad habit.\"",
    "options": [
      "My mother said that gossiping was a bad habit.",
      "My mother said if gossiping was a bad habit."
    ],
    "answer": "My mother said that gossiping was a bad habit.",
    "explanation": "شرح: عند تحويل الكلام المباشر إلى غير مباشر، نضع (that) بعد فعل القول ونحول زمن المضارع (is) إلى ماضي (was). مثال: My mother said that gossiping was a bad habit.",
    "unit": "UNIT 10 - They Said, We Said"
  },
  {
    "question": "Change to indirect: He said, \"Mark cheated on the test.\"",
    "options": [
      "He said that Mark had cheated on the test.",
      "He said that Mark cheated on the test."
    ],
    "answer": "He said that Mark had cheated on the test.",
    "explanation": "شرح: عند نقل الكلام من الماضي البسيط (cheated)، نقوم بتحويله إلى الماضي التام (had + V3) مع إضافة (that). مثال: He said that Mark had cheated on the test.",
    "unit": "UNIT 10 - They Said, We Said"
  },
  {
    "question": "Change to indirect: They said, \"He likes gossip.\"",
    "options": [
      "They said that he liked gossip.",
      "They said that he likes gossip."
    ],
    "answer": "They said that he liked gossip.",
    "explanation": "شرح: عند تحويل الكلام المباشر للمضارع البسيط (likes) إلى كلام غير مباشر مع فعل قول ماضٍ (said)، نحول الفعل إلى الماضي البسيط (liked). مثال: They said that he liked gossip.",
    "unit": "UNIT 10 - They Said, We Said"
  },
  {
    "question": "Change to indirect: They said, \"He is gossiping.\"",
    "options": [
      "They said that he was gossiping.",
      "They said that he had been gossiping."
    ],
    "answer": "They said that he was gossiping.",
    "explanation": "شرح: عند تحويل الكلام المباشر إلى غير مباشر، إذا كان فعل القول في الماضي (said)، فإننا نغير زمن الجملة من المضارع المستمر إلى الماضي المستمر.\nمثال: 'I am eating,' he said ➔ He said that he was eating.",
    "unit": "UNIT 10 - They Said, We Said"
  },
  {
    "question": "Change to indirect: Jane asked, \"Is the rumor true?\"",
    "options": [
      "Jane asked if the rumor was true.",
      "Jane asked that the rumor was true."
    ],
    "answer": "Jane asked if the rumor was true.",
    "explanation": "شرح: عند تحويل سؤال (نعم/لا) إلى كلام غير مباشر، نستخدم 'if' أو 'whether'، ونغير ترتيب الجملة إلى الفاعل ثم الفعل، ونحول الزمن إلى الماضي.\nمثال: 'Are you okay?' she asked ➔ She asked if I was okay.",
    "unit": "UNIT 10 - They Said, We Said"
  },
  {
    "question": "Change to indirect: He asked, \"Are they spreading rumors?\"",
    "options": [
      "He asked if they were spreading rumors.",
      "He asked that they were spreading rumors."
    ],
    "answer": "He asked if they were spreading rumors.",
    "explanation": "شرح: عند تحويل الأسئلة التي تبدأ بفعل مساعد إلى كلام غير مباشر، نربط الجملة بـ 'if'، ثم نضع الفاعل قبل الفعل مع تغيير الزمن للماضي.\nمثال: 'Are they coming?' he asked ➔ He asked if they were coming.",
    "unit": "UNIT 10 - They Said, We Said"
  },
  {
    "question": "Change to indirect: Mrs. Jackson said, \"I have taught at this school for 15 years.\"",
    "options": [
      "Mrs. Jackson said she taught at this school...",
      "Mrs. Jackson said she had taught at that school for 15 years."
    ],
    "answer": "Mrs. Jackson said she had taught at that school for 15 years.",
    "explanation": "شرح: في الكلام غير المباشر، يتغير المضارع التام (have/has + V3) إلى الماضي التام (had + V3). كما تتغير أسماء الإشارة مثل 'this' إلى 'that'.\nمثال: 'I have finished this task,' he said ➔ He said that he had finished that task.",
    "unit": "UNIT 10 - They Said, We Said"
  },
  {
    "question": "Change to indirect: He said, \"My cell phone isn't working.\"",
    "options": [
      "He said that his cell phone wasn't working.",
      "He said that his cell phone hadn't been working."
    ],
    "answer": "He said that his cell phone wasn't working.",
    "explanation": "شرح: في الكلام المنقول، يتغير المضارع المستمر (isn't working) إلى ماضي مستمر (wasn't working)، وتتغير الضمائر وصفات الملكية لتناسب المتحدث (my ➔ his). مثال: He said that his cell phone wasn't working.",
    "unit": "UNIT 10 - They Said, We Said"
  },
  {
    "question": "Change to indirect: The teacher asked John, \"Why are you late?\"",
    "options": [
      "The teacher asked John why he was late.",
      "The teacher asked John why was he late."
    ],
    "answer": "The teacher asked John why he was late.",
    "explanation": "شرح: عند نقل الأسئلة التي تبدأ بأداة استفهام (Wh-)، نستخدم نفس الأداة للربط، ثم نضع الفاعل قبل الفعل (ترتيب جملة خبرية) مع تغيير الزمن.\nمثال: 'Where do you live?' he asked ➔ He asked where I lived.",
    "unit": "UNIT 10 - They Said, We Said"
  },
  {
    "question": "What is the synonym of \"acquire\"?",
    "options": [
      "presently",
      "continuous",
      "dead",
      "learn"
    ],
    "answer": "learn",
    "explanation": "شرح: المرادفات (Synonyms) هي كلمات لها نفس المعنى أو معنى مقارب. الفعل 'acquire' يعني 'يكتسب' أو 'يتعلم'، ومرادفه هنا 'learn'.\nمثال: He acquired a new skill ➔ He learned a new skill.",
    "unit": "UNIT 11 - Express Yourself"
  },
  {
    "question": "What is the synonym of \"consecutive\"?",
    "options": [
      "gigantic",
      "dead",
      "continuous",
      "presently"
    ],
    "answer": "continuous",
    "explanation": "شرح: الكلمة 'consecutive' تعني 'متتالي' أو 'متتابع'، وهي مرادفة لكلمة 'continuous' (مستمر).\nمثال: It rained for three consecutive days ➔ It rained for three continuous days.",
    "unit": "UNIT 11 - Express Yourself"
  },
  {
    "question": "What is the synonym of \"currently\"?",
    "options": [
      "dead",
      "presently",
      "regularly",
      "gigantic"
    ],
    "answer": "presently",
    "explanation": "شرح: الظرف 'currently' يعني 'حالياً' أو 'في الوقت الحاضر'، ومرادفه هو 'presently'.\nمثال: He is currently working ➔ He is presently working.",
    "unit": "UNIT 11 - Express Yourself"
  },
  {
    "question": "What is the synonym of \"extinct\"?",
    "options": [
      "regularly",
      "gigantic",
      "single",
      "dead"
    ],
    "answer": "dead",
    "explanation": "شرح: الصفة 'extinct' تعني 'منقرض' أو 'ميت'، ويُستخدم كمرادف لها في سياقات معينة كلمة 'dead'.\nمثال: Dinosaurs are extinct ➔ Dinosaurs are dead.",
    "unit": "UNIT 11 - Express Yourself"
  },
  {
    "question": "What is the synonym of \"immense\"?",
    "options": [
      "single",
      "learn",
      "gigantic",
      "regularly"
    ],
    "answer": "gigantic",
    "explanation": "شرح: الصفة 'immense' تعني 'هائل' أو 'ضخم جداً'، ومرادفها 'gigantic'.\nمثال: An immense building ➔ A gigantic building.",
    "unit": "UNIT 11 - Express Yourself"
  },
  {
    "question": "What is the synonym of \"routinely\"?",
    "options": [
      "learn",
      "single",
      "regularly",
      "continuous"
    ],
    "answer": "regularly",
    "explanation": "شرح: الظرف 'routinely' يعني 'بشكل روتيني' أو 'بشكل معتاد'، ومرادفه 'regularly' (بانتظام).\nمثال: She routinely checks her emails ➔ She regularly checks her emails.",
    "unit": "UNIT 11 - Express Yourself"
  },
  {
    "question": "What is the synonym of \"solitary\"?",
    "options": [
      "single",
      "learn",
      "continuous",
      "presently"
    ],
    "answer": "single",
    "explanation": "شرح: الصفة 'solitary' تعني 'منعزل' أو 'وحيد'، ويمكن أن تأتي بمعنى 'مفرد' مثل 'single'.\nمثال: A solitary life ➔ A single (alone) life.",
    "unit": "UNIT 11 - Express Yourself"
  },
  {
    "question": "They said that they (might / might have) join us later.",
    "options": [
      "might have",
      "might"
    ],
    "answer": "might",
    "explanation": "شرح: الفعل الناقص 'might' يتبعه دائماً الفعل في المصدر (infinitive) بدون 'to'، لذلك نختار 'might' لأن الفعل 'join' في المصدر.\nمثال: They might come tomorrow. (قد يأتون غداً).",
    "unit": "UNIT 11 - Express Yourself"
  },
  {
    "question": "She says that she (likes / liked) her classes.",
    "options": [
      "liked",
      "likes"
    ],
    "answer": "likes",
    "explanation": "شرح: إذا كان فعل القول في المضارع (مثل says أو asks)، فإننا لا نغير زمن الفعل في الجملة المنقولة، بل يبقى كما هو (likes).\nمثال: He says he is happy. (يقول إنه سعيد).",
    "unit": "UNIT 11 - Express Yourself"
  },
  {
    "question": "The weatherman said that there (will / would) be a storm tonight.",
    "options": [
      "would",
      "will"
    ],
    "answer": "would",
    "explanation": "شرح: عند نقل الكلام، يتغير الفعل الناقص 'will' إلى الماضي 'would' إذا كان فعل القول في الماضي (said).\nمثال: 'I will go,' he said ➔ He said that he would go.",
    "unit": "UNIT 11 - Express Yourself"
  },
  {
    "question": "He said that criticism (is / was) hurtful.",
    "options": [
      "is",
      "was",
      "both"
    ],
    "answer": "both",
    "explanation": "شرح: عندما تعبر الجملة المنقولة عن حقيقة عامة أو حالة لا تزال صحيحة، يمكن إبقاء الفعل في المضارع (is) أو تغييره إلى الماضي (was)، كلاهما صحيح.\nمثال: He said the sky is/was blue. (قال إن السماء زرقاء).",
    "unit": "UNIT 11 - Express Yourself"
  },
  {
    "question": "My aunt said that I (should / should have) call her this week.",
    "options": [
      "should have",
      "should"
    ],
    "answer": "should",
    "explanation": "شرح: الفعل الناقص 'should' لا يتغير في الكلام المنقول، ويتبعه الفعل في المصدر (call)، بينما 'should have' يتبعها التصريف الثالث.\nمثال: She said I should study hard. (قالت إنه يجب أن أدرس بجد).",
    "unit": "UNIT 11 - Express Yourself"
  },
  {
    "question": "The teacher said that a full moon (appears / appeared) once a month.",
    "options": [
      "both",
      "appeared",
      "appears"
    ],
    "answer": "both",
    "explanation": "شرح: عند التحدث عن حقيقة علمية أو ظاهرة متكررة، يجوز ترك الفعل في المضارع البسيط (appears) أو تحويله إلى الماضي (appeared).\nمثال: He said that water boils/boiled at 100°C.",
    "unit": "UNIT 11 - Express Yourself"
  },
  {
    "question": "He said that he (has been / had been) to both London and Paris.",
    "options": [
      "had been",
      "has been"
    ],
    "answer": "had been",
    "explanation": "شرح: في الكلام المباشر الجملة تكون بالمضارع التام (have/has been). عند تحويلها لكلام غير مباشر وفعل القول ماضٍ، تتحول إلى الماضي التام (had been).\nمثال: 'I have seen it,' she said ➔ She said she had seen it.",
    "unit": "UNIT 11 - Express Yourself"
  },
  {
    "question": "He asked his friends not (call / to call) him at work.",
    "options": [
      "to call",
      "call"
    ],
    "answer": "to call",
    "explanation": "شرح: عند نقل الأوامر أو الطلبات، نستخدم (to + المصدر) للإثبات، و (not to + المصدر) للنهي أو النفي.\nمثال: 'Don\\'t shout,' she asked ➔ She asked us not to shout.",
    "unit": "UNIT 11 - Express Yourself"
  },
  {
    "question": "He said that he (will / would) try to come to the meeting.",
    "options": [
      "will",
      "would"
    ],
    "answer": "would",
    "explanation": "شرح: تتغير 'will' إلى 'would' في الكلام المنقول عندما يكون فعل القول في زمن الماضي (said).\nمثال: 'I will help,' he said ➔ He said he would help.",
    "unit": "UNIT 11 - Express Yourself"
  },
  {
    "question": "Her friend warned that she (will / would) get in trouble.",
    "options": [
      "will",
      "would"
    ],
    "answer": "would",
    "explanation": "شرح: مثل الجملة السابقة، الفعل المساعد 'will' يتحول إلى 'would' في الكلام غير المباشر لأن فعل القول (warned) في الماضي.\nمثال: They warned it would rain. (حذروا من أنها ستمطر).",
    "unit": "UNIT 11 - Express Yourself"
  },
  {
    "question": "What is the definition of \"confidential\"?",
    "options": [
      "tell something that was secret",
      "done or communicated in secret",
      "showing lack of respect",
      "leaving out"
    ],
    "answer": "done or communicated in secret",
    "explanation": "شرح: الكلمة 'confidential' تعني 'سري' أو 'مكتوم'، أي ما يتم إيصاله أو فعله في الخفاء وبشكل خاص.\nمثال: This document is strictly confidential. (هذه الوثيقة سرية للغاية).",
    "unit": "UNIT 11 - Express Yourself"
  },
  {
    "question": "What is the definition of \"derogatory\"?",
    "options": [
      "tell something that was secret",
      "showing lack of respect",
      "not vulnerable to being affected by something",
      "leaving out"
    ],
    "answer": "showing lack of respect",
    "explanation": "شرح: الصفة 'derogatory' تعني 'ازدرائي' أو 'مهين'، وهي تدل على إظهار عدم الاحترام أو التقليل من شأن شخص أو شيء.\nمثال: He made derogatory remarks about her. (أدلى بتعليقات مهينة عنها).",
    "unit": "UNIT 11 - Express Yourself"
  },
  {
    "question": "What is the definition of \"divulge\"?",
    "options": [
      "deliberately harmful",
      "leaving out",
      "tell something that was secret",
      "not vulnerable to being affected by something"
    ],
    "answer": "tell something that was secret",
    "explanation": "شرح: الفعل 'divulge' يعني 'يُفشي' أو 'يكشف'، ويُستخدم عادة عند كشف سر أو معلومات سرية.\nمثال: The police refused to divulge the suspect's identity. (رفضت الشرطة الكشف عن هوية المشتبه به).",
    "unit": "UNIT 11 - Express Yourself"
  },
  {
    "question": "What is the definition of \"excluding\"?",
    "options": [
      "leaving out",
      "not vulnerable to being affected by something",
      "better than others",
      "deliberately harmful"
    ],
    "answer": "leaving out",
    "explanation": "شرح: الكلمة 'excluding' تعني 'باستثناء' أو 'مستبعداً'، أي ترك شيء أو شخص خارج المجموعة أو الحساب.\nمثال: The price is $50, excluding tax. (السعر 50 دولاراً، باستثناء الضريبة).",
    "unit": "UNIT 11 - Express Yourself"
  },
  {
    "question": "What is the definition of \"immune\"?",
    "options": [
      "better than others",
      "deliberately harmful",
      "not vulnerable to being affected by something",
      "done or communicated in secret"
    ],
    "answer": "not vulnerable to being affected by something",
    "explanation": "شرح: الصفة 'immune' تعني 'محصن' أو 'غير متأثر'، سواء من مرض معين أو من تأثيرات خارجية.\nمثال: Adults are often immune to this virus. (غالباً ما يكون البالغون محصنين ضد هذا الفيروس).",
    "unit": "UNIT 11 - Express Yourself"
  },
  {
    "question": "What is the definition of \"malicious\"?",
    "options": [
      "better than others",
      "deliberately harmful",
      "showing lack of respect",
      "done or communicated in secret"
    ],
    "answer": "deliberately harmful",
    "explanation": "شرح: الصفة 'malicious' تعني 'خبيث' أو 'كيدي'، وتصف الأفعال التي تهدف إلى إيذاء الآخرين عن قصد.\nمثال: They faced malicious gossips. (واجهوا شائعات خبيثة).",
    "unit": "UNIT 11 - Express Yourself"
  },
  {
    "question": "What is the definition of \"superior\"?",
    "options": [
      "done or communicated in secret",
      "showing lack of respect",
      "tell something that was secret",
      "better than others"
    ],
    "answer": "better than others",
    "explanation": "شرح: الصفة 'superior' تعني 'متفوق' أو 'أفضل'، وتُستخدم للمقارنة وإظهار الأفضلية على الآخرين.\nمثال: This phone is superior to the old model. (هذا الهاتف يتفوق على الطراز القديم).",
    "unit": "UNIT 11 - Express Yourself"
  },
  {
    "question": "We should do whatever we can to ______ our historic monuments.",
    "options": [
      "surrender",
      "notorious",
      "preserve",
      "treasure"
    ],
    "answer": "preserve",
    "explanation": "شرح: الكلمة الصحيحة هي 'preserve' وتعني 'يحافظ على'. نستخدمها للحديث عن حماية الأشياء التاريخية أو الهامة. مثال: We must preserve our traditions. (يجب أن نحافظ على تقاليدنا.)",
    "unit": "UNIT 12 - Lost and Found"
  },
  {
    "question": "The burglars tried to steal the woman's jewelry, but she wouldn't ______ without a fight.",
    "options": [
      "surrender",
      "notorious",
      "preserve",
      "theory"
    ],
    "answer": "surrender",
    "explanation": "شرح: الكلمة الصحيحة هي 'surrender' وتعني 'يستسلم'. تستخدم للتعبير عن التوقف عن المقاومة. مثال: The thieves had to surrender to the police. (اضطر اللصوص للاستسلام للشرطة.)",
    "unit": "UNIT 12 - Lost and Found"
  },
  {
    "question": "My ______ is that people search for gold not because they want to get rich, but because it is exciting.",
    "options": [
      "theory",
      "surrender",
      "treasure",
      "notorious"
    ],
    "answer": "theory",
    "explanation": "شرح: الكلمة الصحيحة هي 'theory' وتعني 'نظرية' أو 'اعتقاد مبني على تفكير'. مثال: My theory is that he is just tired. (نظريتي هي أنه مجرد متعب.)",
    "unit": "UNIT 12 - Lost and Found"
  },
  {
    "question": "The police were finally able to catch the ______ bank robbers.",
    "options": [
      "treasure",
      "preserve",
      "theory",
      "notorious"
    ],
    "answer": "notorious",
    "explanation": "شرح: الكلمة الصحيحة هي 'notorious' وتعني 'سيء السمعة' أو 'معروف بشيء سيء'. مثال: He is a notorious criminal. (إنه مجرم سيء السمعة.)",
    "unit": "UNIT 12 - Lost and Found"
  },
  {
    "question": "The explorers found a ______ worth millions of dollars that had been buried for hundreds of years.",
    "options": [
      "theory",
      "surrender",
      "treasure",
      "notorious"
    ],
    "answer": "treasure",
    "explanation": "شرح: الكلمة الصحيحة هي 'treasure' وتعني 'كنز'. تشير إلى شيء ثمين جداً. مثال: The pirates hid their treasure on the island. (أخفى القراصنة كنزهم في الجزيرة.)",
    "unit": "UNIT 12 - Lost and Found"
  },
  {
    "question": "Can the pronoun be omitted? The bird that they saw in the museum is extinct.",
    "options": [
      "Cannot be omitted",
      "Can be omitted"
    ],
    "answer": "Can be omitted",
    "explanation": "شرح: يمكن حذف ضمير الوصل (that/which/who) إذا كان يحل محل 'المفعول به' (object) في الجملة، أي إذا جاء بعده فاعل جديد. هنا 'that' جاء بعدها 'they'. مثال: The book (that) I read was good. (الكتاب الذي قرأته كان جيداً.)",
    "unit": "UNIT 12 - Lost and Found"
  },
  {
    "question": "Can the pronoun be omitted? Melissa cooks dishes that are incredibly delicious.",
    "options": [
      "Cannot be omitted",
      "Can be omitted"
    ],
    "answer": "Cannot be omitted",
    "explanation": "شرح: لا يمكن حذف ضمير الوصل (that/which/who) إذا كان يحل محل 'الفاعل' (subject)، أي إذا جاء بعده فعل مباشرة. هنا 'that' جاء بعدها الفعل 'are'. مثال: I know the man who lives here. (أعرف الرجل الذي يعيش هنا.)",
    "unit": "UNIT 12 - Lost and Found"
  },
  {
    "question": "Can the pronoun be omitted? That's not the book that the teacher asked us to get.",
    "options": [
      "Can be omitted",
      "Cannot be omitted"
    ],
    "answer": "Can be omitted",
    "explanation": "شرح: يمكن حذف ضمير الوصل إذا جاء بعده فاعل جديد (أي يعود على المفعول به). هنا 'that' جاء بعدها الفاعل 'the teacher'. مثال: The car (that) he bought is fast. (السيارة التي اشتراها سريعة.)",
    "unit": "UNIT 12 - Lost and Found"
  },
  {
    "question": "Can the pronoun be omitted? Where is the food that I brought home from the restaurant last night?",
    "options": [
      "Cannot be omitted",
      "Can be omitted"
    ],
    "answer": "Can be omitted",
    "explanation": "شرح: يمكن حذف ضمير الوصل إذا كان يعود على المفعول به وجاء بعده فاعل (مثل 'I'). في هذه الجملة، 'that' جاء بعدها 'I'. مثال: The movie (that) we watched was great. (الفيلم الذي شاهدناه كان رائعاً.)",
    "unit": "UNIT 12 - Lost and Found"
  },
  {
    "question": "Can the pronoun be omitted? The goalkeeper that plays for that team is from my hometown.",
    "options": [
      "Can be omitted",
      "Cannot be omitted"
    ],
    "answer": "Cannot be omitted",
    "explanation": "شرح: لا يمكن حذف ضمير الوصل إذا كان هو فاعل جملة الوصل وجاء بعده فعل. هنا 'that' جاء بعدها الفعل 'plays'. مثال: The girl who sits next to me is smart. (الفتاة التي تجلس بجواري ذكية.)",
    "unit": "UNIT 12 - Lost and Found"
  },
  {
    "question": "Can the pronoun be omitted? The people who live next door are always very friendly.",
    "options": [
      "Can be omitted",
      "Cannot be omitted"
    ],
    "answer": "Cannot be omitted",
    "explanation": "شرح: لا يمكن حذف ضمير الوصل إذا كان فاعلاً (يأتي بعده فعل مباشرة). هنا 'who' جاء بعدها الفعل 'live'. مثال: The boy who broke the window ran away. (الولد الذي كسر النافذة هرب.)",
    "unit": "UNIT 12 - Lost and Found"
  },
  {
    "question": "Combine: I saw the man. He stole the wallet.",
    "options": [
      "I saw the man which stole the wallet.",
      "I saw the man who stole the wallet."
    ],
    "answer": "I saw the man who stole the wallet.",
    "explanation": "شرح: نستخدم ضمير الوصل 'who' للربط بين جملتين عندما نتحدث عن عاقل (إنسان). هنا 'the man' عاقل، فنستبدل 'He' بـ 'who'. مثال: The teacher who helps me is kind. (المعلم الذي يساعدني لطيف.)",
    "unit": "UNIT 12 - Lost and Found"
  },
  {
    "question": "Combine: The email didn't make sense. You sent it to me.",
    "options": [
      "The email who you sent to me didn't make sense.",
      "The email that you sent to me didn't make sense."
    ],
    "answer": "The email that you sent to me didn't make sense.",
    "explanation": "شرح: نستخدم ضمير الوصل 'that' أو 'which' للربط بين جملتين عند الحديث عن غير العاقل (أشياء). هنا 'The email' غير عاقل. مثال: The book that you gave me is interesting. (الكتاب الذي أعطيتني إياه مثير للاهتمام.)",
    "unit": "UNIT 12 - Lost and Found"
  },
  {
    "question": "Combine: We saw a film on TV last night. It was really depressing.",
    "options": [
      "We saw a film on TV last night who was really depressing.",
      "We saw a film on TV last night that was really depressing."
    ],
    "answer": "We saw a film on TV last night that was really depressing.",
    "explanation": "شرح: نستخدم 'that' أو 'which' لغير العاقل. هنا 'a film' غير عاقل، فنربط الجملتين بـ 'that'. مثال: I bought a car that is very fast. (اشتريت سيارة سريعة جداً.)",
    "unit": "UNIT 12 - Lost and Found"
  },
  {
    "question": "Combine: The man looked confused. He asked for directions.",
    "options": [
      "The man which asked for directions looked confused.",
      "The man who asked for directions looked confused."
    ],
    "answer": "The man who asked for directions looked confused.",
    "explanation": "شرح: نستخدم 'who' للفاعل العاقل (the man). نقوم بنقل جملة الوصل لتأتي مباشرة بعد الاسم الذي تصفه. مثال: The student who asked a question is smart. (الطالب الذي سأل سؤالاً ذكي.)",
    "unit": "UNIT 12 - Lost and Found"
  },
  {
    "question": "What is the definition of \"evolve\"?",
    "options": [
      "devoted to improving the lives of all people",
      "something that is different from what is expected",
      "develop and change",
      "make-believe, not real"
    ],
    "answer": "develop and change",
    "explanation": "شرح: الكلمة 'evolve' تعني 'يتطور ويتغير' (develop and change) تدريجياً بمرور الوقت. مثال: Technology continues to evolve. (التكنولوجيا تستمر في التطور.)",
    "unit": "UNIT 12 - Lost and Found"
  },
  {
    "question": "What is the definition of \"exception\"?",
    "options": [
      "something that is different from what is expected",
      "devoted to improving the lives of all people",
      "make-believe, not real",
      "lack of ability"
    ],
    "answer": "something that is different from what is expected",
    "explanation": "شرح: الكلمة 'exception' تعني 'استثناء' (something that is different from what is expected). مثال: Most dogs bark, but this one is an exception. (معظم الكلاب تنبح، لكن هذا الكلب استثناء.)",
    "unit": "UNIT 12 - Lost and Found"
  },
  {
    "question": "What is the definition of \"fictitious\"?",
    "options": [
      "make-believe, not real",
      "lack of ability",
      "devoted to improving the lives of all people",
      "not favoring one side or the other"
    ],
    "answer": "make-believe, not real",
    "explanation": "شرح: الكلمة 'fictitious' تعني 'خيالي' أو 'غير حقيقي' (make-believe, not real). مثال: The characters in this book are fictitious. (الشخصيات في هذا الكتاب خيالية.)",
    "unit": "UNIT 12 - Lost and Found"
  },
  {
    "question": "What is the definition of \"humanitarian\"?",
    "options": [
      "devoted to improving the lives of all people",
      "not favoring one side or the other",
      "honorable",
      "lack of ability"
    ],
    "answer": "devoted to improving the lives of all people",
    "explanation": "شرح: الكلمة 'humanitarian' تعني 'إنساني' أو 'مهتم بتحسين حياة البشر' (devoted to improving the lives of all people). مثال: He received an award for his humanitarian work. (حصل على جائزة لعمله الإنساني.)",
    "unit": "UNIT 12 - Lost and Found"
  },
  {
    "question": "What is the definition of \"limitations\"?",
    "options": [
      "not favoring one side or the other",
      "lack of ability",
      "shown to have exclusive legal ownership",
      "honorable"
    ],
    "answer": "lack of ability",
    "explanation": "شرح: الكلمة 'limitations' تعني 'حدود' أو 'نقص في القدرة' (lack of ability). مثال: We must know our own limitations. (يجب أن نعرف حدود قدراتنا.)",
    "unit": "UNIT 12 - Lost and Found"
  },
  {
    "question": "What is the definition of \"neutral\"?",
    "options": [
      "honorable",
      "develop and change",
      "not favoring one side or the other",
      "shown to have exclusive legal ownership"
    ],
    "answer": "not favoring one side or the other",
    "explanation": "شرح: الكلمة 'neutral' تعني 'محايد'، أي لا ينحاز لأي طرف (not favoring one side or the other). مثال: Switzerland remained neutral during the war. (بقيت سويسرا محايدة خلال الحرب.)",
    "unit": "UNIT 12 - Lost and Found"
  },
  {
    "question": "What is the definition of \"noble\"?",
    "options": [
      "shown to have exclusive legal ownership",
      "something that is different from what is expected",
      "develop and change",
      "honorable"
    ],
    "answer": "honorable",
    "explanation": "شرح: الكلمة 'noble' تعني 'نبيل' أو 'شريف' (honorable). مثال: It was a noble effort to save the animals. (لقد كان جهداً نبيلاً لإنقاذ الحيوانات.)",
    "unit": "UNIT 12 - Lost and Found"
  },
  {
    "question": "What is the definition of \"trademarked\"?",
    "options": [
      "something that is different from what is expected",
      "make-believe, not real",
      "shown to have exclusive legal ownership",
      "develop and change"
    ],
    "answer": "shown to have exclusive legal ownership",
    "explanation": "شرح: الكلمة 'trademarked' تعني 'مسجل كعلامة تجارية'، أي له ملكية قانونية حصرية (shown to have exclusive legal ownership). مثال: The company logo is trademarked. (شعار الشركة مسجل كعلامة تجارية.)",
    "unit": "UNIT 12 - Lost and Found"
  },
  {
    "question": "Combine: September 23rd is the day. People in Saudi Arabia celebrate National Day.",
    "options": [
      "...is the day where people...",
      "...is the day when people..."
    ],
    "answer": "...is the day when people...",
    "explanation": "شرح: نستخدم 'when' للحديث عن الزمان (الوقت أو اليوم أو السنة). هنا 'the day' تشير إلى الزمان. مثال: Friday is the day when we rest. (الجمعة هو اليوم الذي نرتاح فيه.)",
    "unit": "UNIT 12 - Lost and Found"
  },
  {
    "question": "Combine: 1918 was the year. World War 1 ended.",
    "options": [
      "...was the year where World War 1 ended.",
      "...was the year when World War 1 ended."
    ],
    "answer": "...was the year when World War 1 ended.",
    "explanation": "شرح: نستخدم 'when' للإشارة إلى الزمان. هنا 'the year' وقت فنربط بـ 'when'. مثال: 2000 was the year when my brother was born. (عام 2000 هو العام الذي ولد فيه أخي.)",
    "unit": "UNIT 12 - Lost and Found"
  },
  {
    "question": "Combine: There are websites. You can buy used textbooks.",
    "options": [
      "There are websites when you can buy...",
      "There are websites where you can buy..."
    ],
    "answer": "There are websites where you can buy...",
    "explanation": "شرح: نستخدم 'where' للإشارة إلى المكان. هنا 'websites' تعامل معاملة المكان الذي تشتري منه. مثال: This is the park where we play. (هذا هو المتنزه حيث نلعب.)",
    "unit": "UNIT 12 - Lost and Found"
  },
  {
    "question": "Combine: 11:07 is the time. My train arrives.",
    "options": [
      "...is the time where my train arrives.",
      "...is the time when my train arrives."
    ],
    "answer": "...is the time when my train arrives.",
    "explanation": "شرح: تستخدم الكلمة 'when' كضمير وصل (Relative Pronoun) للإشارة إلى الوقت بدلاً من تكراره، وتربط بين جملتين. مثال: I remember the day when we first met. (أتذكر اليوم الذي التقينا فيه لأول مرة.)",
    "unit": "UNIT 12 - Lost and Found"
  },
  {
    "question": "Correct: He talks as if he (be) an expert in the field.",
    "options": [
      "is",
      "were",
      "was"
    ],
    "answer": "were",
    "explanation": "شرح: بعد 'as if' و 'as though' للتعبير عن موقف افتراضي غير حقيقي في الحاضر، نستخدم الماضي البسيط. ولجميع الضمائر نستخدم 'were' بدلاً من 'was' (تسمى قاعدة Past Subjunctive). مثال: He acts as if he were the boss. (يتصرف وكأنه المدير.)",
    "unit": "UNIT 12 - Lost and Found"
  },
  {
    "question": "Correct: They act as though they (have) not cheated on the test.",
    "options": [
      "has",
      "have",
      "had"
    ],
    "answer": "had",
    "explanation": "شرح: للتعبير عن موقف غير حقيقي أو افتراضي في الماضي بعد 'as if' أو 'as though'، نستخدم زمن الماضي التام (Past Perfect). مثال: She looked as though she had seen a ghost. (بدت وكأنها قد رأت شبحاً.)",
    "unit": "UNIT 12 - Lost and Found"
  },
  {
    "question": "Correct: It's high time you (find) a job and earned a wage.",
    "options": [
      "found",
      "find",
      "finding"
    ],
    "answer": "found",
    "explanation": "شرح: التعبيرات 'It's high time' أو 'It's about time' يُتبعها زمن الماضي البسيط للتعبير عن أن أمراً ما كان يجب أن يُنجز أو يُبدأ فيه من قبل (نصيحة قوية). مثال: It's high time you found a job. (لقد حان الوقت لكي تجد وظيفة.)",
    "unit": "UNIT 12 - Lost and Found"
  },
  {
    "question": "Correct: It's about time you (think) about the future.",
    "options": [
      "think",
      "thinking",
      "thought"
    ],
    "answer": "thought",
    "explanation": "شرح: نفس القاعدة السابقة؛ نستخدم الماضي البسيط مع 'It's about time' لنشير إلى ضرورة حدوث الفعل الآن أو تمني حدوثه في وقت مضى. مثال: It's about time you thought about your future. (لقد حان الوقت لكي تفكر في مستقبلك.)",
    "unit": "UNIT 12 - Lost and Found"
  },
  {
    "question": "Combine: I have neighbors. Their son has the TV on loud.",
    "options": [
      "I have neighbors whose son has the TV on loud.",
      "I have neighbors who's son has the TV on loud."
    ],
    "answer": "I have neighbors whose son has the TV on loud.",
    "explanation": "شرح: يُستخدم ضمير الوصل 'whose' للتعبير عن الملكية وربط جملتين. يحل محل صفات الملكية مثل (his, her, their)، ويأتي بعده دائماً اسم المملوك. مثال: I have a friend whose brother is famous. (لدي صديق أخوه مشهور.)",
    "unit": "UNIT 12 - Lost and Found"
  },
  {
    "question": "Combine: Is he the author? His books are so popular.",
    "options": [
      "Is he the author who's books are so popular?",
      "Is he the author whose books are so popular?"
    ],
    "answer": "Is he the author whose books are so popular?",
    "explanation": "شرح: 'whose' تستخدم للإشارة للملكية. هنا استبدلنا صفة الملكية 'his' بضمير الوصل 'whose' مع إبقاء الاسم الذي يليه (books). مثال: Is he the author whose books are popular? (هل هو المؤلف الذي كتبه مشهورة؟)",
    "unit": "UNIT 12 - Lost and Found"
  },
  {
    "question": "Combine: The teacher is fantastic. I'm taking the teacher's course.",
    "options": [
      "The teacher whose course I'm taking is fantastic.",
      "The teacher who's course I'm taking is fantastic."
    ],
    "answer": "The teacher whose course I'm taking is fantastic.",
    "explanation": "شرح: نستخدم 'whose' لنوضح لمن ينتمي الشيء. استبدلنا المضاف إليه (the teacher's) بالضمير 'whose' متبوعاً بالاسم المملوك (course). مثال: The teacher whose course I take is great. (المعلم الذي آخذ دُرسه رائع.)",
    "unit": "UNIT 12 - Lost and Found"
  },
  {
    "question": "Combine: I have a friend. My friend's father is a doctor.",
    "options": [
      "I have a friend whose father is a doctor.",
      "I have a friend who's father is a doctor."
    ],
    "answer": "I have a friend whose father is a doctor.",
    "explanation": "شرح: تُستخدم 'whose' كأداة وصل للتعبير عن الملكية بدلاً من (my friend's). الاسم الذي يأتي بعدها يكون مملوكاً للاسم الذي قبلها. مثال: I know a man whose father is a doctor. (أعرف رجلاً والده طبيب.)",
    "unit": "UNIT 12 - Lost and Found"
  },
  {
    "question": "Combine: He is the chef. His restaurant is notorious.",
    "options": [
      "He is the chef who's restaurant is notorious.",
      "He is the chef whose restaurant is notorious."
    ],
    "answer": "He is the chef whose restaurant is notorious.",
    "explanation": "شرح: نستعمل 'whose' للدلالة على ملكية الشيف للمطعم بدلاً من استعمال 'His' أو تكرار الاسم. مثال: He is the chef whose restaurant is notorious. (إنه الشيف الذي مطعمه ذائع الصيت.)",
    "unit": "UNIT 12 - Lost and Found"
  },
  {
    "question": "Do you know the person (who's / whose) standing at the back of the class?",
    "options": [
      "who's",
      "whose"
    ],
    "answer": "who's",
    "explanation": "شرح: 'who's' هي اختصار لـ 'who is' ويأتي بعدها فعل مضاف له ing (في المضارع المستمر) أو صفة. في هذه الجملة، الفعل 'standing' يتطلب 'who is'. مثال: The man who's standing there is my uncle. (الرجل الذي يقف هناك هو عمي.)",
    "unit": "UNIT 12 - Lost and Found"
  },
  {
    "question": "He's the guy (who's / whose) notorious for borrowing money...",
    "options": [
      "whose",
      "who's"
    ],
    "answer": "who's",
    "explanation": "شرح: 'who's' هنا تعني 'who is' لأن الجملة تحتاج إلى فعل الكون 'is' قبل الصفة 'notorious' (مشهور بسوء). مثال: He is the guy who's notorious for his lies. (إنه الشاب المعروف بأكاذيبه.)",
    "unit": "UNIT 12 - Lost and Found"
  },
  {
    "question": "Al-Kwarizmi is the mathematician (who's / whose) ten-digit numbering system...",
    "options": [
      "who's",
      "whose"
    ],
    "answer": "whose",
    "explanation": "شرح: 'whose' تستخدم للملكية ولا يأتي بعدها فعل، بل اسم مملوك. في هذه الجملة الاسم هو (numbering system) وهو مملوك للعالم. مثال: The boy whose bike was stolen is sad. (الفتى الذي سُرقت دراجته حزين.)",
    "unit": "UNIT 12 - Lost and Found"
  },
  {
    "question": "They want to find a secretary (who's / whose) responsible and efficient.",
    "options": [
      "who's",
      "whose"
    ],
    "answer": "who's",
    "explanation": "شرح: نستخدم الاختصار 'who's' الذي يعني 'who is' لأن الجملة تصف السكرتيرة بصفتين (responsible and efficient) وتحتاج إلى فعل الكون. مثال: I need a friend who's reliable. (أحتاج إلى صديق يُعتمد عليه.)",
    "unit": "UNIT 12 - Lost and Found"
  },
  {
    "question": "Professor Blake is the one (who's / whose) taught us math for two years.",
    "options": [
      "who's",
      "whose"
    ],
    "answer": "who's",
    "explanation": "شرح: 'who's' هنا هي اختصار لـ 'who has' لأنها متبوعة بالتصريف الثالث للفعل 'taught' في زمن المضارع التام (Present Perfect). مثال: The teacher who's taught me for years is retiring. (المعلم الذي دَرَّسَني لسنوات سيتقاعد.)",
    "unit": "UNIT 12 - Lost and Found"
  },
  {
    "question": "We have a friend (who's / whose) brother is in Australia.",
    "options": [
      "who's",
      "whose"
    ],
    "answer": "whose",
    "explanation": "شرح: تستخدم 'whose' لأنها تربط بين المالك (a friend) والمملوك (brother). وهي تعني (الذي أخوه...). مثال: I know a girl whose brother lives in London. (أعرف فتاة يعيش أخوها في لندن.)",
    "unit": "UNIT 12 - Lost and Found"
  },
  {
    "question": "What is the definition of \"accustomed\"?",
    "options": [
      "used to",
      "scientist who studies outer space",
      "someone who determines the value of something",
      "real"
    ],
    "answer": "used to",
    "explanation": "شرح: الكلمة 'accustomed' تعني (معتاد على)، وتُستخدم في القواعد كصفة (Adjective). غالباً ما يتبعها حرف الجر 'to' ثم اسم أو فعل ينتهي بـ 'ing' (Gerund). مثال: I am accustomed to working late. (أنا معتاد على العمل لوقت متأخر.)",
    "unit": "UNIT 12 - Lost and Found"
  },
  {
    "question": "What is the definition of \"appraiser\"?",
    "options": [
      "real",
      "someone who determines the value of something",
      "find something by chance",
      "scientist who studies outer space"
    ],
    "answer": "someone who determines the value of something",
    "explanation": "شرح: كلمة 'appraiser' (مُقَيِّم) هي اسم (Noun). في قواعد اللغة، غالباً ما تُضاف اللاحقة '-er' للفعل (appraise) لتكوين اسم الفاعل أو الشخص الذي يقوم بالعمل. مثال: The appraiser estimated the house's value. (قَدَّرَ المُقَيِّم قيمة المنزل.)",
    "unit": "UNIT 12 - Lost and Found"
  },
  {
    "question": "What is the definition of \"astronomer\"?",
    "options": [
      "scientist who studies outer space",
      "real",
      "find something by chance",
      "stuck between two things"
    ],
    "answer": "scientist who studies outer space",
    "explanation": "شرح: كلمة 'astronomer' (عالم فلك) هي اسم فاعل (Noun) مشتق يدل على الشخص الذي يعمل في هذا المجال. النهاية '-er' تُستخدم كثيراً للدلالة على المهن. مثال: The astronomer discovered a new planet. (اكتشف عالم الفلك كوكباً جديداً.)",
    "unit": "UNIT 12 - Lost and Found"
  },
  {
    "question": "What is the definition of \"authentic\"?",
    "options": [
      "find something by chance",
      "stuck between two things",
      "real",
      "used to"
    ],
    "answer": "real",
    "explanation": "شرح: كلمة 'authentic' تعني (أصلي)، وتُصنف كصفة (Adjective) وتُستخدم لوصف الأسماء لتأكيد حقيقتها وعدم تزييفها. مثال: She bought an authentic leather bag. (اشترت حقيبة جلدية أصلية.)",
    "unit": "UNIT 12 - Lost and Found"
  },
  {
    "question": "What is the definition of \"stumble upon\"?",
    "options": [
      "stuck between two things",
      "used to",
      "find something by chance",
      "someone who determines the value of something"
    ],
    "answer": "find something by chance",
    "explanation": "شرح: 'stumble upon' هو فعل مركب (Phrasal Verb) يعني (يعثر على شيء بالصدفة). يتكون من فعل أساسي وحرف جر يغيران المعنى الأصلي للفعل. مثال: I stumbled upon an old photo yesterday. (عثرت صدفة على صورة قديمة البارحة.)",
    "unit": "UNIT 12 - Lost and Found"
  },
  {
    "question": "What is the definition of \"wedged\"?",
    "options": [
      "stuck between two things",
      "used to",
      "someone who determines the value of something",
      "scientist who studies outer space"
    ],
    "answer": "stuck between two things",
    "explanation": "شرح: كلمة 'wedged' (محشور) تُستخدم هنا كصفة (Adjective) مشتقة من التصريف الثالث للفعل (Past Participle)، لوصف حالة شيء عالق في مكان ضيق. مثال: The paper is wedged in the printer. (الورقة محشورة في الطابعة.)",
    "unit": "UNIT 12 - Lost and Found"
  }
];
