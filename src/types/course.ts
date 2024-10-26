export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: number;
  cpdPoints: number;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  completionRate?: number;
  instructor: {
    name: string;
    title: string;
    bio: string;
    avatar: string;
  };
  syllabus: {
    id: string;
    title: string;
    duration: number;
    description: string;
  }[];
  learningOutcomes: string[];
  prerequisites: string[];
  enrollmentCount: number;
  rating: number;
}

export interface CourseProgress {
  courseId: string;
  progress: number;
  completed: boolean;
  quizScores: {
    pre?: number;
    post?: number;
  };
}