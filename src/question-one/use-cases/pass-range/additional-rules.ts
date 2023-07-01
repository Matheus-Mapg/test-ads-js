import { Injectable } from '@nestjs/common';
import { PassRangeUsecase } from './pass-range.usecase';

@Injectable()
export class AdditionalRules extends PassRangeUsecase {

    protected async isAdjacentEqual(pass: string[]): Promise<boolean> {

        let isAdjacentEqual = false
        let cancel = false

        for (let index = 0; index < pass.length; index++) {

            const isAdjacent = await this.isAdjacents(pass[index], pass[index + 1])

            const isGroupsAdjacent = await this.isGroupsAdjacent(pass[index], pass)

            if (isAdjacent) {
                isAdjacentEqual = true
            }
            else if (!isGroupsAdjacent) {

                const exceptionRepetition = await this.exceptionRepetition(pass, index)

                if (exceptionRepetition) {
                    cancel = true
                }
                else if (!cancel)
                    return false
            }
        }

        return isAdjacentEqual
    }

    private async isGroupsAdjacent(digit: string, pass: string[]) {

        const countNumbers = pass.filter(e => e == digit).length

        return countNumbers <= 2 || countNumbers % 2 == 0
    }

    private async exceptionRepetition(pass: string[], index: number) {
        const countRepetitionNumbersActual = pass.filter(e => e == pass[index]).length

        // Aqui pego a repetição, se houver, do próximo número
        const countRepetitionNextNumbers = pass.filter(e => e == pass[index + countRepetitionNumbersActual]).length

        // aqui pego a repetição do dígito seguinte
        const nextNumber = pass.filter(e => e == pass[index + 1]).length

        // Se por acaso houver um número repetido sem um par, mas logo em seguida tiver um par, então entrará no caso de exceção à regra
        return countRepetitionNextNumbers % 2 == 0 && pass[index + countRepetitionNumbersActual] || nextNumber % 2 == 0 && pass[index + countRepetitionNumbersActual]
    }

    private async isAdjacents(actual: string, next: string) {

        const containDigits = actual && next

        return containDigits && actual == next

    }
}
