import { Injectable } from '@nestjs/common';
import { readFile, unlink, writeFile } from 'fs/promises';
import { cwd } from 'process';
import { MulterFile } from 'src/question-two/data/types/multer-file/multer-file';

@Injectable()
export class DecipherCommandsUseCase {

    private async readFileMulter(file: MulterFile) {

        const filePath = `${cwd()}/${file.originalname}`

        await writeFile(filePath, file.buffer);

        const text = await readFile(filePath, 'utf-8');

        await unlink(filePath);

        return text
    }

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

        const text = await this.readFileMulter(file)

        const commands = await this.splitCommands(text)

        return commands
    }
}
