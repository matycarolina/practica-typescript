interface Asset {
    x: number;
    y: number;
    width: number;
    height: number;
    getCoords(): string;
}

class Hero implements Asset {
    x: number;
    y: number;
    width: number;
    height: number;

    getCoords(): string {
        return ""
    }
}

class Bullet implements Asset {
    x: number;
    y: number;
    width: number;
    height: number;

    getCoords(): string {
        return ""
    }
}

class Enemy implements Asset {
    x: number;
    y: number;
    width: number;
    height: number;

    getCoords(): string {
        return ""
    }
}

class SpaceBullet extends Bullet{}

let spaceBullet: Asset = new SpaceBullet();

class Collisions {
    static check(obj: Asset, object2: Asset) {

    }
}