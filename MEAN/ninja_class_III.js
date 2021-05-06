class Ninja{
    constructor(name, health=100, speed=3, strength=3){
        this.name=name;
        this._health = health;
        this._speed = speed;
        this._strength = strength;
    }
    sayName(){
        console.log(`Howdy!  My name is ${this.name}.  Pleased to meet you.`)
    }
    showStats(){
        console.log(`Name: ${this.name}, Health: ${this._health}, Speed: ${this._speed}, Strength: ${this._strength}`)
    }
    drinkSake(){
        this._health += 10;
    }
}

class Sensei extends Ninja {
    constructor(name, health=200, speed=10, strength=10, wisdom=10){
        super(name, health, speed, strength);
        this._wisdom = wisdom;
    }
    speakWisdom(){
        console.log(`Slow is smooth and smooth is fast.`)
    }
}

const bill = new Ninja("Bill");
bill.sayName()
bill.showStats()
bill.drinkSake()
bill.showStats()
const splinter = new Sensei("Splinter")
splinter.sayName()
splinter.showStats()
splinter.drinkSake()
splinter.showStats()
splinter.speakWisdom()
