// Bridge -- порождающий - разделяет один или несколько классов на несколько иерархий - астракция и реализация
// помогает изменять их без зависимости друг от друга

class Model {
    constructor(color) {
        this.color = color;
    }
}

class Color {
    constructor(type) {
        this.type = type;
    }

    getType() {
        return this.type;
    }
}

class BlackColor extends Color {
    constructor() {
        super("Dark-black");
    }
}

class SilverColor extends Color {
    constructor() {
        super("silver");
    }
}

class Audi extends Model {
    constructor(color) {
        super(color);
    }

    paint() {
        return `Audi, color ${this.color.get()}`;
    }
}

class Bmw extends Model {
    constructor(color) {
        super(color);
    }

    paint() {
        return `Bmw, color ${this.color.get()}`;
    }
}

const blackCar = new Bmw(new BlackColor());
console.log(blackCar.paint());
