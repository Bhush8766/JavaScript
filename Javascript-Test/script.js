console.log("Task 1");

function reverseWords(sentense) {
    return sentense.split(" ")
        .map(word => word.split("").reverse().join(""))
        .join(" ");
}

let input = "Hello world from wisdom sprouts IT training hub";
console.log("String : " + input)
let output = reverseWords(input);

console.log(output);
console.log("---------")



//
console.log("Task 2");

function wordFrequency(paragraph){
    let text = paragraph.toLowerCase();

    text = text.replace(/[^\w\s]/g, "");

    let words = text.split(/\s+/);

    let frequency = {};

    words.forEach(word => {
        if(word) {
            frequency[word] = (frequency[word] || 0) + 1;
        }
    });

    return frequency;
}

let input1 = "Learning JavaScript is fun! Fun and easy to learn JavaScript.";
console.log(input1);
console.log(wordFrequency(input1));

console.log("---------")



//
console.log("Task 3");

function getAdults(users) {
    return users.filter(user => user.age > 18);
}

let input2 = [
    { name: "Alice", age: 22 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 19 }
];

let output2 = getAdults(input2);
console.log(output2);
console.log("---------")


//
console.log("Task 4");

function sortProducts(products) {
    return products.sort((a, b) => a.price - b.price);
}

let products = [
    { name: "Keyboard", price: 499 },
    { name: "Monitor", price: 8999 },
    { name: "Mouse", price: 299 }
];

console.log(sortProducts(products));
console.log("---------")


//
console.log("Tasks 5");

function createSlug(text) {
    return text
        .toLowerCase()
        .replace(/[^\w\s]/g, "") 
        .trim()
        .replace(/\s+/g, "-"); 
}

let input5 = "Learn JavaScript in 30 Days!";
console.log(input5);
console.log(createSlug(input5));
console.log("---------")



//
console.log("Tasks 6");

function groupByLength(words) {
    let result = {};

    words.forEach(word => {
        let len = word.length;

        if (!result[len]) {
            result[len] = [];
        }

        result[len].push(word);
    });

    return result;
}

let words = ["dog", "apple", "sun", "table", "cat", "pie"];
console.log(groupByLength(words));
console.log("---------")




//
console.log("Tasks 10");
function calculate(expression) {
  return Function('"use strict"; return (' + expression + ')')();
}

let Data = "3 + 5 * 2 - 4 / 2";
let result = calculate(Data);

console.log(result);
console.log("---------")




//
console.log("Tasks 9");

function randomDelay() {
  return Math.random() * (2000 - 500) + 500; // 0.5s to 2s
}

function runTask(name) {
  return new Promise((resolve) => {
    const delay = randomDelay();
    setTimeout(() => {
      console.log(`Task ${name} completed`);
      resolve();
    }, delay);
  });
}

async function runAllTasks() {
  await runTask("A");
  await runTask("B");
  await runTask("C");
  console.log("All tasks completed");

  console.log("---------")
}

runAllTasks();



