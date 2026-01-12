import { Clinic } from "src/clinics/entities/clinic.entity";
import { Status } from "src/common/enums/status.enum";

export class Patient {
    id: number;
    clinicId: number;

    name: string;
    email?: string;
    phone?: string;
    document?: string;
    birthDate?: Date;
    
    status: Status;
    createdAt: Date;
    
    clinic?: Clinic;
    record?: 'PatientRecord';
    appointments?: [];
};


