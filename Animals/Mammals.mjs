import Animal from "./Animal.js"

class Mammals extends Animal{
    //ovberrides cunstructor
    constructor(name, eyes, skin, legs, claws){  //animal nails
        super(name, eyes)
       
        this.skin = skin
        this.legs = legs
        this.claws = claws
    }
    canEat(){
       console.log(`This animal can eat meat.`)
    }
    showBodyParts(){
       console.log(`${this.name} has ${this.legs} legs, ${this.skin} and ${this.claws} claws.`)
    }
 }
 let mammal1 = new Mammals("cat", 'green', 'fur', 4, 'sharp')
 console.log(mammal1.name.toUpperCase());
 console.log(mammal1.getName())
 console.log(mammal1.eyes);
 mammal1.canEat()
 mammal1.showBodyParts()  
 
 let mammal2 = new Mammals('Peter')
 //console.log(mammal2.name)
 console.log(mammal2.getName())