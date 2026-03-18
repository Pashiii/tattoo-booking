import jwt from "jsonwebtoken";

const ACCESS_SECRET = process.env.JWT_SECRET as string;

export const generateToken = (userId: number) => {
  return jwt.sign({ userId }, ACCESS_SECRET, { expiresIn: "1d" });
};

export const generateRefreshToken = (userId: number) => {
  return jwt.sign({ userId }, ACCESS_SECRET, { expiresIn: "7d" });
};
