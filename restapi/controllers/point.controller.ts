import { RequestHandler } from "express";

import {findAllPointsByUser} from '../services/point.service'



/**
 * Encuentra todos los puntos creados por un usuario
 * @param req 
 * @param res 
 * @param next 
 */
const findAll : RequestHandler = (req,res) => {
    const { webId } = req.params;
    const result = findAllPointsByUser(webId);
    console.log(res.json(result));
}

// const addPoint = (req: Request, res: Response, next: NextFunction) => {
//     const { userId } = req.params;
    
//     const result = addPointByUser(userId);

//     res.status(201).json({
//         result: "hola"
//     });
// }

export { findAll };