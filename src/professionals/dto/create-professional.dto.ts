import { RegistrationType } from "src/common/enums/registration-type.enum";

export class CreateProfessionalDto {
    name: string;
    specialty: string;
    registrationType: RegistrationType;
    registrationNumber: string;
}
