// Composite -- cтруктурный - помогает структурировать обьекты в дривовидную структуру
// и работает с ней так: как будето это один обьект


class Equipment {
    getPrice() {
        return this.price || 0;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    setPrice(price) {
        this.price = price;
    }
}

class Engine extends Equipment {
    constructor() {
        super();
        this.setName('Engine');
        this.setPrice(300);
    }
}

class Body extends Equipment {
    constructor() {
        super();
        this.setName('Body');
        this.setPrice(200);
    }
}

class Tools extends Equipment {
    constructor() {
        super();
        this.setName('Tools');
        this.setPrice(100);
    }
}

class Composite extends Equipment {
    constructor() {
        super();
        this.equipments = []
    }

    add(equipment) {
        this.equipments.push(equipment);
    }

    getPrice() {
        return this.equipments
            .map(equipment => equipment.getPrice())
            .reduce((a, b) => a+b)
    }
}

class Car extends Composite {
    constructor() {
        super();
        this.setName('Audi')
    }
}

const myCar = new Car();

myCar.add(new Engine());
myCar.add(new Body());
myCar.add(new Tools());

console.log(`${myCar.getName()}, price is ${myCar.getPrice()}$`)
