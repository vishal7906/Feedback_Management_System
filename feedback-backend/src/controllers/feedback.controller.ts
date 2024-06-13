import { Request, Response } from 'express';
import { IFeedback } from '../models/feedback.model';

let feedbacks: IFeedback[] = [];
let nextId = 1;

export const createFeedback = (req: Request, res: Response): void => {
    const { name, feedback } = req.body;
    const newFeedback: IFeedback = { id: nextId++, name, feedback };
    feedbacks.push(newFeedback);
    res.status(201).json(newFeedback);
};

export const getAllFeedback = (req: Request, res: Response): void => {
    res.status(200).json(feedbacks);
};

