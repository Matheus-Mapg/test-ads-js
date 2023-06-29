import { Injectable } from '@nestjs/common';
import { AdditionalRules } from 'src/question-one/use-cases/pass-range/additional-rules';
import { PassRangeUsecase } from 'src/question-one/use-cases/pass-range/pass-range.usecase';

@Injectable()
export class PassRangeService {

    constructor(private readonly usecase: PassRangeUsecase, private readonly usecaseAdditional: AdditionalRules) {

    }

    async stepOne() {
        const existsPass = []

        for (let pass = 184759; pass <= 856920; pass++) {

            const digits = await this.usecase.separetedDigits(pass)

            const isValid = await this.usecase.validatePassword(digits)

            isValid && (existsPass.push(pass))

        }

        return {
            error: false,
            message: 'sucess',
            data: {
                existsPass,
                length: existsPass.length
            }
        }
    }

    async stepTwo() {

        const existsPass = []

        for (let pass = 184759; pass <= 856920; pass++) {

            const digits = await this.usecaseAdditional.separetedDigits(pass)

            const isValid = await this.usecaseAdditional.validatePassword(digits)

            isValid && (existsPass.push(pass))

        }

        return {
            error: false,
            message: 'sucess',
            data: {
                existsPass,
                length: existsPass.length
            }
        }

    }

}
