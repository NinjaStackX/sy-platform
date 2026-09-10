export type Step = 1 | 2 | 3 | "pending" | "success";

export type LessonType = "video" | "live" | "pdf";

export interface QuizOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface QuizQuestion {
  id: string;
  questionText: string;
  type: "multiple-choice" | "text";
  options: QuizOption[];
  isRequired: boolean;
}

export interface Lesson {
  id: string;
  title: string;
  type: LessonType;
  fileUrl?: string;
  liveUrl?: string;
  startDate?: string;
  duration?: string;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
  quizzes: QuizQuestion[];
}

export interface CourseData {
  title: string;
  description: string;
  coverImage: File | null;
  category: string;
  modules: Module[];
  certificateFile: File | null;
}
