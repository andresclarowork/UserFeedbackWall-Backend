import { Router } from 'express';
import { getAllFeedback, createFeedback } from '../controllers/feedbackController';
import { validateFeedback } from '../middleware/validation';
import { feedbackRateLimiter } from '../middleware/rateLimiter';

const router = Router();

// GET /api/feedback - Get all feedback
router.get('/', getAllFeedback);

// POST /api/feedback - Create new feedback
router.post('/', feedbackRateLimiter, validateFeedback, createFeedback);

export { router as feedbackRoutes }; 