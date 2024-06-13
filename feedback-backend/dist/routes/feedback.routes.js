"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const feedback_controller_1 = require("../controllers/feedback.controller");
const router = (0, express_1.Router)();
router.post('/feedback', feedback_controller_1.createFeedback);
router.get('/feedback', feedback_controller_1.getAllFeedback);
exports.default = router;
