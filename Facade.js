// Facade -- скрыть сложную логику за фасадом
// собрать сложную логику, обеденить и вылать простую структуру манипуляции
//

class Conveyor {
    setBody() {
        console.log("Body set!");
    }

    getEngine() {
        console.log("Engine get!");
    }

    setEngine() {
        console.log("Engine set!");
    }

    setInterior() {
        console.log("Interior set!");
    }

    getInterior() {
        console.log("Interior get!");
    }

    setExterior() {
        console.log("Exterior set!");
    }

    setWheels() {
        console.log("Wheels set!");
    }

   print() {
       console.log('Car printed');
   }
}

class ConveyorFacade {
    constructor(car) {
        this.car = car;
    }

    assembleCar() {
        this.car.setBody();
        this.car.setEngine();
        this.car.setInterior();
        this.car.setExterior();
        this.car.setWheels();
        this.car.print();
    }

    changeEngine() {
        this.car.getEngine();
        this.car.setEngine();
    }

    changeInterior() {
        this.car.getInterior();
        this.car.setInterior();
    }
}

const conveyor = new ConveyorFacade(new Conveyor());
let car = conveyor.assembleCar();
car = conveyor.changeInterior();
car = conveyor.changeInterior();
console.log(car);




