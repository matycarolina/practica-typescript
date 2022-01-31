enum Tallas { Chica= 1, Mediana= 2, Grande=3}

enum PaymentState {Creado, Pagao, EnDeuda}

class Pedido{
    talla: number;
}

let pedido: Pedido = new Pedido();

pedido.talla= Tallas.Chica;

console.log(Tallas.Chica);
console.log(PaymentState.EnDeuda) 