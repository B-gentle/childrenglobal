import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { env } from "../commons/env";

interface AuthRequest extends Request {
  user?: any; // You can replace 'any' with a specific user type if you have one
}

const protect = (req: AuthRequest, res: Response, next: NextFunction) => {
  let token;

  if (
    req.headers.authorization
  ) {
    try {
      // Extract token from header
      token = req.headers.authorization;

      // Verify token
      const decoded = jwt.verify(token, env.JWT_SECRET as string);

      // Attach user information to the request object
      req.user = decoded;

      next();
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: "Not authorized, token failed" });
    }
  }

  if (!token) {
    res.status(401).json({ message: "Not authorized, no token" });
  }
};

export { protect };