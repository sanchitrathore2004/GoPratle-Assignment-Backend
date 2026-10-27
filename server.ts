import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import type { Request, Response } from 'express';
import { healthHandler } from "./handlers/healthHandler.js";
import { connectDB } from "./database/connect.js";
import { submitHandler } from './handlers/submitHandler.js';

dotenv.config();

const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

async function startServer() {
    const dbClient = await connectDB();

    app.get('/health', (req: Request, res: Response) => {
        healthHandler(req, res);
    });

    app.post('/api/submit/v1', (req: Request, res: Response) => {
        submitHandler(req, res, dbClient);
    });

    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
}

startServer();