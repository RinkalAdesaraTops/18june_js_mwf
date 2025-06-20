// arithmetic opr -- +,-,*,/,%modulus,**,++,--
let a=25
let b=30
// document.write('<br>Addition is '+(a+b))
// document.write('<br>Minus is '+(a-b))
// document.write('<br>Multiplication is '+(a*b))
// document.write('<br>Divison is '+(b/a))
// document.write('<br>Modulus is '+(b%a)) //reminder
// let c = 5
// document.write('<br>Square is '+(c**3))
//++ increment - +1
let k=10
document.write('<br> k is '+k)
b=k++ //11 -postfix
document.write('<br> k is '+k) //11
document.write('<br> b is '+b) //10 - old value
b=++k //12 - prefix
document.write('<br> k is '+k) //12
document.write('<br> b is '+b) //12 - new value
//-- decrement -1