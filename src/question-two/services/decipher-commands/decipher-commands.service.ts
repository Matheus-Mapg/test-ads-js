import { Injectable } from '@nestjs/common';
import { MulterFile } from 'src/question-two/data/types/multer-file/multer-file';
import { DecipherCommandsUseCase } from 'src/question-two/use-cases/decipher-commands/decipher-commands.usecase';

@Injectable()
export class DecipherCommandsService {

    constructor(private readonly usecase: DecipherCommandsUseCase) { }

    async decipher(file: MulterFile) {

        const commands = await this.usecase.extractCommands(file)

        let endereco = 0
        let jumps = 0

        for (const command of commands) {

            if (jumps >= 1) {
                jumps--

                continue
            }

            else if (command.startsWith('20')) {
                const value = command.substring(2)

                endereco += Number(value)
            }
            else if (command.startsWith('5')) {
                const value = command.substring(1)

                jumps = Number(value) - 1
            }

        }

        return {
            error: false,
            message: 'sucess',
            data: endereco
        }

    }
}
