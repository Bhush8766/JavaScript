//Datatypes in js
//1. string 
// 'str' 
// "str" 

// `
// multiline str
// `
str1 = 'Wisdom Sprouts'

console.log(typeof(str1), 'typeof of str1')


//2. number 
// 0-9, 4567, 987654323
age = 20
console.log('typeOf of age',typeof(age) )



// 3.BigInt

n1 = 9876543987654987658765n

// 4. Boolean 

isLogin = true
console.log(typeof(isLogin))

// 5. undefined 

var name1

// console.log("******",name1)

// 6. null

name1 = null

console.log("******",name1)

// 7. symbol

signOne = Symbol('TOM')

signTwo = Symbol('TOM')

// 8. Object

// array object function 
student = {
    name:'Tom',
    std:10,
    sub:['math','eng','science']
}
console.log("type of student",typeof(student))

// var let const 

// var globally used (hoisting); having function scope redeclare reassign 

// let                         block scope ; not redeclare. can reassign 
// const                       block scope ; not redeclare ,not reassign

var age 
 age = 20

age =30



//Types of Operators 

//1. Arithmetic Operators
// a+b = c 
// a-b = c 
// a*b = c 
// a/b = c
// a%b = c(reminder)
// a*a. a**2. a**3 = c

//2.  Comparison Operators

// 5 == 2   
// 5>2
// 5>=2
// 5<2
// 5<=2
// 5!=2

a = 5 
b = '5'
if(a == b){
    console.log("5 and '5' are same")
} 

// to check value with data type use === 


if(a===b){
    console.log("5 and '5' are same")
}
if(a!==b){
    console.log("5 and '5' are not same")
}

// 3. Logical Operators
// and or not 
// &&.  || !

p = 7;
q = 8;
// 0  && 0            0
// 0  && 1            0
// 1  && 0            0
// 1  && 1            1

if(p==7 &&  q==8){

}



// 0 || 0      0
// 0 || 1      1
// 1 || 0      1
// 1 || 1      1



// ! isLoggedIn

// 4. Assignment Operators

// z = 9
// z+=3  z = z+3 
// z-+2  z = z-2 
// z*=4 z = z*4
// z/=3 z = z/3

// z++   z= z+1
// z--    z=z-1
// ++z 
// --z


// 5. Operator Precedence

45-76+4*5(3+5)+23/5