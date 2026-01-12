export class CreatePatientDto {
    name: string;
    email?: string;
    phone?: string;
    document?: string;
    birthDate?: Date;
}
