/*
  Warnings:

  - You are about to drop the `JobPosting` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."JobPosting";

-- CreateTable
CREATE TABLE "Jobs" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "requirements" TEXT,
    "responsibilities" TEXT,
    "jobType" "JobType" NOT NULL,
    "minimumSalary" INTEGER,
    "maximumSalary" INTEGER,
    "applicationDeadline" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Jobs_pkey" PRIMARY KEY ("id")
);
