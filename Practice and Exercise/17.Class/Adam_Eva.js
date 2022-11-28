




class Apple {
    constructor(weight){
        this.weight = weight;
    }

    decrease(){
        return this.weight--;
    }

    isEmpty(){
        if(this.weight)
    }

    getWeight(){

    }
}

class Human {
    constructor(name, gender, weight){
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }

    speak(){
        console.log(`${this.name == "Adam" ? `${this.name} said gà` : `${this.name} said vịt`}`);
    }

    eatApple(apple_weight){
        if(apple_weight > 0) {
            console.log(`${this.name} bite apple`);
            return this.weight++;
        } else {
            console.log(`apple empty`);
        }
    }

    checkAppleWeight(apple_weight){
        console.log(`Check apple weight: ${apple_weight} `);
    }
}

let adam = new Human("Adam", true, 60)
let eva = new Human("Eva", false, 45)
let apple = new Apple(10)

adam.speak()
eva.speak()

adam.eatApple(apple.weight);
adam.checkAppleWeight(apple.weight);
