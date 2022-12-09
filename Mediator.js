// Mediator -- поведенческий -- посредник --
// уменшает взяимосвязь классов между собой, вынося межклассовые связи в класс-посредник

class OfficialDealer {
    constructor() {
        this.customers = [];
    }

    orderAuto(customer, auto, info) {
        const name = customer.getName();

        console.log(`Order name: ${name}. Order auto is ${auto}`);
        console.log(`Additional info: ${info}`);
        this.addToCustomersList(name);
    }

    addToCustomersList(name) {
        this.customers.push(name);
    }

    getCustomersList() {
        return this.customers;
    }
}

class Customer {
    constructor(name, dealerMediator) {
        this.name = name;
        this.dealerMediator = dealerMediator;
    }

    getName() {
        return this.name;
    }

    makeOrder(auto, info) {
        this.dealerMediator.orderAuto(this, auto, info);
    }
}

const mediator = new OfficialDealer();
const nika = new Customer("Nika", mediator);
nika.makeOrder('Tesla', 'electrocar');

