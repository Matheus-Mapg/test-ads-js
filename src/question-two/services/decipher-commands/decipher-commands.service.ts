import { Injectable } from '@nestjs/common';
import { GeneralOutput } from '../../../data/outputs/general.output';
import { MulterFile } from '../../../question-two/data/types/multer-file/multer-file.type';
import { DecipherCommandsUseCase } from '../../../question-two/use-cases/decipher-commands/decipher-commands.usecase';

@Injectable()
export class DecipherCommandsService extends GeneralOutput {

    constructor(private readonly usecase: DecipherCommandsUseCase) {
        super()
    }

    async decipher(file: MulterFile) {

        const commands = await this.usecase.extractCommands(file)

        const endereco = await this.usecase.executeCommands(commands)

        return this.response(endereco)

    }
}
