







// student object
let student = {
    name: "Bill",
    age: 25,
    isMarried: false,
    grades: [90, 85, 75, 95, 90],
    address: {
        street: "123 Main St",
        city: "Los Angeles",
        state: "California",
        zip: 90001
    }
};

// logging student street address
// console.log("Student street: ", student.address.street)
// console.log("Bill's third grade of the array: ", student.grades[2])

// book object
let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    genre: "Fiction",
    pages: 180
};

// dot notation and bracket notation
// console.log("Book Title: ", book.title)
// console.log("Book Author: ", book["author"])

// adding a new property
student.lastName = "Gates";
// console.log("Student last name: ", student.lastName)
// console.log(student)

// updating a property
student.name = "Bill Gates";
// console.log("Student name: ", student.name)

// deleting a property
student.lastName = "";
// console.log("Student last name: ", student.lastName) // empty string

delete student.lastName;
// console.log("Student last name: ", student.lastName) // undefined

// changing the key in an object
const obj = { name: "Billy", age: 30 }
obj.newName = obj.name;
delete obj.name;
// console.log(obj)

students = [
    {
        name: "John",
        age: 25,
        isMarried: false,
        grades: [90, 85, 75, 95, 90],
        address: {
            street: "123 Main St",
            city: "Los Angeles",
            state: "California",
            zip: 90001
        }
    },
    {
        name: "Jane",
        age: 24,
        isMarried: false,
        grades: [90, 85, 75, 95, 90],
        address: {
            street: "123 Main St",
            city: "Los Angeles",
            state: "California",
            zip: 90001
        }
    },
    {
        name: "Jack",
        age: 23,
        isMarried: false,
        grades: [90, 85, 75, 95, 90],
        address: {
            street: "123 Main St",
            city: "Los Angeles",
            state: "California",
            zip: 90001
        },
    }
];

// console.log(students)

// for loop to iterate through the array of objects and add a "lastName" key
for (let i = 0; i < students.length; i++) {

    switch (student.name) {
        case student.name === "John":
            student.lastName = "Smith";
            break;
        case student.name === "Jane":
            student.lastName = "Simpson";
            break;
        case student.name === "Jack":
            student.lastName = "Taylor";
            break;
        default:
            student.lastName = "Fontaine";
            break;
    }
}

students.forEach(student => {
    student.lastName = "Smith";
})

let revisedStudents = students.map(student => {
    student.lastName = "Smith";
    return student;
})

// console.log(students)

// console.log(revisedStudents)

let product = {
    name: "iPhone",
    brand: "Apple",
    price: 1000,
    color: "black",
}
console.log(product.name)
product.year = 2023;
product.price = 1200;
console.log(product)

delete product.price;
console.log(product)

let car = {
    make: "Honda",
    model: "Accord",
    year: 1999,
    color: "black",
}

console.log(car)
car.mileage = 1654132

console.log(car)

car.color = "red";
console.log(car);

if (car.mileage) {
    console.log(`This car has ${car.mileage} miles.`)
} else {
    console.log("or not...")
}

if ("make" in car) {
    console.log("This car has a make.")
} else {
    console.log("This car does not have a make.")
}

if (car.hasOwnProperty("year")) {
    console.log("This car has a year.")
} else {
    console.log("This car does not have a year.")
}

let inventoryItem = {
    name: "towels",
    quantity: 80,
    price: 4.99,
}
console.log(inventoryItem)
inventoryItem.color = ["red", "Green", "Blue"];
console.log(inventoryItem)

inventoryItem.quantity = 62
console.log(inventoryItem.quantity)

