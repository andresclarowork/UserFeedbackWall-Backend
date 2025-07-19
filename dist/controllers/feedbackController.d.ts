import { Request, Response, NextFunction } from 'express';
import { CreateFeedbackRequest } from '../types/feedback';
export declare const getAllFeedback: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const createFeedback: (req: Request<{}, {}, CreateFeedbackRequest>, res: Response, next: NextFunction) => Promise<void>;
//# sourceMappingURL=feedbackController.d.ts.map