class Animal {

    constructor(name){
        this.name = name;
    }

    speak(){
        console.log(this.name + " makes a noise.");
    }
    
}

class Dog extends Animal {
    speak(){
        console.log(this.name + " barks.")
    }
}

const dog1 = new Dog("Max");
dog1.speak();