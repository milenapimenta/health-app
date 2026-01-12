import { Appointment } from "src/appointments/entities/appointment.entity";
import { RecordType } from "src/common/enums/record-type.enum";
import { PatientRecord } from "src/patient-records/entities/patient-record.entity";
import { Professional } from "src/professionals/entities/professional.entity";

export class RecordEntry {
    id: number;

    patientRecordId: number;
    professionalId: number;
    appointmentId?: number;

    type: RecordType;
    title: string;
    content: unknown;

    createdAt: Date;

    record?: PatientRecord;
    professional?: Professional;
    appointment?: Appointment;
}
