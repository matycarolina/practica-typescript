interface AssetC<T>{
    x: number; 
    y: number;
    generico: T
}

// function generic<T extends AssetC>(obj: T){

// }

class Point implements AssetC<string>{
    x: number; 
    y: number;
    generico: string;
}

class Elements implements AssetC<Point>{
    x: number; 
    y: number;
    generico: Point;
}

//generic<Point>(new Point());