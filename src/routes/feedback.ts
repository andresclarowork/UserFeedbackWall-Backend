import { Router } from 'express';
import { getAllFeedback, createFeedback } from '../controllers/feedbackController';
import { validateFeedback } from '../middleware/validation';
import { feedbackRateLimiter } from '../middleware/rateLimiter';

const router = Router();

router.get('/', getAllFeedback);

router.post('/', feedbackRateLimiter, validateFeedback, createFeedback);

export { router as feedbackRoutes }; 