// let myText = "I am a string";
// let newString = myText.replace("string", "sausage");

// let myArray = ['I', 'love', 'chocolate', 'frogs'];
// let madeString = myArray.join(' ');
// console.log(madeString);

// let myNumber = Math.random();

// console.log(newString)
// document.getElementById("demo").innerHTML = newString

// console.log(madeString)
// document.getElementById("demo").innerHTML = madeString

// console.log(myNumber)
// document.getElementById("demo").innerHTML = myNumber

// function sum(a,b) {
//     return a + b;
// }

// let result = sum(1,2);
// alert(result);

function checkAge(age) {
    if (age >= 18) {
        return true;
    } else {
        return confirm('Do you have permission from your parents?');
    }
}

let result = checkAge(16);
alert(result);
