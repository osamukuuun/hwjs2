// let number = +prompt("Введіть число : ");
// if (number % 5 == 0 || 15){
//     alert("Число " + number + "гарне ");
// }

let number1 = Number(prompt("Введіть число : "));
let number2 = Number(prompt("Введіть число2 : "));
let number3 = Number(prompt("Введіть число3 : "));

console.log("Введене число :" + number1);
console.log("Введене число :" + number2);
console.log("Введене число :" + number3);

let sum = 0;
if (number1 < 0){
    sum += number1;
}
if (number2< 0){
    sum += number2; 
}
if (number3 < 0){
    sum += number3;    
}
console.log("Сума від'ємних чисел : " + sum);
