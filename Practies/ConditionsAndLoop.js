// // Nested Loop

// marks = 35

// if (marks == 0 & marks <= 100) {

//     if (marks <= 34) {
//         console.log('Fail');
//     } else if (marks >= 35 & marks <= 40) {
//         console.log('pass');
//     } else if (marks >= 41 & marks <= 50) {
//         console.log('Grade C');
//     } else if (marks >= 51 & marks <= 60) {
//         console.log('Grade B');
//     } else if (marks >= 61 & marks <= 70) {
//         console.log('Grade B+');
//     } else if (marks >= 71 & marks <= 85) {
//         console.log('Grade A');
//     } else {
//         console.log('Grade A+');
//     }
// }
// else {
//     console.log('invalid')
// }




let exp = 2
let sal = 1

if (exp < 1) {
    if (sal < 10000) {
        console.log('Sonpapdi');
    } else {
        console.log('Barfi');
    }
} else {
    console.log('Sonpapdi');

    if (sal < 1) {
        console.log('Gulabjamun');
    } else {
        console.log('Kajukatli');
    }
}





//switch case

month = 4
console.log(month)

switch(month){
    case 1:
        console.log('winter');
        break
    case 4:
        console.log('summar');
        break
    case 9:
        console.log('Rainy');
        break
    
    default:
        console.log('Invalid month')
}




for(i=1; i<=10; i++){
    console.log(7 * i);
}

console.log('------------------------------------------')

for(i=1; i<=10; i++){
    console.log(7 * i);
    if(i == 5){
        break
    }
}

console.log('------------------------------------------')

for(let i = 1; i<=10; i++){
    if(i == 5){
        continue
    }
    console.log(7 * i)
    
}

console.log('------While loop-----')

z = 1

while(z<=10) {
    console.log(7 * z)
    z = z+1
}

console.log('------do While loop-----')
let x

do{
    console.log('hello')
}while (x <= 100)

console.log(Math.random());

console.log(Math.floor(Math.random()* 10));

console.log(Math.floor(Math.random()* 100 + 1));