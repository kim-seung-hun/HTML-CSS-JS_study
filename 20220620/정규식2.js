// // regexp의 test 함수
// // test함수는 일치하는 부분의 문자열이 있으면 true를 반환하고 틀리면 false
// // 주로 이메일 or 비밀번호 or 아이디 형식 검사에 쓰임

// btn.onclick = function(){
//     // input의 값을 val에 담고
//    let val = "test";
//    // 검사식
//    // 정규식 객체 생성 new RegExp(검사식 , 플래그);
//    // i는 대소문자 상관없이 찾는다.
//    let reg = new RegExp(val , "i");
//    // input value가 test가 맞는지 test() 함수로
//    //맞으면 true , 틀리면 false
//    console.log(reg.test(input.value));
// };

// let str = "this is true";
// let reg = /this/i;

// //match(정규식 객체) str문자를 검사한다.
// //문자열에 있는 함수
// //맞는 문자를 반환
// console.log(str.match(reg));

// //정규식의 test함수 사용
// //정규식에 있는 함수
// //식의 ture/false를 반환
// console.log(reg.test(str));


// //문자 클래스

// //문자 클래스는 특성 문자의 특별한 표현이다.
// let str2 = "aa2a3a4a5---a6a7a8a9";

// //모든 숫자를 찾음
// // /\d/ 숫자를 검사하는데 플로그 g를 붙여서 모든 숫자를 검사
// let reg2 = /\d/g;

// //배열의 형태로 반환됨
// console.log(str2.match(reg2));

// //join 함수는 배열의 요소 하나하나를 합쳐서 하나의 문자열로 반환
// //join(매개변수) 매개변수를 넣으면 값과 값 사이에 구분자를 바꿀수 있다.
// //매개변수 문자로 바꿔준다.
// let num = str2.match(reg2).join();
// //join에 매개변수를 문자열로 추가하면 구분점을 그 분자열로 바꿈
// let num2 = str2.match(reg2).join("");
// //str2.match(reg2) 배열을 하나의 문자열로 반환 >> join() 함수
// //구분점은 ,로
// console.log(num);
// console.log(num2);

// //문자클래스 종류
// //1. \d 모든숫자 : 0 ~ 9 까지의 숫자
// //2. \s 공백 : 줄바꿈이나 공백 기호
// //3. \w 문자 : 단어에 들어가는 숫자와 문자 _(언더바)
// // 라틴문자나 숫자 등 안되는 애들(키링 문자 , 힌디문자는 안됨)

//실습
//input 사용해서 문자랑 숫자를 섞어서 쓰는데
// 문자만 뽑아서 페이지에 보이거나 console에 보이기
// 구분점은 _언더바로



// ///////////////////////////////////////////////////////////
// btn.onclick = function(){
//     let val = input.value;
//     let reg = /\d/g;
//     let valArr = val.split("");
//     let numArr = val.match(reg);

//     for(i=0; i<valArr.length; i++) {
//         for(k=0; k<numArr.length; k++){
//             if(valArr[i] == numArr[k]){
//                 valArr.splice(i,1);
//             }
//         };
//     };
//     let result = valArr.join("_");
//     console.log(result);
// };

// ///////////////////////////////////////////////////////////////

// btn.onclick = function(){
//     let result = input.value.replace(/\d/g,"").match(/\w/g).join("_");
//     console.log(result);
// };

// //////////////////////////////////////////////////////////////////

// btn.onclick = function(){
//     let result = input.value.match(/\D/g).join("_");
//     console.log(result);
// }




//문자 클래스의 반대
// 반대 클래스

//1. \D : \d의 반대 >> 숫자가 아닌 것들
//2. \S : \s의 반대 >> 공백이 아닌 것들
//3. \W : \w의 반대 >> 단어,숫자가 아닌 것들

let str3 = "a1a4a5a1a5a12a1a56";
console.log(str3.replace(/\D/,""));
// replaceAll함수는 해당되는 전체 문자 변환
console.log(str3.replaceAll("a",""));
// /\D/g 숫자 아닌것들 전체
console.log(str3.replace(/\D/g,""));

// 특별한 문자 클래스

//.(점) : 줄바꿈 문자를 제외하고 모든 문자 (\n)
// 특수문자도 잡을 수 있고 문자 그냥 줄바꿈 제외 다 잡는다
console.log("-12345".match(/./));
console.log(" 12345".match(/./));
console.log("=12345".match(/./));

//문자 클래스 여러개 문자를 조건으로 검사
//조건식 해석 \w 첫글자 (문자나 숫자) \d (0~9까지 숫자) \s (공백포함) \w마지막 (문자나 숫자)
//이렇게 검사해서 맞으면 반환
console.log("ww z".match(/\w\d\s\w/));

//수량 {몇 개}
//숫자 갯수 3개 까지
console.log("123456789".match(/\d{3}/g));

//갯수 범위
//{최소갯수 , 최대범위}
console.log('123456'.match(/\d{2,3}/));

//{최소갯수 , } 최소 갯수는 3개 이상이어야 하고 길이는 상관없음
console.log("123456789".match(/\d{3,}/g));

//세트 및 범위
// {} 대괄호 안의 문자 또는 문자 클래스
// 임의의 문자를 검색한다

//세트 사용
//문자를 찾는데 A나 Z가 앞에 있고 BC가 붙은 문자
//gi 붙여서 모두 검색하고 대소문자 구분없이
console.log("ABC ZBC XBC".match(/[az]bc/gi));

//범위 사용
// [0-9A-F] : 0-9까지 숫자 또는 A-F까지 문자를 찾는다는 뜻
// [0-9]는 \d와 같다.
// [a-zA-Z0-9_]는 \w와 같다.
console.log("ABCDE".match(/A[0-9A-F][0-9A-F]/));

//범위 제외
// [^0-9]\D : 숫자를 제외한 모든 문자 재외
// [^\s] : 공백이 아닌 모든 문자 재외
//숫자와 문자를 제외해서 abc를 제외한 문자가 나온다
console.log("abc123._".match(/[^\sA-Z]/gi));
