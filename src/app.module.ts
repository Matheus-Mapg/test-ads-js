import { Module } from '@nestjs/common';
import { QuestionOneModule } from './question-one/question-one.module';
import { QuestionTwoModule } from './question-two/question-two.module';

@Module({
  imports: [QuestionOneModule, QuestionTwoModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
