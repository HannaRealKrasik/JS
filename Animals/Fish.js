import Animal from "./Animal.js";

class Fish extends Animal {
    constructor(name, eyes, skin, limbs, breath){
        super(name, eyes);
        this.skin = skin;
        this.limbs = limbs;
        this.breath = breath;
    }

    canEat(){
        console.log("This animal can eat fish and seaweed");
    }
    showBodyParts(){
        console.log(`${this.name} has ${this.limbs}, ${this.skin} and ${this.breath} claws.`)
     }
     reproduction(){
       console.log("This animal can reproduction with caviar");
     }
     breath1(){
       console.log("This anomal breathe through gills");
     }
    }
    let fish1 = new Fish("karas", "blue", "scales", "fins")
    console.log(fish1.name.toUpperCase());
 console.log(fish1.getName())
 console.log(fish1.eyes);
 fish1.canEat()
 fish1.showBodyParts()  
 fish1.reproduction();
 fish1.breath1();
