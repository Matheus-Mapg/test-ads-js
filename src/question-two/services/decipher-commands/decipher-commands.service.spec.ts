import { Test, TestingModule } from '@nestjs/testing';
import { DecipherCommandsService } from './decipher-commands.service';

describe('DecipherCommandsService', () => {
  let service: DecipherCommandsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DecipherCommandsService],
    }).compile();

    service = module.get<DecipherCommandsService>(DecipherCommandsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
