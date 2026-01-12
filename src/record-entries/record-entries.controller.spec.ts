import { Test, TestingModule } from '@nestjs/testing';
import { RecordEntriesController } from './record-entries.controller';
import { RecordEntriesService } from './record-entries.service';

describe('RecordEntriesController', () => {
  let controller: RecordEntriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecordEntriesController],
      providers: [RecordEntriesService],
    }).compile();

    controller = module.get<RecordEntriesController>(RecordEntriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
