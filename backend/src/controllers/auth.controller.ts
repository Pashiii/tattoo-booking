import { Request, Response } from "express";
import * as userService from "../services/auth.services";
import { generateRefreshToken, generateToken } from "../utils/jwt";

export const registerUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.registerUser(req.body);

    const accessToken = generateToken(user.user.id);
    const refreshToken = generateRefreshToken(user.user.id);

    await userService.createSession(user.user.id, refreshToken);

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    });

    res.status(201).json({
      message: "Register successfully",
      user,
      accessToken,
    });
  } catch (error: any) {
    console.log(error);
    res.status(400).json({
      message: error.message,
    });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await userService.loginUser(email, password);

    const accessToken = generateToken(user.id);
    const refreshToken = generateRefreshToken(user.id);

    await userService.createSession(user.id, refreshToken);

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    });

    res.status(201).json({
      message: "Login Successfully",
      data: {
        user: {
          id: user.id,
          email: user.email,
          isVerified: user.isVerified,
          isActive: user.isActive,
          role: user.role,
        },
      },
      accessToken,
    });
  } catch (error: any) {
    res.status(400).json({
      message: error.message,
    });
  }
};
