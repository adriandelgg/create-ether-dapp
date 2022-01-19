import type { NextFunction, Response } from "express";

/** Checks that the caller is an admin. */
export function admin(req: any, res: Response, next: NextFunction) {
	if (!req.user.isAdmin) return res.sendStatus(403);
	next();
}
