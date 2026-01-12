import { RecordType } from "src/common/enums/record-type.enum";

export class CreateRecordEntryDto {
    patientRecordId: number;
    professionalId: number;
    appointmentId?: number;

    type: RecordType;
    title: string;
    content: unknown;
}
