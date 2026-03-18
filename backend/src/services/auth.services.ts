import prisma from "../config/prisma";
import { Role } from "../generated/prisma";
import { User } from "../types";
import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

export const registerUser = async (data: User) => {
  const existingUser = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });
  if (existingUser) {
    throw new Error("Email already registered");
  }

  const hashedPassword = await bcrypt.hash(data.password, SALT_ROUNDS);

  const user = await prisma.user.create({
    data: {
      email: data.email,
      passwordHash: hashedPassword,
      role: Role.CUSTOMER,
    },
  });

  const customer = await prisma.customer.create({
    data: {
      firstName: data.customer?.firstName ?? "",
      lastName: data.customer?.lastName ?? "",
      phone: data.customer?.phone ?? "",
      userId: user.id,
    },
  });

  return { user, customer };
};

export const loginUser = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    throw new Error("Invalid credentials");
  }

  const validPassword = await bcrypt.compare(password, user.passwordHash);

  if (!validPassword) {
    throw new Error("Invalid credentials");
  }

  return user;
};

export const createSession = async (userId: number, refreshToken: string) => {
  await prisma.userSession.create({
    data: {
      userId,
      refreshToken,
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    },
  });
};

// export const getUsers = async () => {
//   return prisma.user.findMany({
//     select: {
//       id: true,
//       email: true,
//       isVerified: true,
//       isActive: true,
//       createdAt: true,
//       customer: true,
//       admin: true,
//     },
//   });
// };

export const getUserById = async (id: number) => {
  return prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      email: true,
      isVerified: true,
      isActive: true,
      createdAt: true,

      customer: true,
      admin: true,
    },
  });
};
