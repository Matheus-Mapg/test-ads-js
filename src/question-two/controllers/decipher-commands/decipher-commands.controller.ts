import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { MulterFile } from '../../../question-two/data/types/multer-file/multer-file.type';
import { DecipherCommandsService } from '../../../question-two/services/decipher-commands/decipher-commands.service';

@Controller('decipher-commands')
export class DecipherCommandsController {

    constructor(private readonly service: DecipherCommandsService) { }

    @Post()
    @UseInterceptors(FileInterceptor('file'))
    async decipher(@UploadedFile() file: MulterFile) {

        return await this.service.decipher(file)

    }
}
