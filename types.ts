export type LessonStatus = 'Pending' | 'Done' | 'Cancelled';

export interface Lesson {
  memberName: string[]; // array of individual names
  proName: string;
  startTime: string;
  duration: string;
  court: string;
  status: LessonStatus;
}

export interface LessonFormData {
  memberName: string; // typed as a comma-separated string in the form
  proName: string;
  startTime: string;
  duration: string;
  court: string;
}
