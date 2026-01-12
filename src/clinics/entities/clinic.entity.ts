import { ClinicType } from "src/common/enums/clinic-type.enum";
import { Status } from "src/common/enums/status.enum";
import { Patient } from "src/patients/entities/patient.entity";
import { Professional } from "src/professionals/entities/professional.entity";
import { User } from "src/users/entities/user.entity";

export class Clinic {
  id: number;
  name: string;
  type: ClinicType;
  document?: string;
  status: Status;
  createdAt: Date;

  users?: User[];
  professionals?: Professional[];
  patients?: Patient[];
  appointments?: [];
  records?: [];
  recordTemplates?: [];
}