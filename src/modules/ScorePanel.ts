class ScorePanel {
    score: number = 0;
    level: number = 1;
    maxLevel: number;
    levelUpRate: number;
    scoreEle: HTMLElement;
    levelEle: HTMLElement;

    constructor(maxLevel: number = 10, levelUpRate: number = 10) {
        this.scoreEle = document.querySelector("#score")!;
        this.levelEle = document.querySelector("#level")!;
        this.maxLevel = maxLevel;
        this.levelUpRate = levelUpRate;
    }

    addScore() {
        this.scoreEle.innerHTML = (++this.score).toString();
        if(this.score % this.levelUpRate === 0) {
            this.levelUp();
        }
    }

    levelUp() {
        if (this.level < this.maxLevel) {
            this.levelEle.innerHTML = (++this.level).toString();
        }
    }
}

export default ScorePanel;