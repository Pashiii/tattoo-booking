import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import prisma from "../config/prisma";
import { Role } from "../generated/prisma";

interface TokenPayload {
  userId: number;
  role: Role;
}

export interface AuthRequest extends Request {
  user?: {
    userId: number;
    role: Role;
  };
}

// protected routes
export const protect = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  let token: string | undefined;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authenticated, no token provided");
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "b8d297b5fa6b0e2dafd810045c86962a",
    ) as TokenPayload;

    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: {
        passwordHash: true,
      },
    });

    if (!user) {
      res.status(401);
      throw new Error("User no longer exist");
    }

    req.user = {
      userId: decoded.userId,
      role: decoded.role,
    };

    next();
  } catch (error) {
    res.status(401);
    throw new Error("Not authorized, token invalid or expired");
  }
};

// authorize roles
export const authorizeRoles = (...roles: Role[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      res.status(401);
      throw new Error("Not authenticated");
    }

    if (!roles.includes(req.user.role)) {
      res.status(403);
      throw new Error(
        `Role (${req.user.role}) is not authorized to access this resources`,
      );
    }
    next();
  };
};
