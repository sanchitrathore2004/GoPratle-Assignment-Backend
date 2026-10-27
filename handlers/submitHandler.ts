import type {Request, Response} from 'express';
import {Db} from 'mongodb';

export async function submitHandler(req: Request, res: Response, dbClient: Db) {
    try {
        const body = req.body;
        if(!["Event Planner", "Performer", "Crew"].includes(body.category)) {
            res.status(400).json({ message: "Invalid category." });
            return;
        }

        const result = await dbClient.collection('events').insertOne({
            ...body,
            createdAt: new Date(),
            updatedAt: new Date(),
        }); 

        res.status(201).json({ message: "Submission received successfully.", id: result.insertedId, category: body.category });
    
    } catch (error) {
        console.error("Error submitting form:", error);
        res.status(500).json({ message: "Error submitting form." });
    }
}