import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecordTemplatesService } from './record-templates.service';
import { CreateRecordTemplateDto } from './dto/create-record-template.dto';
import { UpdateRecordTemplateDto } from './dto/update-record-template.dto';

@Controller('record-templates')
export class RecordTemplatesController {
  constructor(private readonly recordTemplatesService: RecordTemplatesService) {}

  @Post()
  create(@Body() createRecordTemplateDto: CreateRecordTemplateDto) {
    return this.recordTemplatesService.create(createRecordTemplateDto);
  }

  @Get()
  findAll() {
    return this.recordTemplatesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recordTemplatesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecordTemplateDto: UpdateRecordTemplateDto) {
    return this.recordTemplatesService.update(+id, updateRecordTemplateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recordTemplatesService.remove(+id);
  }
}
