import { Injectable } from '@nestjs/common';
import { readFile } from 'fs/promises';
import { MulterFile } from 'src/question-two/data/types/multer-file/multer-file';

@Injectable()
export class DecipherCommandsUseCase {
    private async splitCommands(text: string) {
        const returnLines = text.split('\n')

        const commands: string[] = []

        for (const iterator of returnLines) {

            const command = iterator.replace(/[^0-9]/g, '')

            if (command) {
                commands.push(command)
            }
        }

        return commands
    }
    async extractCommands(file: MulterFile) {

        const text = await readFile(file.buffer, { encoding: 'utf-8' })

        const commands = await this.splitCommands(text)

        return commands
    }
}
