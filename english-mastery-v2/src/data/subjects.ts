export interface Subject {
  id: string;
  name: string;
  description: string;
  icon: string; // We can use lucide icon names as strings, e.g. "BookA" or "Atom"
  gradient: string;
}

export const subjectsData: Subject[] = [
  {
    id: 'english',
    name: 'English Mastery',
    description: 'Master grammar, vocabulary, and sentence structures.',
    icon: 'BookOpen',
    gradient: 'from-blue-500 to-indigo-600'
  },
  {
    id: 'physics',
    name: 'الفيزياء',
    description: 'تأسيس شامل وحل المسائل الفيزيائية بخطوات دقيقة وبسيطة.',
    icon: 'Atom',
    gradient: 'from-violet-500 to-fuchsia-600'
  },
  {
    id: 'earth-science',
    name: 'علم الأرض',
    description: 'تجميعات أسئلة علم الأرض مع الصور التوضيحية المرفقة.',
    icon: 'Globe',
    gradient: 'from-emerald-500 to-teal-600'
  }
];
