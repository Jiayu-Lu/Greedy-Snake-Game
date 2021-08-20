import Food from './Food';
import Snake from './Snake';
import ScorePanel from "./ScorePanel";

class GameControl{
    food: Food;
    snake: Snake;
    scorePanel: ScorePanel;
    direction: String = "";
    isAlive: boolean = true;
    canThroughWall: boolean;

    constructor(canThroughWall: boolean = true) {
        this.food = new Food();
        this.snake = new Snake();
        this.scorePanel = new ScorePanel();
        this.canThroughWall = canThroughWall;

        this.init();
    }

    init() {
        document.addEventListener("keydown", this.keyDownHandler.bind(this));
        this.run();
    }

    keyDownHandler(event: KeyboardEvent) {
        if(this.direction === event.key) return;
        this.direction = event.key;
    }

    run() {
        let X = this.snake.X;
        let Y = this.snake.Y;

        switch (this.direction) {
            case "ArrowUp":
            case "Up":
                Y -= 10;
                break;
            case "ArrowDown":
            case "Down":
                Y += 10;
                break;
            case "ArrowLeft":
            case "Left":
                X -= 10;
                break;
            case "ArrowRight":
            case "Right":
                X += 10;
                break;
        }

        this.checkEat(X, Y);

        try {
            this.snake.X = X;
            this.snake.Y = Y;
        } catch (e) {
            alert(e.message);
            this.isAlive = false;
        }

        this.isAlive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level-1) * 30);
    }

    checkEat(X: number, Y: number) {
        if (X === this.food.X && Y === this.food.Y) {
            this.food.change(this.snake.bodies);
            this.scorePanel.addScore();
            this.snake.increaseBody();
        }
    }
}

export default GameControl;