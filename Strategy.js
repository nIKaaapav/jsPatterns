// Strategy -- поведенческий -- определяет схожие алгоритмы и помещает в отдельный класс
// после можно автоматически переключатся в ходе выполнения программы

function baseStrategy(amount) {
    return amount;
}

function premiumStrategy(amount) {
    return amount * 0.8;
}

function platinumStrategy(amount) {
    return amount * 0.6;
}

class AutoCart {
    constructor(discount) {
        this.discount = discount;
        this.amount = 0;
    }

    checkout() {
        return this.discount(this.amount);
    }

    setAmount(amount) {
        this.amount = amount;
    }
}

const clientBase = new AutoCart(baseStrategy);
const clientPremium = new AutoCart(baseStrategy);
const clientPlatinum = new AutoCart(baseStrategy);

clientBase.setAmount(200);
console.log(clientBase.checkout());

clientPremium.setAmount(200);
console.log(clientPremium.checkout());

clientPlatinum.setAmount(200);
console.log(clientPlatinum.checkout());
