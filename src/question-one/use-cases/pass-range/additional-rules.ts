import { Injectable } from '@nestjs/common';
import { PassRangeUsecase } from './pass-range.usecase';

@Injectable()
export class AdditionalRules extends PassRangeUsecase {

    protected async isAdjacentEqual(pass: string[]): Promise<boolean> {

        let isAdjacents = false
        let cancel = false

        for (let index = 0; index < pass.length; index++) {
            const digitActual = pass[index];
            const digitNext = pass[index + 1];

            const containDigits = digitActual && digitNext

            const adjacents = containDigits && digitActual == digitNext

            const countNumbers = pass.filter(e => e == digitActual).length

            const groupsTwoAdjacents = countNumbers <= 2 || countNumbers % 2 == 0

            if (adjacents) {
                isAdjacents = true
            }
            else if (!groupsTwoAdjacents) {
                const countNextNumbers = pass.filter(e => e == pass[index + countNumbers]).length

                const nextNumber = pass.filter(e => e == pass[index + 1]).length

                const nextGroupsTwoAdjacents = countNextNumbers % 2 == 0 && pass[index + countNumbers] || nextNumber % 2 == 0 && pass[index + countNumbers]

                if (nextGroupsTwoAdjacents) {
                    cancel = true
                }
                else if (!cancel)
                    return false
            }
        }

        return isAdjacents
    }
}
