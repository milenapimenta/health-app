import { Module } from '@nestjs/common';
import { PatientRecordsService } from './patient-records.service';
import { PatientRecordsController } from './patient-records.controller';

@Module({
  controllers: [PatientRecordsController],
  providers: [PatientRecordsService],
})
export class PatientRecordsModule {}
