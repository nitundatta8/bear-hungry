// business logic

export class HungryBear {

  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    this.sleepLevel = 8;
  }

  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 1000);
  }

  getSleep() {
    setInterval(() => {
      this.sleepLevel--;
    }, 1000);
  }

  didYouGetEaten() {
    if (this.foodLevel > 0) {
      return false;
    } else {
      return true;
    }
  }

  feed() {
    this.foodLevel = 10;
  }

  didBearGetAngry(){
    if (this.sleepLevel >= 8) {
      return false;
    } else {
      return true;
    }
  }

}


