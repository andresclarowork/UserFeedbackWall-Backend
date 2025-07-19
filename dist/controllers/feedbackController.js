"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFeedback = exports.getAllFeedback = void 0;
const database_1 = require("../utils/database");
const getAllFeedback = async (req, res, next) => {
    try {
        const feedback = await database_1.prisma.feedback.findMany({
            orderBy: {
                createdAt: 'desc',
            },
        });
        const formattedFeedback = feedback.map((item) => ({
            id: item.id,
            name: item.name,
            message: item.message,
            createdAt: item.createdAt.toISOString(),
        }));
        res.json({
            success: true,
            data: formattedFeedback,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.getAllFeedback = getAllFeedback;
const createFeedback = async (req, res, next) => {
    try {
        const { name, message } = req.body;
        const newFeedback = await database_1.prisma.feedback.create({
            data: {
                name: name.trim(),
                message: message.trim(),
            },
        });
        const formattedFeedback = {
            id: newFeedback.id,
            name: newFeedback.name,
            message: newFeedback.message,
            createdAt: newFeedback.createdAt.toISOString(),
        };
        res.status(201).json({
            success: true,
            data: formattedFeedback,
            message: 'Feedback submitted successfully',
        });
    }
    catch (error) {
        next(error);
    }
};
exports.createFeedback = createFeedback;
//# sourceMappingURL=feedbackController.js.map