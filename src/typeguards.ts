function isNumber(obj: number | string): obj is number{
    return typeof obj === 'number';
}

function isString(obj: number | string): obj is string{
    return typeof obj === 'string';
}

 function printAge(age: number | string){
     if(typeof age === 'number'){
         //estamos seguros de que el objeto es un numero
     }
     else{
        //estamos seguros de que el objeto es una cadena
     }
 }