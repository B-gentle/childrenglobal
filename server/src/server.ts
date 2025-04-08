import express, { NextFunction, Request, Response } from 'express';
import path from 'path';
import cors from "cors"
import connectDB from "./config/db";
import adminRoutes from './routes/adminRoutes'
import contactRoutes from './routes/contactRoutes'
import galleryRoutes from './routes/galleryRoutes'
import { notFound, errorHandler } from './middleware/errorMiddleware';
import logger from './utils/logger';

connectDB();

const app = express();
const port = 8800;

// body parser and middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use('/uploads', express.static(path.join(__dirname, '../uploads')))

// Routes
app.use('/api/admin', adminRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/gallery', galleryRoutes);

app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Express with TypeScript!');
});

// Not Found Middleware
app.use(notFound);

// Error Handler Middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  logger.error(err.message, { stack: err.stack });
  errorHandler(err, req, res, next);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});