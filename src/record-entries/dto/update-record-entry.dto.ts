import { PartialType } from '@nestjs/mapped-types';
import { CreateRecordEntryDto } from './create-record-entry.dto';

export class UpdateRecordEntryDto extends PartialType(CreateRecordEntryDto) {}
