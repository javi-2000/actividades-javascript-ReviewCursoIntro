const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
};

// Crea un nuevo objeto con las mismas claves cambiando el valor `firstName` por "Simon"
const person2 = {...person1};
person2.firstName = "Simon";
  
console.log(person1);
console.log(person2);