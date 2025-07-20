import { Request, Response, NextFunction } from 'express';
import { prisma } from '../utils/database';
import { Feedback, CreateFeedbackRequest, PrismaFeedback, FeedbackListResponse, CreateFeedbackResponse } from '../types/shared';

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

    const response: FeedbackListResponse = {
      success: true,
      data: formattedFeedback,
    };
    res.json(response);
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

    const response: CreateFeedbackResponse = {
      success: true,
      data: formattedFeedback,
      message: 'Feedback submitted successfully',
    };
    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
}; 