function Auditable(/*clsProto: any, methodName: string, descriptor?: any*/message: string) {
    return function (clsProto: any, methodName: string, descriptor?: any) {
        let originalFunction = clsProto[methodName];
        let decoratedFunction = function () {
            originalFunction();
            console.log(message)

        }
        descriptor.value = decoratedFunction;

        return descriptor;
    }
}

class SpeakerB {
    // @Auditable('oldN esta obsoleto, hay que usar n')
    // onldN() {
    //     console.log(10)
    // }
    // @Auditable('n fue ejecutado')
    // n() { console.log(20); }
}

let speakerB: SpeakerB = new SpeakerB();

//speakerB.n();