import { Test, TestingModule } from '@nestjs/testing';
import { RecordEntriesService } from './record-entries.service';

describe('RecordEntriesService', () => {
  let service: RecordEntriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecordEntriesService],
    }).compile();

    service = module.get<RecordEntriesService>(RecordEntriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
