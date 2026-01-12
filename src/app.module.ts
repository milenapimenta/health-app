import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ClinicsModule } from './clinics/clinics.module';
import { ProfessionalModule } from './professionals/professional.module';
import { PatientsModule } from './patients/patients.module';
import { AppointmentsModule } from './appointments/appointments.module';
import { PatientRecordsModule } from './patient-records/patient-records.module';
import { RecordEntriesModule } from './record-entries/record-entries.module';
import { RecordTemplatesModule } from './record-templates/record-templates.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    ClinicsModule,
    ProfessionalModule,
    PatientsModule,
    AppointmentsModule,
    PatientRecordsModule,
    RecordEntriesModule,
    RecordTemplatesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
