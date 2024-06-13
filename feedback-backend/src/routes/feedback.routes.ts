import { Router } from 'express';
import { createFeedback, getAllFeedback } from '../controllers/feedback.controller';

const router: Router = Router();

router.post('/feedback', createFeedback);
router.get('/feedback', getAllFeedback);

export default router;
