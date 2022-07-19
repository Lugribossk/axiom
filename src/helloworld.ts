const MAX_WIDTH = 56;
const MAX_HEIGHT = 20;

const getName = () => "Hello world";

const onConnect = () => {};

const onUpdate = () => {
    drawText(`Hello ${new Greeter().value}`, 17, 0, 0);
};

const onInput = () => {};

class Greeter {
    value: string;

    constructor() {
        this.value = "world";
    }
}
