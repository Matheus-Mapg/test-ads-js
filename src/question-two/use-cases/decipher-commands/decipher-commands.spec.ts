import { Test, TestingModule } from '@nestjs/testing';
import { DecipherCommandsUseCase } from './decipher-commands.usecase';

describe('DecipherCommands', () => {
  let provider: DecipherCommandsUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DecipherCommandsUseCase],
    }).compile();

    provider = module.get<DecipherCommandsUseCase>(DecipherCommandsUseCase);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
