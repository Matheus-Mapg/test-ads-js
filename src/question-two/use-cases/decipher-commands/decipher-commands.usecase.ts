import { Injectable } from '@nestjs/common';
import { readFile, unlink, writeFile } from 'fs/promises';
import { cwd } from 'process';
import { MulterFile } from '../../../question-two/data/types/multer-file/multer-file.type';

@Injectable()
export class DecipherCommandsUseCase {

    private async readFileMulter(file: MulterFile) {

        const filePath = `${cwd()}/${file.originalname}`

        await writeFile(filePath, file.buffer);

        const text = await readFile(filePath, 'utf-8');

        await unlink(filePath);

        return text
    }

    // Método para separar os comandos e garantir que sejam números
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

    private isToJump(jumps: number) {

        return jumps >= 1

    }

    private async returnValueNumber(command: string, index: number) {
        const value = command.substring(index)

        return Number(value)
    }

    async executeCommands(commands: string[]) {

        let endereco = 0
        let jumps = 0

        for (const command of commands) {

            if (this.isToJump(jumps)) {
                jumps--
                continue
            }

            else if (command.startsWith('20')) {

                endereco += await this.returnValueNumber(command, 2)
            }
            else if (command.startsWith('5')) {

                jumps = await this.returnValueNumber(command, 1) - 1
            }

        }

        return endereco
    }
}
