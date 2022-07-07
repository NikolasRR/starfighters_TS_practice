import { Request, Response } from "express";
import services from "../services/services.js";

export default async function battle(req: Request, res: Response) {
    const al = await services.getStargazers("nikolasRR");
    
    res.send('oi');
}

