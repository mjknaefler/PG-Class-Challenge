//Create a class called Person that has name and email properties, and a sendEmail method that takes in a message and sends an email to the person's email address. Create an instance of the Person class and call the sendEmail method with a message.

class Person{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    sendEmail(message){
        console.log(`Email sent to ${this.name} at ${this.email}.
        Message sent:
        ${message}`);
    }
}
let tom = new Person("Tom","TomIsCool@gmail.com");
tom.sendEmail("Hello tom!")

//Create a class called Product that has name, price, and description properties, and a discount method that takes in a percentage and returns the discounted price. Create an instance of the Product class and call the discount method with a percentage.
class Product{
    constructor(name,price,description){
        this.name=name;
        this.price=price;
        this.description=description;
    }
    discount(percentage){
        return this.price = this.price-(this.price*(percentage/100))
    }
}
let apple = new Product("Apple",100,"Granny Smith Apple");
console.log(apple.discount(25))