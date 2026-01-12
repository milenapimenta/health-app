import { Clinic } from "src/clinics/entities/clinic.entity";
import { RegistrationType } from "src/common/enums/registration-type.enum";
import { Status } from "src/common/enums/status.enum";

export class Professional {
    id: number;
    clinicId: Number;
    name: string;
    specialty: string;
    registrationType: RegistrationType;
    registrationNumber: string;
    status: Status;
    createdAt: Date;

    clinic?: Clinic;
    appointments?: [];
    records?: [];
    recordTemplates?: [];
}
