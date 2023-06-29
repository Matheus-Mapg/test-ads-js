import { Test, TestingModule } from '@nestjs/testing';
import { DecipherCommands } from './decipher-commands';

describe('DecipherCommands', () => {
  let provider: DecipherCommands;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DecipherCommands],
    }).compile();

    provider = module.get<DecipherCommands>(DecipherCommands);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
