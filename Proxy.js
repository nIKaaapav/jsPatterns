// Proxy -- заместитель -- структурный -- вместо реальных обьектов -обьекты заменители
// и дают сдать что-то до или после обращения к оригенальному обьекту
// пр: авторизация


class CarAccess {
    open() {
        console.log('Opening car door')
    }

    close() {
        console.log('Closing car door')
    }
}

class SecuritySystem {
    constructor(door) {
        this.door = door;
    }

    open(password) {
        if (this.authenticate(password)){
            this.door.open();
        } else {
            console.log('Access denied!')
        }
    }

    authenticate(password) {
        return password === "password"
    }

    close() {
        this.door.close();
    }
}

const door = SecuritySystem(new CarAccess());

door.open("pass");
door.open("password");
door.close();
