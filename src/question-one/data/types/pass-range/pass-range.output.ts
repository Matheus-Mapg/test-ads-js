export abstract class PassRangeOutput {

    async response(data: any) {
        return {
            error: false,
            message: 'sucess',
            data
        }
    }
}
