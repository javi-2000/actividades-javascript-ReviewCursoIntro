const person = {
    firstName: "Mario",
    lastName: "Rossi",
    age: 25
};

const option1 = Object.entries(person);
console.log(output);

for(const value in person) {
    console.log(`${value} : ${person[value]}`);
}