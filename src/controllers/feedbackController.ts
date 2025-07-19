import { Request, Response, NextFunction } from 'express';
import { prisma } from '../utils/database';
import { Feedback, CreateFeedbackRequest, PrismaFeedback } from '../types/feedback';
import { AppError } from '../middleware/errorHandler';

export const getAllFeedback = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const feedback = await prisma.feedback.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    const formattedFeedback: Feedback[] = feedback.map((item: PrismaFeedback) => ({
      id: item.id,
      name: item.name,
      message: item.message,
      createdAt: item.createdAt.toISOString(),
    }));

    res.json({
      success: true,
      data: formattedFeedback,
    });
  } catch (error) {
    next(error);
  }
};

export const createFeedback = async (
  req: Request<{}, {}, CreateFeedbackRequest>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { name, message } = req.body;

    const newFeedback = await prisma.feedback.create({
      data: {
        name: name.trim(),
        message: message.trim(),
      },
    });

    const formattedFeedback: Feedback = {
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
  } catch (error) {
    next(error);
  }
}; 