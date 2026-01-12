import { AppointmentType } from "src/common/enums/appointment-type.enum";

export class CreateAppointmentDto {
    scheduledAt: Date;
    type: AppointmentType;
    notes?: string;
}
