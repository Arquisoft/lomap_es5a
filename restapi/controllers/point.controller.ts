import { NextFunction, Request, Response } from "express";

import {findAllPointsByUser, addPointByUser} from '../services/point.service'

const findAll = (req: Request, res: Response, next: NextFunction) => {
    const { userId } = req.params;
    
    const result = findAllPointsByUser(userId);

    res.status(201).json({
        result: "hola"
    });
}

const addPoint = (req: Request, res: Response, next: NextFunction) => {
    const { userId } = req.body; // recibo los datos
    
    const result = addPointByUser(userId); // llamo al servicio

    res.status(201).json({
        result: "hola"
    });
}

export { findAll, addPoint };