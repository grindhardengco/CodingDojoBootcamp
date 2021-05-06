function Ninja(name, health=100){
    var self = this;
    this.name = name;
    this.health = health;
    self.speed = 3;
    self.strength = 3;
    this.sayName = function(){
        console.log(`Howdy!  My name is ${this.name}.  Pleased to meet you.`)
    }
    this.showStats = function(){
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${self.speed}, Strength: ${self.strength}`)
    }
    this.drinkSake = function(){
        // console.log(`old health: ${this.health}`)
        this.health += 10;
        // console.log(`new health: ${this.health}`)
        console.log(`${this.name} drank sake.  ${this.name}'s health is ${this.health}.`)
    }
    this.punch = function(opponent){
        if(opponent instanceof Ninja == true){
            opponent.health -= 5;
            console.log(`${opponent.name} was punched by ${this.name}.  ${opponent.name} lost 5 health points.`)
        }
        else{
            console.log("You attacked an innocent citizen!")
        }
    }
    this.kick = function(opponent){
        if(opponent instanceof Ninja == true){
            // console.log(`Opponent health is: ${opponent.health}.`)
            opponent.health -= 15;
            console.log(`${opponent.name} was kicked by ${this.name}.  ${opponent.name} lost 15 health points.`)
        }
        else{
            console.log("You attacked an innocent citizen!")
        }
    }
}

var bill = new Ninja("Bill")
bill.sayName()
bill.showStats()
bill.drinkSake()
var theBride = new Ninja("The Bride")
theBride.sayName()
theBride.drinkSake()
theBride.kick(bill)
bill.showStats()