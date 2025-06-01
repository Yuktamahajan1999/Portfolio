import express from 'express';
const router = express.Router();
import { sendContactEmail } from '../controllers/contact.js';

router.post('/contact', sendContactEmail);
router.get('/contact', (req, res) => res.send("Contact route live"));

export default router;