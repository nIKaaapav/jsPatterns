// Abstract Factory - интерфейс групирующие другие фабрики, которые связаны
// дополнительная надстройна над другими фабриками

function carProducer(kind) {
    return kind === 'sport' ? sportCarFactory : familyCarFactory
}

function sportCarFactory() {
    return new Z4();
}

function familyCarFactory() {
    return new I3();
}

class Z4 {
    info() {
        return "z4 is sport car";
    }
}

class I3 {
    info() {
        return "I3 is family car";
    }
}

const produce = carProducer('sport');

const myCar = new produce();

console.log(myCar.info());