import { Request, Response, NextFunction } from "express";
import { prisma } from "../prisma"

export async function ensureAdmin(request: Request, response: Response, next: NextFunction) {
    const { userId } = request;

    const { admin } = await prisma.users.findUnique({
        where: {
            id: userId,
        },
    });

    if (admin) {
        return next();
    }

    return response.status(401).json({
        error: "Unauthorized",
    });
}