import type { NextFunction, Response } from "express";
import jwt from "jsonwebtoken";

/**
 * Checks that the user is authorized by having a JWT token.
 * @requires 'jsonwebtoken' npm package.
 */
export function verifyToken(req: any, res: Response, next: NextFunction) {
	const token = req.header("x-auth-token");
	if (!token) return res.status(401).send("Access denied. No token provided.");

	try {
		// Throws an exception if token is not valid.
		const decoded = jwt.verify(token, process.env.JWT_SECRET || "secret");
		req.user = decoded;
		next();
	} catch (e) {
		console.error(e);
		res.status(400).send("Invalid token.");
	}
}
