// Iterator -- поведенческий -- дает возможность обходить элементы, не расскрывая их внетренее представление

class Iterator {
    constructor(el) {
        this.index = 0;
        this.elenemt = el;
    }

    next() {
        return this.elenemt[this.index++];
    }

    hasNext() {
        return this.index < this.elenemt.length;
    }
}


const collection = new Iterator(['Audi', 'BMW', 'Tesla', 'Ford']);
while (collection.hasNext()) {
    console.log(collection.next());
}

class IteratorObject {
    constructor(el) {
        this.index = 0;
        this.keys = Object.keys(el);
        this.elenemt = el;
    }

    next() {
        return this.elenemt[this.keys[this.index++]];
    }

    hasNext() {
        return this.index < this.keys.length;
    }
}

const autos = {
    audi: { model: "Audi", color: 'black', price: 100 },
    bmw: { model: "BMW", color: 'black', price: 200 },
    tesla: { model: "Tesla", color: 'white', price: 300 },
}

const collectionObjects = new IteratorObject(autos);
while (collection.hasNext()) {
    console.log(collection.next());
}
