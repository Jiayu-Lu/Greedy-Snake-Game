class Food {
    element: HTMLElement;

    constructor() {
        this.element = document.getElementById("food")!;
    }

    get X() {
        return this.element.offsetLeft;
    }

    get Y() {
        return this.element.offsetTop;
    }

    change(snakeBody: HTMLCollection) {
        let top: number = Math.round(Math.random() * 29) * 10;
        let left: number = Math.round(Math.random() * 29) * 10;

        let foodInSnake: boolean = false;
        for(let i = 0; i < snakeBody.length; i++) {
            let body = (snakeBody[i] as HTMLElement);
            if(left === body.offsetLeft && top === body.offsetTop) {
                foodInSnake = true;
                break;
            }
        }
        if(foodInSnake) {
            this.change(snakeBody);
        } else {
            this.element.style.top = top + "px";
            this.element.style.left = left + "px";
        }
    }
}

export default Food;