import { Module } from '@nestjs/common';
import { DecipherCommandsController } from './controllers/decipher-commands/decipher-commands.controller';
import { DecipherCommandsService } from './services/decipher-commands/decipher-commands.service';
import { DecipherCommands } from './use-cases/decipher-commands/decipher-commands';

@Module({
  controllers: [DecipherCommandsController],
  providers: [DecipherCommandsService, DecipherCommands]
})
export class QuestionTwoModule { }
