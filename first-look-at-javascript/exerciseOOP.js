class Shape {
    constructor(name) {
        this.name = name;
    }
    calculateAre() {
        return 0;
    };
}

class Square extends Shape {
    #side;//private
    constructor(name, side) {
        super(name);
        this.#side = side;
    }

    calculateAre() {
        return Math.pow(this.side, 2);
    }
    get side() {
        return this.#side;
    }

}
let s1 = new Square("s1", 10);


class Rectangle extends Shape {
    constructor(name, height, width) {
        super(name);
        this.height = height;
        this.width = width;
    }

    calculateAre() {
        return this.height * this.width;
    }
}
