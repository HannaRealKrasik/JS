
 

export default class Animal {
    constructor(name, eyes) {
       this.name = name;      
       this.eyes = eyes;
    }
    getName() {
       return (`The name of the animal is ${this.name}.`)
    }
    canEat() {
       console.log(`This animal can eat`)
    }
    reproduction(){
      console.log("This animal can reproduction");
    }
    breath(){
      console.log("This anomal can breath")
    }
 }

 let animal1 = new Animal("tiger");
 let animal2 = new Animal('salmon', "blue");
 
 console.log(animal1.name);
 console.log(animal1.getName())
 animal1.eyes = "yellow"   
 console.log(animal1.eyes); 
 animal2.canEat()  

//  console.log("===========================================")
 
 

 
