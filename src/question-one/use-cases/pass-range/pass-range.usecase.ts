import { Injectable } from '@nestjs/common';
import { IPassRangeType } from '../../../question-one/data/types/pass-range/ipass-range.type';

@Injectable()
export class PassRangeUsecase extends IPassRangeType {

    async separetedDigits(pass: number) {
        return pass.toString().split('')
    }

    protected async isAdjacentEqual(pass: string[]) {

        for (let index = 0; index < pass.length; index++) {
            const digitActual = pass[index];
            const digitNext = pass[index + 1];

            const containDigits = digitActual && digitNext

            if (containDigits && digitActual == digitNext) {

                return true
            }
        }

        return false
    }

    protected async isContinuous(pass: string[]) {

        for (let index = 0; index < pass.length; index++) {
            const digitActual = pass[index];
            const digitNext = pass[index + 1];

            const containDigits = digitActual && digitNext

            if (containDigits && Number(digitActual) > Number(digitNext)) {

                return false
            }
        }

        return true

    }

    async validatePassword(pass: string[]) {
        const isAdjacentEqual = await this.isAdjacentEqual(pass)

        const isContinuous = await this.isContinuous(pass)

        return isAdjacentEqual && isContinuous
    }
}
