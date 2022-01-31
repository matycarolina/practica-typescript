function Decorador(/*cls: Function*/clsProto: any, propertyName: string) {
    console.log("Soy un decorador en ejecucion")
    //cls.prototype.className = cls.name;
    clsProto.className = clsProto.name;
    console.log(propertyName);
}

function DecoradorStatic(cls: Function, propertyName: string){

}

class Speaker {
    @Decorador
    numero: number;
    @DecoradorStatic
    static otroPar: string;
}

let speaker: Speaker = new Speaker();
console.log((speaker as any).className);