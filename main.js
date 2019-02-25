class Developer {
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getName(){
      return `${this.firstName}, ${this.lastName}`;
    }
}

class JavaScriptDeveloper extends Developer{
    getJob(){
        return "JavaScript Developer";
    }
}

let dev = new JavaScriptDeveloper("Jonathan", "Sequeira");

console.log(dev.getName());
console.log(dev.getJob());

const getGreeting = () => {
    return "Welcome to React Dev";
}


console.log(getGreeting());


