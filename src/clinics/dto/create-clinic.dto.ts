import { ClinicType } from "src/common/enums/clinic-type.enum";

export class CreateClinicDto {
    name: string;
    type: ClinicType;
    document?: string;
}
