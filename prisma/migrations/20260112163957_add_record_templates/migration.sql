-- CreateEnum
CREATE TYPE "TemplateType" AS ENUM ('PRESCRIPTION', 'DIET', 'TRAINING');

-- CreateTable
CREATE TABLE "RecordTemplate" (
    "id" SERIAL NOT NULL,
    "clinicId" INTEGER NOT NULL,
    "professionalId" INTEGER,
    "type" "TemplateType" NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "schema" JSONB NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RecordTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "RecordTemplate_clinicId_idx" ON "RecordTemplate"("clinicId");

-- CreateIndex
CREATE INDEX "RecordTemplate_professionalId_idx" ON "RecordTemplate"("professionalId");

-- CreateIndex
CREATE INDEX "RecordTemplate_type_idx" ON "RecordTemplate"("type");

-- AddForeignKey
ALTER TABLE "RecordTemplate" ADD CONSTRAINT "RecordTemplate_clinicId_fkey" FOREIGN KEY ("clinicId") REFERENCES "Clinic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecordTemplate" ADD CONSTRAINT "RecordTemplate_professionalId_fkey" FOREIGN KEY ("professionalId") REFERENCES "Professional"("id") ON DELETE SET NULL ON UPDATE CASCADE;
