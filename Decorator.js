// Decorator -- оборачивание класса в обект Decorator и разширять его возможности
// польшое количество подкласов

class Car {
    constructor() {
        this.price = 1000;
        this.model = 'Car';
    }

    getPrice() {
        return this.price;
    }

    getDescription() {
        return this.model;
    }
}

class Tesla extends Car {
    constructor() {
        super();

        this.price = 2000;
        this.model = 'Tesla';
    }
}

class Autopilot {
    constructor(car) {
        this.car = car;
    }

    getPrice() {
        return this.car.getPrice() + 500;
    }

    getDescription() {
        return `${ this.car.getDescription()} with autopilot`;
    }
}


class Parktronic {
    constructor(car) {
        this.car = car;
    }

    getPrice() {
        return this.car.getPrice() + 200;
    }

    getDescription() {
        return `${this.car.getDescription()} with parktronic`;
    }
}

let tesla = new Tesla();
tesla = new Autopilot(tesla);
tesla = new Parktronic(tesla);
console.log(tesla.getPrice(), tesla.getDescription());