/*
  Warnings:

  - Added the required column `refreshToken` to the `admin_sessions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `refreshToken` to the `user_sessions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "admin_sessions" ADD COLUMN     "refreshToken" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "user_sessions" ADD COLUMN     "refreshToken" TEXT NOT NULL;
