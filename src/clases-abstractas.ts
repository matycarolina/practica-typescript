abstract class Assets {
    x: number;
    y: number;
    width: number;
    height: number;
    getCoords(): string {return `${this.x}, ${this.y}`};

    abstract move(speed: number): boolean;
}

class Heroes extends Assets{
    move(speed: number){
        return true;
    }
}
