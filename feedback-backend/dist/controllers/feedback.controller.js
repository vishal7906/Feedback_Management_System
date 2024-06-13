"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllFeedback = exports.createFeedback = void 0;
let feedbacks = [];
let nextId = 1;
const createFeedback = (req, res) => {
    const { name, feedback } = req.body;
    const newFeedback = { id: nextId++, name, feedback };
    feedbacks.push(newFeedback);
    res.status(201).json(newFeedback);
};
exports.createFeedback = createFeedback;
const getAllFeedback = (req, res) => {
    res.status(200).json(feedbacks);
};
exports.getAllFeedback = getAllFeedback;
