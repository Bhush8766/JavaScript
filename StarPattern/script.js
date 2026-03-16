let n = 5;

let square="";
for(let i=0;i<n;i++){
for(let j=0;j<n;j++){
square+="* ";
}
square+="\n";
}
document.getElementById("square").innerText=square;


let triangle="";
for(let i=1;i<=n;i++){
for(let j=0;j<i;j++){
triangle+="* ";
}
triangle+="\n";
}
document.getElementById("triangle").innerText=triangle;



let inverted="";
for(let i=n;i>=1;i--){
for(let j=0;j<i;j++){
inverted+="* ";
}
inverted+="\n";
}
document.getElementById("inverted").innerText=inverted;


let pyramid="";
for(let i=1;i<=n;i++){
pyramid+=" ".repeat(n-i);
pyramid+="*".repeat(2*i-1);
pyramid+="\n";
}
document.getElementById("pyramid").innerText=pyramid;


let diamond="";
for(let i=1;i<=n;i++){
diamond+=" ".repeat(n-i);
diamond+="*".repeat(2*i-1);
diamond+="\n";
}

for(let i=n-1;i>=1;i--){
diamond+=" ".repeat(n-i);
diamond+="*".repeat(2*i-1);
diamond+="\n";
}
document.getElementById("diamond").innerText=diamond;


let number="";
for(let i=1;i<=n;i++){
for(let j=1;j<=i;j++){
number+=i+" ";
}
number+="\n";
}
document.getElementById("number").innerText=number;


let pascal="";
for(let i=0;i<n;i++){
let num=1;
for(let j=0;j<=i;j++){
pascal+=num+" ";
num=num*(i-j)/(j+1);
}
pascal+="\n";
}
document.getElementById("pascal").innerText=pascal;


let hollow="";
for(let i=0;i<n;i++){
for(let j=0;j<n;j++){
if(i==0||i==n-1||j==0||j==n-1)
hollow+="* ";
else
hollow+="  ";
}
hollow+="\n";
}
document.getElementById("hollow").innerText=hollow;


let hourglass="";
for(let i=n;i>=1;i--){
hourglass+=" ".repeat(n-i);
hourglass+="* ".repeat(i);
hourglass+="\n";
}

for(let i=2;i<=n;i++){
hourglass+=" ".repeat(n-i);
hourglass+="* ".repeat(i);
hourglass+="\n";
}
document.getElementById("hourglass").innerText=hourglass;


let zigzag="";
let cols=9;

for(let i=0;i<3;i++){
for(let j=0;j<cols;j++){
if((i+j)%4==0||(i==1&&j%4==0))
zigzag+="* ";
else
zigzag+="  ";
}
zigzag+="\n";
}

document.getElementById("zigzag").innerText=zigzag;