import { Clinic } from "src/clinics/entities/clinic.entity";
import { Patient } from "src/patients/entities/patient.entity";

export class PatientRecord {
    id: number;
    
    clinicId: number;
    patientId: number;

    createdAt: Date;

    clinic?: Clinic;
    patient?: Patient;
    entries?: [];
}
