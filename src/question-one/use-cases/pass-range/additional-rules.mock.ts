import { AdditionalRules } from "./additional-rules";

export class AdditionalRulesTest extends AdditionalRules {

    async isAdjacentEqualTest(pass: string[]): Promise<boolean> {
        return await this.isAdjacentEqual(pass)
    }
}
