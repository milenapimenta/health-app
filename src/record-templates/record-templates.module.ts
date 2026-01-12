import { Module } from '@nestjs/common';
import { RecordTemplatesService } from './record-templates.service';
import { RecordTemplatesController } from './record-templates.controller';

@Module({
  controllers: [RecordTemplatesController],
  providers: [RecordTemplatesService],
})
export class RecordTemplatesModule {}
