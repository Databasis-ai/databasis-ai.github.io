/*
  Warnings:

  - You are about to drop the `OrganizationesToUsers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "OrganizationesToUsers" DROP CONSTRAINT "OrganizationesToUsers_organizationId_fkey";

-- DropForeignKey
ALTER TABLE "OrganizationesToUsers" DROP CONSTRAINT "OrganizationesToUsers_userId_fkey";

-- DropTable
DROP TABLE "OrganizationesToUsers";

-- CreateTable
CREATE TABLE "OrganizationsToUsers" (
    "organizationId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "OrganizationsToUsers_pkey" PRIMARY KEY ("organizationId","userId")
);

-- CreateTable
CREATE TABLE "Source" (
    "id" TEXT NOT NULL,
    "organizationId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "premisis" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "connectionString" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Source_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrganizationsToSources" (
    "organizationId" TEXT NOT NULL,
    "sourceId" TEXT NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "OrganizationsToSources_pkey" PRIMARY KEY ("organizationId","sourceId")
);

-- AddForeignKey
ALTER TABLE "OrganizationsToUsers" ADD CONSTRAINT "OrganizationsToUsers_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrganizationsToUsers" ADD CONSTRAINT "OrganizationsToUsers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Source" ADD CONSTRAINT "Source_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrganizationsToSources" ADD CONSTRAINT "OrganizationsToSources_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrganizationsToSources" ADD CONSTRAINT "OrganizationsToSources_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Source"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
