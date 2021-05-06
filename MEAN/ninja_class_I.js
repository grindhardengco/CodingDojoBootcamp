function Ninja(name, health=100){
    this.name = name;
    var speed = 3;
    var strength = 3;
    this.sayName = function(){
        console.log(`Howdy!  My name is ${name}.  Pleased to meet you.`)
    }
    this.showStats = function(){
        console.log(`Name: ${name}, Health: ${health}, Speed: ${speed}, Strength: ${strength}`)
    }
    this.drinkSake = function(){
        health += 10;
    }
    return 
}

var bill = new Ninja("Bill")
bill.sayName()
bill.showStats()
bill.drinkSake()
bill.showStats()