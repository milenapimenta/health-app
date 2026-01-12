import { TemplateType } from "src/common/enums/template-type.enum";

export class CreateRecordTemplateDto {
    professionalId?: number;

    type: TemplateType;
    name: string;
    description?: string;
    schema: unknown;
}
