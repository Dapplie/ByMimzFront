export default class Item {
    constructor(name, description, price, type) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.type = type;
    }
}

export const item11 = new Item ('Item 1', 'This is the description for item 1.', 19, 'bag');
