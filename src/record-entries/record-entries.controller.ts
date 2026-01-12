import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecordEntriesService } from './record-entries.service';
import { CreateRecordEntryDto } from './dto/create-record-entry.dto';
import { UpdateRecordEntryDto } from './dto/update-record-entry.dto';

@Controller('record-entries')
export class RecordEntriesController {
  constructor(private readonly recordEntriesService: RecordEntriesService) {}

  @Post()
  create(@Body() createRecordEntryDto: CreateRecordEntryDto) {
    return this.recordEntriesService.create(createRecordEntryDto);
  }

  @Get()
  findAll() {
    return this.recordEntriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recordEntriesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecordEntryDto: UpdateRecordEntryDto) {
    return this.recordEntriesService.update(+id, updateRecordEntryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recordEntriesService.remove(+id);
  }
}
