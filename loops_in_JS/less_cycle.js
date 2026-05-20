// //task1
// for(let i = 0; i < 11; i++){
//     console.log(i);
// }

// //task2
// let num = prompt("Enter a number: ");
// for(let i = 1; i <= num; i++){
//     if (i % 2 !== 0) continue;
//     alert(i)
// }

// //task3
// let num = prompt("Enter a number: ");
// let sum = 0
// for(let i = 1; i <= num; i++){
//     sum += i
// }
// alert(sum)

// // task4
// let num = prompt("Enter a number: ");
// for(let i = num; 1 <= i; i--){
//     alert(i)
// }

// // task5
// let num = prompt("Enter a number: ");
// for(let i = 1; i <= num; i++){
//     alert(`${num} x ${i} = ${num*i}`)
// }

// //task6
// let right_password = 'admin123';
// let password;
// do{
//     password = prompt("Vvedy parol:");
//     if (password !== right_password){
//         alert("Wrong password");
//     }
// }while (password !== right_password)
// alert("Right password");

// //task7
// let right_password = 'admin123';
// let password;
// let tries = 0;
// do{
//     tries += 1;
//     if (tries >= 4) {
//         alert("Dostup zablokovano");
//         break;
//     }
//     password = prompt("Vvedy parol:");
//     if (password !== right_password){
//         alert("Wrong password");
//     }
//         else
//         {
//             alert("Dostup dozvoleno");
//             break;
//         }
// }while (password !== right_password)

// //task8
// for (let i = 1; i <= 20; i++){
//     if (i % 2 === 0) continue;
//     console.log(i);
// }

// // task9
// let num = prompt("Enter a number: ");
// let count = 0;
// for (let i = 0; i < num.length; i++){
//     count++;
// }
// alert(count);

// // task10
// let hidden = "67";
// let num;
// do{
//     num = prompt("Enter a number: ");
//     if (num < hidden){
//         alert("Bilshe");
//     }else if (num > hidden){
//         alert("Menshe");
//     }
// }while (num !== hidden);
// alert("Vy vhadaly");
