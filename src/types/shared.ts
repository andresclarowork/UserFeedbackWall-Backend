export interface Feedback {
  id: number;
  name: string;
  message: string;
  createdAt: string;
}

export interface CreateFeedbackRequest {
  name: string;
  message: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface FeedbackListResponse extends ApiResponse<Feedback[]> {}
export interface CreateFeedbackResponse extends ApiResponse<Feedback> {}

export interface FeedbackFormData {
  name: string;
  message: string;
}

export type Theme = 'light' | 'dark';

export interface ApiError {
  message: string;
  status: number;
  code?: string;
}

export interface PrismaFeedback {
  id: number;
  name: string;
  message: string;
  createdAt: Date;
} 