import { Clinic } from "src/clinics/entities/clinic.entity";
import { TemplateType } from "src/common/enums/template-type.enum";
import { Professional } from "src/professionals/entities/professional.entity";

export class RecordTemplate {
    id: number;

    clinicId: number;
    professionalId?: number;

    type: TemplateType;
    name: string;
    description?: string;
    schema: unknown;

    isActive: boolean;

    createdAt: Date;
    updatedAt: Date;

    clinic?: Clinic;
    professional?: Professional;
}
