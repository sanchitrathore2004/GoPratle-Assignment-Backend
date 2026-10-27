import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import type {Request, Response} from 'express';
dotenv.config();

const app = express();

app.use(cors({origin: 'http://localhost:3000'}));
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, World!');
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});