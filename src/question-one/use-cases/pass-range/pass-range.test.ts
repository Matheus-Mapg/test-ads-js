import { PassRangeUsecase } from "./pass-range.usecase";

export class PassRangeTest extends PassRangeUsecase {

    async isAdjacentEqualTest(pass: string[]): Promise<boolean> {
        return await this.isAdjacentEqual(pass)
    }

    async isContinuousTest(pass: string[]): Promise<boolean> {
        return await this.isContinuous(pass)
    }
}
