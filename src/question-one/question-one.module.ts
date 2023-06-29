import { Module } from '@nestjs/common';
import { PassRangeController } from './controllers/pass-range/pass-range.controller';
import { PassRangeService } from './services/pass-range/pass-range.service';
import { PassRangeUsecase } from './use-cases/pass-range/pass-range.usecase';
import { AdditionalRules } from './use-cases/pass-range/additional-rules';

@Module({
  providers: [PassRangeService, PassRangeUsecase, AdditionalRules],
  controllers: [PassRangeController]
})
export class QuestionOneModule { }
