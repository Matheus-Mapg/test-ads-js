import { Injectable } from '@nestjs/common';
import { PassRangeUsecase } from './pass-range.usecase';

@Injectable()
export class AdditionalRules extends PassRangeUsecase {

    protected async isAdjacentEqual(pass: string[]): Promise<boolean> {

        let isAdjacents = false

        for (let index = 0; index < pass.length; index++) {
            const digitActual = pass[index];
            const digitNext = pass[index + 1];

            const containDigits = digitActual && digitNext

            const groupsTwoAdjacents = pass.filter(e => e == digitActual).length <= 2 || pass.filter(e => e == digitActual).length % 2 == 0

            const adjacents = digitActual == digitNext

            if (containDigits && adjacents) {
                isAdjacents = true
            }
            else if (!groupsTwoAdjacents) {
                return false
            }
        }

        return isAdjacents
    }
}
