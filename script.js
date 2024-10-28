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
console.log("Student street: ", student.address.street)
console.log("Bill's third grade of the array: ", student.grades[2])

// book object
let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    genre: "Fiction",
    pages: 180
};

// dot notation and bracket notation
console.log("Book Title: ", book.title)
console.log("Book Author: ", book["author"])