"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.feedbackRoutes = void 0;
const express_1 = require("express");
const feedbackController_1 = require("../controllers/feedbackController");
const validation_1 = require("../middleware/validation");
const rateLimiter_1 = require("../middleware/rateLimiter");
const router = (0, express_1.Router)();
exports.feedbackRoutes = router;
router.get('/', feedbackController_1.getAllFeedback);
router.post('/', rateLimiter_1.feedbackRateLimiter, validation_1.validateFeedback, feedbackController_1.createFeedback);
//# sourceMappingURL=feedback.js.map