export interface Certificate {
  id: string;
  courseId: string;
  userId: string;
  courseName: string;
  userName: string;
  cpdPoints: number;
  issueDate: string;
  completionDate: string;
  verificationCode: string;
  instructor: {
    name: string;
    title: string;
    signature: string;
  };
}

export interface CertificateTemplate {
  type: 'standard' | 'detailed';
  orientation: 'landscape' | 'portrait';
  theme: 'classic' | 'modern';
}