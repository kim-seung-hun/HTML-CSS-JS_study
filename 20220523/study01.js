// let message = "Hello";
// let age = "29";
// let num = "1";

// console.log(num);

// 1a; 변수명은 숫자로 시작X
// my-Name; 특수문자X
// apple , Apple; 대소문자 구문

//const COLOR_RED = "F00";
//const COLOR_GREEN = "#F0";

// 변수명은 규칙에 맞게 구체적으로 작성




// 이항산술연산자 : + , - , * , / , %(나머지)
// 단항산술연산자 : ++ , -- , 

// alert(2**2); -> 4 >> 거듭제곱 


// 5*4 -> 20 >> 산술연산자
// "My name is" + "KIM" -> MY name is KIM >> 문자열을 연결
// const color = "red" -> red;

let x = 1;
x++; // x = x+1 >> 1씩 증가 시켜줌
//console.log("++후 x의 값은 : ?" , x);

x--; // x = x-1; >> 1씩 감소 시켜줌
console.log("--후 x의 값은 : ?" , x);

let number = 5;
let result;

//선할당후 후증가
result = number++;
console.log(result , number);
//선증가후 후할당
result = ++number;
console.log(result , number);
//선할당 후감소
result = number--;
console.log(result , number);
//선감소후 후할당
result = --number;
console.log(result , number);

/*
할당연산자
 = >> x = 5
 += >> x += 5 , x = x+5
 -= >> x -= 5 , x = x-5
 *= >> x *= 5 , x = x*5
 /= >> x /= 5 , x = x/5
 %= >> x %= 5 , x = x%5
 */

 let num = 10;
 num+=5; // num = num + 5
 console.log("+= 연산자" , num);
 num-=5; // num = num = 5
 console.log("-= 연산자" , num);

 /*
 비교연산자
 
 ==           a == b     a와 b가 값이 같다
 ===          a === b    a와 b의 값과 타입이 같다(엄격한 검사)
 !=           a != b     a와 b는 값이 다르다
 !==          a !== b    a와 b는 값과 타입이 다르다(엄격한 검사)

 */

 // 동등비교에서 == 는 예상치 못한 경과값을 불러올수 있으므로 === 를 써주는 것이 좋다.
 console.log(5==5); // true
 console.log(5=='5'); //암묵적인 타입변환으로 인해 결과값이 true
 console.log('0'==''); // false 
 console.log(0==''); // true
/////////////////////////////////////////
console.log(5==='5') // false

console.log(5!=8); // true
console.log(5!=5); // false
console.log(5!='5'); // false
console.log(5!=='5'); // true

/*
대소비교연산자

>         a > b      a가 b보다 크다
<         a > b      a가 b보다 작다
>=        a >= b     a가 b보다 크거나 같다
<=        a <= b     a가 b보다 작거나 같다

*/

console.log(5>0);
console.log(5>5);
console.log(5>=5);
console.log(5<=5);

// 보통 조건문에 많이 쓰임 >> 만약에 이러이러한 조건이 맞다면

// const a = 1;
// const b = 2;
// if(a<b){} // true
//     // 여기를 실행해라


//삼항연산자
let z = 10;
let res = z % 2 ? '홀수' : '짝수'; // ? : 질문
                // true     false

console.log(res);



/*
논리연산자

||      논리합(OR)        a || b -> 둘 중 하나라도 true 면 true
&&      논리곱(AND)       a && b -> 둘 다 true 여야 true
!       부정(NOT)         a ! b  -> 반대 

*/

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log(!false);
