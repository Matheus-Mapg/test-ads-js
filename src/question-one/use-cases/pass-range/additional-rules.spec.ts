import { Test, TestingModule } from '@nestjs/testing';
import { AdditionalRules } from './additional-rules';

describe('AdditionalRules', () => {
  let provider: AdditionalRules;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdditionalRules],
    }).compile();

    provider = module.get<AdditionalRules>(AdditionalRules);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
