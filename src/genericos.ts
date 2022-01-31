function genericReceptor<T>(obj: T):T{
    return obj;
};

let cadena =genericReceptor<string>("Mary");
let numero = genericReceptor<number>(20);

// printAll<string>(["hola", "mundo"]);
// printAll<number>([20, 25, 12]);
// printAll<boolean>([true]);

class Printer<T>{
    printAll(arr: T[]){
    console.log(arr.length);
}
}

let printer: Printer<number> = new Printer();

printer.printAll([12,25,90])