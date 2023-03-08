import { Response } from "express";


export function sendError(error: Error, res: Response) {
	console.log(error)
	return res.status(500).json({
		message: error.message,
		error: error
	})
}