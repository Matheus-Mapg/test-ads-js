import { Module } from '@nestjs/common';
import { QuestionOneModule } from './question-one/question-one.module';

@Module({
  imports: [QuestionOneModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
