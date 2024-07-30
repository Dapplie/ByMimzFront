export default class Item {
    constructor(name, description, price, type, image) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.type = type;
        this.image = image;
    }
}

export const item11 = new Item ('Item 1', 'This is the description for item 1.', 19, 'bag');
