import { Injectable } from '@nestjs/common';
import { GeneralOutput } from '../../../data/outputs/general.output';
import { IPassRangeType } from '../../../question-one/data/types/pass-range/ipass-range.type';
import { AdditionalRules } from '../../../question-one/use-cases/pass-range/additional-rules';
import { PassRangeUsecase } from '../../../question-one/use-cases/pass-range/pass-range.usecase';

@Injectable()
export class PassRangeService extends GeneralOutput {

    constructor(private readonly usecase: PassRangeUsecase, private readonly usecaseAdditional: AdditionalRules) {
        super()
    }

    async stepOne() {
        const existsPass = await this.executeRange(this.usecase)

        return await this.response({ existsPass, length: existsPass.length })
    }

    async stepTwo() {

        const existsPass = await this.executeRange(this.usecaseAdditional)

        return await this.response({ existsPass, length: existsPass.length })

    }

    async executeRange(usecase: IPassRangeType) {

        const existsPass = []

        for (let pass = 184759; pass <= 856920; pass++) {

            const digits = await usecase.separetedDigits(pass)

            const isValid = await usecase.validatePassword(digits)

            isValid && (existsPass.push(pass))

        }

        return existsPass

    }

}
