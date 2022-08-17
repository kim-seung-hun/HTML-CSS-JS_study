//정규표현식
//문자 검색과 교체에 사용되는 패턴을 제공한다.
//자바스크립트에서 RegExp 객체의 문자 함수를 조합해 정규 사용할수 있다.

//box변수에 box 태그르를 선택자로 담아놓고
let box = document.querySelector('.box');

//box의 innerHTML 안녕하세요 대입
// box.innerHTML = "안녕하세요";

// let reg = new RegExp('안녕');

//RegExp는 두개의 매개변수 sting | RegExp , flag? : string
//앞은 찾는 문자
//두번째는 플래그
//플래그는 정규표현식에 영향을 주는 옵션

//플래그의 종료에는

//i : 대소문자 구분 없이 구별할수 있다.(A , a)

//g : 패턴과 일치하는 모든 것을 찾는다.(g가 없으면 일치하는 것에서 첫번째 것만 가져온다.)

//m : 다중 행모드 >> 줄이 내려져 있어도 찾아온다. 백틱 같은거로 행차이가 있어도

// let string = "안녕하세요";
// //문자열 함수 match('찾는 문자열' , flag)
// // box.innerHTML = string.match("안녕");

// let string2 = "하하하하하하하하하하";
// // 슽래시(/)는 자바스크립트에서 정규표현식을 생성하고 있다는것을 알려줌
// // 문자열에서 따옴표를 쓰는것과 같다

// // g플래그 사용
// // g는 패턴과 일치하는 모든 문자를 찾는데 콤마로 구분
// // box.innerHTML = string2.match(/하하/g);

// // 정규표현식을 사용하는 이유
// // 이메일 형식인지 체크하는 정규식


// i 플래그 사용
// i는 대소문자 구별없이 문자를 찾는다.
let str = "나는 abc abc abC Abc나는 문자열";

let str2 = str.match(/aBc/i);

//찾은 문자열을 배열의 형태로 담아둔다.
console.log(str2);
console.log(str2[0]);
console.log(str2.length);

box.innerHTML = str2;


// // //나는 웹개발자 본인 이름

// let name = "나는 웹개발자 승훈";

// let name2 = name.match(/나는/) + name.match(/웹개발자/) + name.match(/승훈/);

// box.innerHTML = name2;

// //해당 문자열을 찾아서 배꿔주는 편리한 기능 (replace);
// //replace(정규식 생성,찾은 문자열을 바꿔줄 문자)
// let name3 = name;

// name3 = name3.replace(/승훈/i , "명석");

// box.innerHTML = name3;

// //replace의 두번째 매개변수에 특수문자를 입력하면 특수한 방법으로 문자열을 교체할수 있다.

// //특수한 방법에는
// // $& 패턴과 일치하는 부분의 문자열
// // $` 일치하기전의 문자열의 일부를 대입
// // $' 일치한 후 문자열의 일부를 대입

// let name4 = box.innerHTML;
// box.innerHTML = name4.replace(/명석/,"$' 집에 가고싶다");


//실습
// 1. input을 2개 만들고 하고싶을 일, 이름 (입력받는거는 버튼으로 처리) 총 버튼 2개
// 2. 두개가 box 내용이나 콘솔에 나오고
// 3. 교체버튼을 누르면 바뀌기
// 4. 이름 뒤로 하고싶은일 대입 (두개의 위치를 바꿔보기)



