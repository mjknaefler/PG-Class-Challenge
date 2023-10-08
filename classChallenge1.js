//Create a class called Animal that has a name property and a speak method. The speak method should log a message to the console saying "Hello, my name is {name}." Create an instance of the Animal class and call the speak method.

class Animal{
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(`Hello, my name is ${this.name}`);
    }
}
let dog = new Animal("Tom");
dog.speak();

//Create a class called Person that has name and age properties, and a greet method that logs a message to the console saying "Hello, my name is {name} and I am {age} years old." Create an instance of the Person class and call the greet method.

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age}`);
    }
}
let joe = new Person("Joe",25);
joe.greet();

//Create a class called Car that has make, model, and year properties, and a start method that logs a message to the console saying "The {make} {model} is starting." Create an instance of the Car class and call the start method.

class Car{
    constructor(make,model,year){
        this.make = make;
        this.model = model;
        this,year = year;
    }
    start(){
        console.log(`The ${this.make} ${this.model} is starting.`)
    }
}
let jeep = new Car('Jeep','Renegade',2017);
jeep.start();

//Create a class called Rectangle that has width and height properties, and a getArea method that returns the area of the rectangle. Create an instance of the Rectangle class and call the getArea method.
class Rectangle{
    constructor(width,height){
        this.width = width;
        this.height = height;
    }
    getArea(){
        return this.width*this.height;
    }
}

let square = new Rectangle(5,5);
console.log(square.getArea());

//Create a class called BankAccount that has accountNumber, accountHolderName, and balance properties, and a deposit method that takes in an amount and adds it to the balance. Create an instance of the BankAccount class and call the deposit method with an amount.

class BankAccount{
    constructor(accountNumber,accountHolderName,balance){
        this.accountNumber=accountNumber;
        this.accountHolderName=accountHolderName;
        this.balance=balance;
    }
    deposit(amount){
        this.balance += amount;
    }
}
let myAccount = new BankAccount(111,"Max",1000);
console.log(myAccount.balance);
myAccount.deposit(500);
console.log(myAccount.balance);

