import { Injectable } from '@nestjs/common';
import { MulterFile } from 'src/question-two/data/types/multer-file/multer-file';
import { DecipherCommandsUseCase } from 'src/question-two/use-cases/decipher-commands/decipher-commands.usecase';

@Injectable()
export class DecipherCommandsService {

    constructor(private readonly usecase: DecipherCommandsUseCase) { }

    async decipher(file: MulterFile) {

        const commands = await this.usecase.extractCommands(file)

        const endereco = await this.usecase.executeCommands(commands)

        return {
            error: false,
            message: 'sucess',
            data: endereco
        }

    }
}
