"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateFeedback = void 0;
const joi_1 = __importDefault(require("joi"));
const validateFeedback = (req, res, next) => {
    const schema = joi_1.default.object({
        name: joi_1.default.string()
            .trim()
            .min(1)
            .max(100)
            .required()
            .messages({
            'string.empty': 'Name is required',
            'string.min': 'Name must be at least 1 character long',
            'string.max': 'Name must be less than 100 characters',
            'any.required': 'Name is required',
        }),
        message: joi_1.default.string()
            .trim()
            .min(1)
            .max(1000)
            .required()
            .messages({
            'string.empty': 'Message is required',
            'string.min': 'Message must be at least 1 character long',
            'string.max': 'Message must be less than 1000 characters',
            'any.required': 'Message is required',
        }),
    });
    const { error } = schema.validate(req.body);
    if (error) {
        const errorMessage = error.details.map(detail => detail.message).join(', ');
        const validationError = new Error(errorMessage);
        validationError.statusCode = 400;
        return next(validationError);
    }
    next();
};
exports.validateFeedback = validateFeedback;
//# sourceMappingURL=validation.js.map