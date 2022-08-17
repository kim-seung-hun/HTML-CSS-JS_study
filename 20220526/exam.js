/*

<고차함수>

1. 배열 method 정리 : 

every : 배열의 모든 요소가 제공한 함수로 구현된 테스트를 통과하는지를 테스트
var arr =[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
var isEven = function( value ) {

  // value가 2의 배수이면 true를 반환한다.
  return value % 2 === 0;
};
console.log( arr.every( isEven ) ); // false  모든 요소가 true이면 true를 return 하고 그렇지 않으면 false

some : 지정된 함수의 결과가 true일 때까지 배열의 각 원소를 반복
var arr =[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
var isEven = function( value ) {

  // value가 2의 배수이면 true를 반환한다.
  return value % 2 === 0;
};
console.log( arr.some( isEven ) ); // true  하나라도 true이면 true를 return

filter : 지정된 함수의 결과 값을 true로 만드는 원소들로만 구성된 별도의 배열을 반환한다.
var arr =[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
var isEven = function( value ) {
  return value % 2 === 0;
};
var newArr = arr.filter( isEven );
console.log( newArr ); // [ 2, 4, 6, 8, 10 ]

reduce : 누산기(accumulator) 및 배열의 각 값(좌에서 우로)에 대해 (누산된) 한 값으로 줄도록 함수를 적용
var arr =[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
var value = arr.reduce( function( previousValue, currentValue, index ) {
  return previousValue + currentValue;
});
console.log( value ); // 55

find : 배열의 요소를 순차적으로 순회하면서 조건에 일치하는 요소의 값을 즉시 반환

finddex : 배열의 요소를 순차적으로 순회하면서 조건에 일치하는 요소의 인덱스를 반환







2. 하노이탑 (재귀함수의 대표)

*/

/*
실습과제

숫자야구게임 만들기
1. 컴퓨터는 임의의 숫자 3개 낸다 (0~9)
2. 유저는 아무거나 0~9

숫자도 없고 자리도 맞지 않음
123
789
out
===========================
숫자는 맞지만 자리가 틀림
456
579
1ball
===========================
숫자2개 맞고 자리 동일
123
124
2strike
===========================
숫자1개 맞고 1개 자리 동일
147
457
1s1b
===========================

*/


let com = []; //com 배열 선언하여 숫자 3개 문자로 뽑기
for (let i = 0; i < 3; i++) {
  com_num = Math.floor(Math.random() * 10);
  if(com.indexOf(com_num)===-1) {
      com.push(com_num);
  }
  else if(com.indexOf(com_num)>=0) {
      i--;
  }
}

//count , strike , ball 숫자 셀 변수 선언
let count = 0;
let strike = 0;
let ball = 0 ;

//user 숫자 입력
while(count <= 10){
    let user_num = prompt("숫자3자리를 입력하시오" , "");
    let user = user_num.split('');
    if(user.length !== 3) {
      alert("숫자 3자리인지 확인해주세요");
      continue;
    }
// strkie , ball 숫자 세기 위한 초기화
 strike = 0;
 ball = 0;
 count++
// 숫자 비교
 for(let j = 0; j < 3; j++) {
    for(let k = 0; k < 3; k++) {
        if(com[j]==user[k]) {
            if(j===k) {
                strike++
            }
            else{
            ball++
            }
        break;
        }

    }
 }

if(strike===3) {
    console.log("홈런" + (count -1) + '번 만에 정답!');
    break;
}
else if(count>10) {
    console.log("시도횟수 초과되었습니다.")
    console.log("정답 : " , com.join(''));
}
else {
    console.log(user.join('') + ' : ' + strike + "strike " + ball + "ball ");
}
}