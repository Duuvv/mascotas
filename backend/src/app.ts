import express from 'express';
import authRouter from './routes/auth';


const app = express();

// Middlewares
app.use(express.json());

// Rutas
app.use('/auth', authRouter);
// app.use('/otros', otrosRouter);

export default app;
