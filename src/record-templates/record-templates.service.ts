import { Injectable } from '@nestjs/common';
import { CreateRecordTemplateDto } from './dto/create-record-template.dto';
import { UpdateRecordTemplateDto } from './dto/update-record-template.dto';

@Injectable()
export class RecordTemplatesService {
  create(createRecordTemplateDto: CreateRecordTemplateDto) {
    return 'This action adds a new recordTemplate';
  }

  findAll() {
    return `This action returns all recordTemplates`;
  }

  findOne(id: number) {
    return `This action returns a #${id} recordTemplate`;
  }

  update(id: number, updateRecordTemplateDto: UpdateRecordTemplateDto) {
    return `This action updates a #${id} recordTemplate`;
  }

  remove(id: number) {
    return `This action removes a #${id} recordTemplate`;
  }
}
