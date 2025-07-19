import rateLimit from 'express-rate-limit';

export const feedbackRateLimiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000'), // 15 minutes
  max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '10'), // limit each IP to 10 requests per windowMs
  message: {
    success: false,
    error: 'Too many feedback submissions from this IP, please try again later.',
  },
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    res.status(429).json({
      success: false,
      error: 'Too many feedback submissions from this IP, please try again later.',
    });
  },
}); 