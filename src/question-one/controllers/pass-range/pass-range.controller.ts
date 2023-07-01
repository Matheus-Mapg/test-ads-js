import { Controller, Get } from '@nestjs/common';
import { PassRangeService } from '../../../question-one/services/pass-range/pass-range.service';

@Controller('pass-range')
export class PassRangeController {

    constructor(private readonly service: PassRangeService) {

    }

    @Get('step/1')
    async stepOne() {
        return await this.service.stepOne()
    }

    @Get('step/2')
    async stepTwo() {
        return await this.service.stepTwo()
    }

}
