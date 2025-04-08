import jwt from "jsonwebtoken";
import { env } from "../commons/env";

export const generateToken = (id: string) => {
  return jwt.sign({ id }, env.JWT_SECRET as string, {
    expiresIn: "30d", // Token expires in 30 days
  });
};
