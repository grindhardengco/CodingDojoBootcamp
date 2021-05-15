class Bike{
    miles: number;  
    price: number;
    max_speed: string;
    constructor(price: number, max_speed: string){
       this.miles = 0;
       this.price = price;
       this.max_speed = max_speed;
    }
    displayInfo = () => {
       console.log(`Price: ${this.price}, Max speed: ${this.max_speed}, Miles: ${this.miles}.`)
    }
    ride = () => {
       console.log("Riding...");
       this.miles += 10;
    }
    reverse = () => {
          if(this.miles >= 5){
          console.log("Reversing...")
          this.miles -= 5;
       }
       else{
          console.log("This bike cannot be reversed.")
       }
    }
 }
 
 var bike1 = new Bike(500, "15 mph");
 var bike2 = new Bike(1000, "20 mph");
 var bike3 = new Bike(5000, "35 mph");
 
 bike1.ride()
 bike1.ride()
 bike1.ride()
 bike1.reverse()
 bike1.displayInfo()
 
 bike2.ride()
 bike2.ride()
 bike2.reverse()
 bike2.reverse()
 bike2.displayInfo()
 
 bike3.reverse()
 bike3.displayInfo()
 