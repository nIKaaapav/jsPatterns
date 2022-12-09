// Template Method -- поведенчиский --
// определяет базовые шаги исполнения алгоритма и выполнение этих шагов делегирует на другие методы
//

class Builder {
    build() {
        this.addEngine();
        this.installChassis();
        this.addElectronic();
        this.collectAccessories();
    }
}

class TeslaBuilder extends Builder {
    addEngine() {
        console.log('add Engine');
    }

    installChassis() {
        console.log('add Chassis');
    }

    addElectronic() {
        console.log('add Electronic');
    }

    collectAccessories() {
        console.log('add Accessories');
    }
}

class BmwBuilder extends Builder {
    addEngine() {
        console.log('add Bmw Engine');
    }

    installChassis() {
        console.log('add Bmw Chassis');
    }

    addElectronic() {
        console.log('add Bmw Electronic');
    }

    collectAccessories() {
        console.log('add Bmw Accessories');
    }
}

const tesla = new TeslaBuilder();
tesla.build();
const bmw = new BmwBuilder();
bmw.build();
