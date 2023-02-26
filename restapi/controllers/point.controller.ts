import { NextFunction, Request, Response } from "express";

import {findAllPointsByUser} from '../services/point.service'

const findAll = (req: Request, res: Response, next: NextFunction) => {
    const { userId } = req.params;
    
    const result = findAllPointsByUser(userId);

    res.status(201).json({
        result: "hola"
    });
}

export { findAll }