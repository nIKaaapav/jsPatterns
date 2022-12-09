// Factory Method - суперсласс - когда нужно создать много однотипных структур, но разные данные
//
class Car {
    constructor(model, price, maxSpeed) {
        this.model = model;
        this.price = price;
        this.maxSpeed = maxSpeed;
    }
}

class CarFactory {
    create(type) {
        if (type === 'X5') {
            return new Car(type, 10000, 300)
        }
        if (type === 'X6') {
            return new Car(type, 10000, 320)
        }
    }
}

const factory = new CarFactory();

const x5 = factory.create('X5')
const x6 = factory.create('X6')