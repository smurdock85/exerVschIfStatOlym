if (5 > 3) {
    console.log("is greater than")
}

var cat = "cat"
var dog = "dog"
if (cat.length === 3) {
    console.log("is the length")
}

if ("cat" === "dog") {
    console.log("is the same")
}
else {
    console.log("not the same")
}

var person = {
    name: "Bobby",
    age: 12
  }

if (person.age >= 18) {
    console.log(person.name + " is allowed to go to the movie.")
}
else {
    console.log("Sorry, too young.")
}

if (person.name[0] === "B") {
    console.log(person.name + " is allowed to go to the movie.")
}
else {
    console.log("Sorry, we don't like your name.")
}

if (person.age >= 18 && person.name[0] === "B") {
    console.log(person.name + " is allowed to go to the movie.")
}
else {
    console.log("Sorry, no movie for you.")
}

if (1 === "1") {
    console.log("strict")
}
else if (1 == "1") {
    console.log("loose")
}
else {
    console.log("not equal at all")
}

if (1 <= 2 && 2 == 4) {
    console.log("yes")
}
else {
    console.log("no")
}

var dog = "dog"

if (typeof dog === "string") {
    console.log("string")
}
else {
    console.log("not string")
}

var trueVal = true

if (typeof trueVal === "boolean") {
    console.log("boolean")
}
else {
    console.log("not boolean")
}

if (typeof dog !== "undefined") {
    console.log("defined")
}
else {
    console.log("undefined")
}

if (typeof bat !== "undefined") {
    console.log("defined")
}
else {
    console.log("undefined")
}

if ("s" > 12) {
    console.log("greater than")
}
else {
    console.log("this doesn't make sense")
}

if ("s" > "b") {
    console.log("greater than")
}
else {
    console.log("this doesn't make sense")
}

if (5 > 2) {
    console.log("greater than")
}
else {
    console.log("this doesn't make sense")
}

var myNum = 10;
// Write your ternary here to log if `myNum` is odd or even.
if (myNum % 2 === 0) {
    console.log("even")
}
else if (myNum % 2 === 1) {
    console.log("odd")
}
else {
    console.log("not a whole number")
}

var myNum = 11;
// Write your ternary here to log if `myNum` is odd or even.
if (myNum % 2 === 0) {
    console.log("even")
}
else if (myNum % 2 === 1) {
    console.log("odd")
}
else {
    console.log("not a whole number")
}

var myNum = 14.2;
// Write your ternary here to log if `myNum` is odd or even.
if (myNum % 2 === 0) {
    console.log("even")
}
else if (myNum % 2 === 1) {
    console.log("odd")
}
else {
    console.log("not a whole number")
}