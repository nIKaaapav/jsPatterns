// Visitor -- поведенчиский --
// добавляет новую функциональность к уже соществующим классам, не изменяя исходный их код

class Auto {
    accept(visitor) {
        visitor(this);
    }
}

class Tesla extends Auto {
    info() {
        return 'it is a Tesla';
    }
}

class Bmw extends Auto {
    info() {
        return 'it is a Bmw';
    }
}

class Audi extends Auto {
    info() {
        return 'it is an Audi';
    }
}

function exportVisitor(auto) {
    if (auto instanceof Tesla){
        console.log(`Exported data: ${auto.info()}`);
    } else if (auto instanceof Bmw){
        console.log(`Exported data: ${auto.info()}`);
    } else if (auto instanceof Audi){
        console.log(`Exported data: ${auto.info()}`);
    }
}

const tesla = new Tesla();

console.log(tesla.accept(exportVisitor));
