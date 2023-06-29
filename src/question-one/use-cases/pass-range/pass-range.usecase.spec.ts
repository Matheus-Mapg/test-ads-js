import { Test, TestingModule } from '@nestjs/testing';
import { PassRangeUsecase } from './pass-range.usecase';

describe('PassRangeUsecase', () => {
  let provider: PassRangeUsecase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PassRangeUsecase],
    }).compile();

    provider = module.get<PassRangeUsecase>(PassRangeUsecase);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
