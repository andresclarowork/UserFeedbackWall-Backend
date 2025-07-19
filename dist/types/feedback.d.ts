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
export interface PrismaFeedback {
    id: number;
    name: string;
    message: string;
    createdAt: Date;
}
//# sourceMappingURL=feedback.d.ts.map