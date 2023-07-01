export abstract class IPassRangeType {

    separetedDigits(pass: number): Promise<string[]> {
        throw new Error('Not Implemented')
    }

    protected isAdjacentEqual(pass: string[]): Promise<boolean> {
        throw new Error('Not Implemented')
    }

    protected isContinuous(pass: string[]): Promise<boolean> {
        throw new Error('Not Implemented')
    }

    validatePassword(pass: string[]): Promise<boolean> {
        throw new Error('Not Implemented')
    }
}
