/*
  Warnings:

  - You are about to drop the `Property` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PropertyToUser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Rental` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Sale` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Tax` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Property" DROP CONSTRAINT "Property_UserId_fkey";

-- DropForeignKey
ALTER TABLE "PropertyToUser" DROP CONSTRAINT "PropertyToUser_userId_fkey";

-- DropTable
DROP TABLE "Property";

-- DropTable
DROP TABLE "PropertyToUser";

-- DropTable
DROP TABLE "Rental";

-- DropTable
DROP TABLE "Sale";

-- DropTable
DROP TABLE "Tax";
