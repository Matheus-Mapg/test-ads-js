import { Module } from '@nestjs/common';
import { DecipherCommandsController } from './controllers/decipher-commands/decipher-commands.controller';
import { DecipherCommandsService } from './services/decipher-commands/decipher-commands.service';
import { DecipherCommandsUseCase } from './use-cases/decipher-commands/decipher-commands.usecase';

@Module({
  controllers: [DecipherCommandsController],
  providers: [DecipherCommandsService, DecipherCommandsUseCase]
})
export class QuestionTwoModule { }
