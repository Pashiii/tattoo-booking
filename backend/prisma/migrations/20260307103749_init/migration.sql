/*
  Warnings:

  - You are about to drop the column `updateAt` on the `artists` table. All the data in the column will be lost.
  - You are about to drop the column `customerId` on the `user_sessions` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `artists` table without a default value. This is not possible if the table is not empty.
  - Made the column `branchId` on table `artists` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "artists" DROP CONSTRAINT "artists_branchId_fkey";

-- DropForeignKey
ALTER TABLE "user_sessions" DROP CONSTRAINT "user_sessions_customerId_fkey";

-- AlterTable
ALTER TABLE "artists" DROP COLUMN "updateAt",
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "branchId" SET NOT NULL;

-- AlterTable
ALTER TABLE "user_sessions" DROP COLUMN "customerId";

-- AddForeignKey
ALTER TABLE "artists" ADD CONSTRAINT "artists_branchId_fkey" FOREIGN KEY ("branchId") REFERENCES "branches"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
