export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Quiz {
  id: string;
  courseId: string;
  type: 'pre' | 'post';
  title: string;
  description: string;
  timeLimit: number;
  questions: QuizQuestion[];
  passingScore: number;
}

export interface QuizAttempt {
  quizId: string;
  answers: number[];
  score: number;
  timeTaken: number;
  completed: boolean;
  startedAt: string;
  completedAt?: string;
}