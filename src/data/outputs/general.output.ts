export abstract class GeneralOutput {

    async response(data: any) {
        return {
            error: false,
            message: 'sucess',
            data
        }
    }
}
