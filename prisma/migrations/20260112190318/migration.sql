/*
  Warnings:

  - A unique constraint covering the columns `[document]` on the table `Clinic` will be added. If there are existing duplicate values, this will fail.
  - Made the column `document` on table `Clinic` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Clinic" ALTER COLUMN "document" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Clinic_document_key" ON "Clinic"("document");
