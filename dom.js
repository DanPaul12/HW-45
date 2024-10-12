function Person(name, phone, email){
    this.name = name
    this.phone = phone
    this.email = email
}

Person.prototype.getinfo = function(){
    return `Name: ${this.name} Phone: ${this.phone} Email: ${this.email}`
}

document.getElementById("inputform").addEventListener("submit", function(event){
    event.preventDefault()
    let name = document.getElementById("name").value
    let phone = document.getElementById("phone").value
    let email = document.getElementById("email").value
    let person = new Person(name, phone, email)
    let personElement = document.createElement("div")
    personElement.innerHTML = person.getinfo()
    document.getElementById("personlist").appendChild(personElement)
    document.getElementById("inputform").reset()
})

/*-------------------------------------------------------------------------------*/

let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];

document.getElementById("container2").addEventListener("click", function(){
    for(let i= 0; i < products.length; i++){
        let productElement = document.createElement("div")
        productElement.innerHTML = `Name: ${products[i]["name"]} Price: ${products[i]["price"]} Description: ${products[i]["description"]}`
        document.getElementById("container2").appendChild(productElement)
    }
})

document.getElementById("container3").addEventListener("load", function(){
    for(let i= 0; i < products.length; i++){
        let productElement = document.createElement("div")
        productElement.innerHTML = `Name: ${products[i]["name"]} Price: ${products[i]["price"]} Description: ${products[i]["description"]}`
        document.getElementById("container3").appendChild(productElement)
    }
})

/*-------------------------------------------------------------------------------*/

function changeColor(){
    document.getElementById("box").classList.add("color")
}