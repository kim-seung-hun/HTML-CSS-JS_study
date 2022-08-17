// // 변수(variable) : 데이터를 저장하는 공간

// // 키워드 변수
// var num = 1;
// console.log(num);

// var str = "나는 무엇일까요?";
// console.log(str);

// // 변수를 사용하려면 반드시 선언을 해야한다.

// var num1; //변수 선언
// num1 = 10; //초기화 : 어떠한 값을 대입
// console.log("변수 num1에 들어간 녀석은? : ", num1);

// var num2 = 20; //변수 선언과 동시에 초기화

// var num3 = 100;
// num3 = 200;
// console.log(num3);

// var score; //선언
// score = 100; //할당
// console.log(score);
// score = 20; //같은 변수에 재할당
// console.log(score);

// var score = 100000; //재선언 , 재할당
// console.log(score);

// //var : 재선언 , 재할당 가능
// //let : 재할당은 가능하지만 재선언 불가
// //const : 재할당 , 재선언 불가

// let number = 5;
// console.log("let 으로 선언한 녀석", number);
// number = 10;
// console.log("let 으로 선언한 녀석", number);
// // let number = 1; 재선언 불가

// const maxNumber = 1;
// console.log("const 키워드로 선언한 녀석", maxNumber);
// // maxNumber = 2; //재할당 불가
// //console.log("const 키워드로 선언한 녀석",maxNumber);
// // const maxNumber = 10; // 재선언 불가

// const a = 1;
// const b = 2;
// const c = a + b;
// console.log(c);

// //변수이름을 지을때 주의사항
// //누가봐도 알 수 있게 지을것.
// //한글쓰지 말것..
// //풀네이밍으로 쓸것.
// //자바스크립트 코딩 컨벤셔 읽어보기 (무슨 뜻이지 명확히 알 수 있게 요약)

// /*
// 데이터타입

// - 원시타입 | 숫자타입(number) : 숫자,정수,실수 구분없이 하나의 숫자타입만 존재
//           | 문자열타입(string) : 문자열
//           | 불리언타입(boolean) : 참(true과 거짓(false)
//           | undefined : var 키워드로 선언된 변수의 암묵적으로 할당된 값
//           | null : 값이 없다는 것을 의도적으로 명시할떄 사용
//           | 심벌타입(symbol) : ES6에서 추가된 7번째 타입

// - 객체 타입 | 객체,함수,배열 등등 ....
// */

// const inteager = 10; //정수
// const double = 10.12; //실수
// const negative = -20; //음의 정수

// console.log(typeof inteager);
// console.log(typeof double);
// console.log(typeof negative);

// const binary = 0b01000001; //2진수
// const hex = 0x41; //16진수
// console.log(binary);
// console.log(hex);


// console.log(1 === 1.0);
// console.log(3/2);

// const string = "문자열";
// const string1 = '문자열1';
// console.log(string)
// console.log(string1)



// // let d = 10;
// // alert(d);

// // let value = prompt("숫자입력해보기");
// // console.log("value의 값 : " ,value);

// /*
// 사직연산 : +,-,/,*, %:몫은 버리고 나머지(모듈러 연산)
// */

// const number1 = 5;
// const number2 = 3;

// const result = number1+number2;
// const result1 = number1-number2;
// const result2 = number1*number2;
// const result3 = number1/number2;

// console.log(result);
// console.log(result1);
// console.log(result2);
// console.log(result3);
// //prompt : 문자열로 받아들임


// // let input1 = pormpt("첫번째 숫자 입력");
// // let input2 = prompt("두번째 숫자 입력");

// // let inputTypeCasing = Number(input1); //입력한 문자열을 숫자로 형변환
// // let inputTypeCasing1 = Number(input2);

// // console.log(input1+input2); //결과는 문자열로..
// // console.log(inputTypeCasing+inputTypeCasing1);//위에 형변환에 의해 원하는 결과가 나온다.

// /*
// 지금 해볼것,
// 입력을 4개의 정수 받는다.(과목 4개 국영수과)
// 입력받은 4개의 총 합을 구한다.
// 평균값을 출력해라
// */

let ko = prompt("국어점수");
let math = prompt("수학점수");
let en = prompt("영어점수");
let si = prompt("과학점수");

let inputTypeCasing1 = Number(ko);
let inputTypeCasing2 = Number(math);
let inputTypeCasing3 = Number(en);
let inputTypeCasing4 = Number(si);

console.log(inputTypeCasing1+inputTypeCasing2+inputTypeCasing3+inputTypeCasing4);
console.log((inputTypeCasing1+inputTypeCasing2+inputTypeCasing3+inputTypeCasing4)/4);
