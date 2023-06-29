import { Test, TestingModule } from '@nestjs/testing';
import { DecipherCommandsController } from './decipher-commands.controller';

describe('DecipherCommandsController', () => {
  let controller: DecipherCommandsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DecipherCommandsController],
    }).compile();

    controller = module.get<DecipherCommandsController>(DecipherCommandsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
