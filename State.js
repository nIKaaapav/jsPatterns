// State -- поведенчиский
// меняет свое поведение взависимости от состояния

class OrderStatus {
    constructor(name, nextStep) {
        this.name = name;
        this.nextStep = nextStep;
    }

    next() {
        return new this.nextStep();
    }
}

class WaitingForPayment extends OrderStatus {
    constructor() {
        super('waitingForPayment', Shipping);
    }
}

class Shipping extends OrderStatus {
    constructor() {
        super('shipping', Delivered);
    }
}


class Delivered extends OrderStatus {
    constructor() {
        super('delivered', Delivered);
    }
}

class Order {
    constructor() {
        this.state = new WaitingForPayment();
    }

    nextState() {
        this.state = this.state.next();
    }

    cancelOrder() {
        this.state.name === 'waitingForPayment' ?
            console.log('Order is canceled!') :
            console.log('Order cant be canceled!');
    }
}

const myOrder = new Order();

console.log(myOrder.state.name);
myOrder.nextState();

console.log(myOrder.state.name);
myOrder.nextState();

console.log(myOrder.state.name);
