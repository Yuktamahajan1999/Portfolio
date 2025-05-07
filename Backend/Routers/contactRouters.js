import express from 'express';
const router = express.Router();
import {sendContactEmail} from '../controllers/contact.js';

router.post('/', sendContactEmail);

export default router;
