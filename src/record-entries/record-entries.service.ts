import { Injectable } from '@nestjs/common';
import { CreateRecordEntryDto } from './dto/create-record-entry.dto';
import { UpdateRecordEntryDto } from './dto/update-record-entry.dto';

@Injectable()
export class RecordEntriesService {
  create(createRecordEntryDto: CreateRecordEntryDto) {
    return 'This action adds a new recordEntry';
  }

  findAll() {
    return `This action returns all recordEntries`;
  }

  findOne(id: number) {
    return `This action returns a #${id} recordEntry`;
  }

  update(id: number, updateRecordEntryDto: UpdateRecordEntryDto) {
    return `This action updates a #${id} recordEntry`;
  }

  remove(id: number) {
    return `This action removes a #${id} recordEntry`;
  }
}
