import { Module } from '@nestjs/common';
import { RecordEntriesService } from './record-entries.service';
import { RecordEntriesController } from './record-entries.controller';

@Module({
  controllers: [RecordEntriesController],
  providers: [RecordEntriesService],
})
export class RecordEntriesModule {}
