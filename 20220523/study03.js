
// // // key값과 value값을 비교
// // switch (표현식) {
// //     case 표현식1:      //if
// //         break;        
// //     case 표현식2:      //else if
// //         break;   

// //     default:
// //         break;
// // }

// // const a = 1;
// // switch (a) {
// //     case 1:
// //         console.log("나는 스위치문이다.");
// //         break;

// //     default: 
// //         break;
// // }


// //내려오다 break를 만나면 대괄호를 빠져나옴
// let input = Number(prompt("숫자입력"));
// const COMPARE_NUM = 1;
// const COMPARE_NUM1 = 2;
// switch (input) {
//     case COMPARE_NUM:
//         console.log("1 번째 케이스 실행");
//         console.log("내가 입력한 숫자 :",input);
//         break;
//     case COMPARE_NUM1:
//         console.log("2 번째 케이스 실행");
//         console.log("내가 입력한 숫자 :",input);
//         break; 
//     default:
//         console.log("디폴트 실행");
//         break;
// }

let randomNumber = Math.random(); //0~1사이에 난수 발생
console.log(randomNumber);

let rand1 = Math.floor(Math.random()); //floor : 소수점 첫번째 자리를 버리고 정수 출력
console.log(rand1);

let rand2 = Math.floor(Math.random()*10); 
console.log(rand2);
