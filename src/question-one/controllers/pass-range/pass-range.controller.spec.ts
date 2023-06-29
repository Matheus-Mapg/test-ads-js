import { Test, TestingModule } from '@nestjs/testing';
import { PassRangeController } from './pass-range.controller';

describe('PassRangeController', () => {
  let controller: PassRangeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PassRangeController],
    }).compile();

    controller = module.get<PassRangeController>(PassRangeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
