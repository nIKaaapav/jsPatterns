// Observer --поведенчиский
// осздает межанизм подписки, одни обьекты следят за другими

class AutoNews {
    constructor() {
        this.news = '';
        this.actions = [];
    }

    setNews(text) {
        this.news = text;
        this.notifyAll();
    }

    notifyAll() {
        return this.actions.forEach(subs => subs.inform(this));
    }

    register(observer) {
        this.actions.push(observer);
    }

    unregister(observer) {
        this.actions = this.actions.filter(el => !(el instanceof observer));
    }
}

class Jack {
    inform(massage) {
        console.log(`Jack has been informed about: ${massage.news}`);
    }
}


class Max {
    inform(massage) {
        console.log(`Max has been informed about: ${massage.news}`);
    }
}

const autoNews = new AutoNews();
autoNews.register(new Jack());
autoNews.register(new Max());

autoNews.setNews('New Tesla price is 40000')

