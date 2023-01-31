
// function s() {
//     let a='hello';
//     if(a=='hello'){
//       let b= 'wolrd'
//       console.log(a+''+b);
//     }
// console.log(a+''+b);
// }
// s();
// var a=5;
// for (var a=0;a<5;a++){
// console.log('hello');
// }
// console.log(a);
// const number = prompt("enter a number: ");
// if(number > 0){
//     console.log("the number is positive");
// }console.log("if the statement is easy");

// const n=5;
// for (let i =1;i<=n;i++){
//     console.log('js');
// }
//Spread Operator

const arrValue =['my','name','is','siri'];
 console.log(arrValue);
 console.log(...arrValue);

//Copy Array Using Spread Operator

 //const arr1 = ['one','two'];
 //const arr2 = [...arr1,'three','four','five']
 console.log(arr2);
//Clone Array Using Spread Operator
 let arr1=[1,2,3];
 let arr2=arr1;
  console.log(arr1);
  console.log(arr2);
  arr1.push(4);
  console.log(arr1);
 console.log(arr2);

//spread operator with object

const obj1 = {a:1,b:2};
const obj2 = {c:3};
const obj3 = {...obj1,...obj2};
console.log(obj3);
//Rest Parameter
let func = function(...args) {
    console.log(args);
}
func(3); 
func(8, 15, 60);