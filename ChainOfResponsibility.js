// Chain of Responsibility -- поведенческий -- позволяет передавать запросы последовательно по цепочке обработчиков

class Master extends Account {
    constructor(balance) {
        super();
        this.name = 'Master Card';
        this.balance = balance;
    }
}

class PayPal extends Account {
    constructor(balance) {
        super();
        this.name = 'PayPal';
        this.balance = balance;
    }
}

class Visa extends Account {
    constructor(balance) {
        super();
        this.name = 'Visa';
        this.balance = balance;
    }
}

class Account {
    pay(orderPrice) {
        if(this.canPay(orderPrice)){
            console.log(`Paid ${orderPrice} useing ${this.name}`);
        } else if (this.incomer) {
            console.log(`Cannot pay using {this.name}`);
            this.incomer.pay(orderPrice);
        } else {
            console.log('Unfotunately, not enough money');
        }
    }

    canPay(amount) {
        return this.balance >= amount;
    }

    setNext(amount) {
        this.incomer = amount;
    }
}

const master = new Master(100);
const payPal = new PayPal(200);
const visa = new Visa(300);

master.setNext(payPal);
payPal.setNext(visa);

master.pay(240);


