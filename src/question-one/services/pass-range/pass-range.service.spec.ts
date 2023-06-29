import { Test, TestingModule } from '@nestjs/testing';
import { PassRangeService } from './pass-range.service';

describe('PassRangeService', () => {
  let service: PassRangeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PassRangeService],
    }).compile();

    service = module.get<PassRangeService>(PassRangeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
