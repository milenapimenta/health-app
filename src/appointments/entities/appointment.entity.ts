import { Clinic } from "src/clinics/entities/clinic.entity";
import { AppointmentStatus } from "src/common/enums/appointment-status.enum";
import { AppointmentType } from "src/common/enums/appointment-type.enum";
import { Patient } from "src/patients/entities/patient.entity";
import { Professional } from "src/professionals/entities/professional.entity";

export class Appointment {
  id: number;
  clinicId: number;
  professionalId: number;
  patientId: number;

  scheduledAt: Date;
  type: AppointmentType;
  status: AppointmentStatus;
  notes?: string;
  createdAt: Date;

  clinic?: Clinic;
  professional?: Professional;
  patient?: Patient;
  records?: [];
}
