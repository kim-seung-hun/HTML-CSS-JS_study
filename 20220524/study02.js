/*
function(함수) 란?

코드 재사용성이 높다.
코드 유지보수가 좋다.
함수는 정의를 통해서 생성한다.

 ex) f(x,y) = x + y

 */

//  let a;
//  let b;
//  let result = a+b;

//  console.log(result);

//  //      이름,매개변수
//  function sum(a,b)
//  {//함수정의

//      return a+b; // a와 b를 더한 결과를 리턴한다.(변환한다 , 내뱉는다)
//  }

// let result = sum(2,5);
// console.log(result);

// function print(){
//     console.log("함수호출");
// }
// print();//함수호출

// function sum1(a,b)
// {
//     console.log(arguments.length);
//     return a+b;
// }
// console.log(sum1(1,2,3,4,5)); //인자가 초과되어도 무시한다.


// 함수의 정의 방식에는 총 4가지가 있다.

// 1.함수선언문
// function add(x,y)
// {
//     return x+y
// }

// 2.함수표현식
// 함수표현을 변수에 담는다.
//     변수     함수
// let add = function(x,y) -----------> 익명함수
// {
//     return x+y;
// }
// let add1 = function add(a,b) ------> 기명함수
// {
//     return a+b;
// }

// 3.Function 생성자 함수
// let add = Runction('x','y','return a+b');

// ***4.화살표함수(ES6 arrow Function)
// let add=(x,y)->x+y;


// var , let , const

// console.log(a);
// var a = 1; //암무적으로 console 위로 끌어올린다.


// 함수선언문은 hoisting 대상O
// foo();
// function foo(){
//     console.log("hello world");
// }

// 함수표현식은 hoisting 대상X
// foo2();
// let foo2 = function(){
//     console.log("나는 푸우우우~2");
// }

// 전역변수 , 지역변수

// var a = 1;
// for (let i=0; i<2; i++) {
//     var d = "var로 선언된 d";
//    for (let k=0; k<2; k++) {
//       console.log(d);

//       if(true)
//       {
//         //   d=2;
//           let abc = 1;
//           const zxc = 2;
//           var asd = 3;
//       }
//     //   console.log(abc);
//     //   console.log(d);
//     //   console.log(zxc);
//       console.log(asd);
      
//    }
    
// }