import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './Routers/contactRouters.js';
import { sendContactEmail } from './controllers/contact.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.post('/api/contact', sendContactEmail);

const PORT = process.env.PORT || 8000;
app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});