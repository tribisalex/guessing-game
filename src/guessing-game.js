class GuessingGame {
    constructor() {
        let guessing;
        let medium;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.mediun = (this.max - this.min) / 2
        this.guessing = Math.round(this.mediun + this.min);
        return this.guessing;
    }

    lower() {
        this.max = this.guess();
    }

    greater() {
        this.min = this.guess();
    }
}

module.exports = GuessingGame;
