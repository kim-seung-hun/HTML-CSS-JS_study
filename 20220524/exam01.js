/*
1. 전역변수와 지역변수에 대해 정리
2. min(a,b) 함수를 만들기 (a와 b 중 작은 값을 반환)
3. pow(x,n)함수 만들기(x의 n제곱을 반환)
4. 가위바위보게임 개선하기
- 10판
- 유저는 소지금 만원
- 컴퓨터도 소지금 만원
- 유저가 이겼으면 내가 배팅한 금액에 x2 더함
- 무승부면 아무것도 배팅 금액 차감
- 유저가 지면 배팅한 금액에 x2 차감
- 종료조건은 10판을 다 돌았거나 , 둥 줄 하나라도 소진했을 경우
- 구경꾼이 있다. 랜덤확률로 내가 배팅한 금액의 x1.5 기부한다.
*/

//user가 베팅할 금액
let bet = Number(prompt("얼마를 베팅하시겠습니까?", ""));

//user가 갖고 있는 돈
let user_money = 10000;
// com이 갖고 있는 돈
let com_money = 10000;
// people 에게 총 기부한 금액
let people_money = 0;

//user와 com 승부시 돈 계산에 필요한 변수 선언
let user_win = 0;
let user_lose = 0;
let draw = 0;
let com_win = 0;
let com_lose = 0;
let people = Math.floor(Math.random() * 10);

//user와 com의 승부시 돈 계산

//user가 이겼을경우
function set_user_win(user_money, bet) {
    user_money = user_money + 3 * bet - cheer(bet) / 2;
    return user_money;
}
//user가 졌을경우
function set_user_lose(user_money, bet) {
    user_money = user_money - 3 * bet - cheer(bet) / 2;
    return user_money;
}
//user가 비겼을경우
function set_user_draw(user_money, bet) {
    user_money = user_money - bet - cheer(bet) / 2;
    return user_money;
}
//com 이겼을경우
function set_com_win(com_money, bet) {
    com_money = com_money + 3 * bet - cheer(bet) / 2;
    return com_money;
}
//com이 졌을경우
function set_com_lose(com_money, bet) {
    com_money = com_money - 3 * bet - cheer(bet) / 2;
    return com_money;
}
//com이 비겼을경우
function set_com_draw(com_money, bet) {
    com_money = com_money - bet - cheer(bet) / 2;
    return com_money;
}
//people이 베팅할 확률
function cheer(bet) {
  if (people > 5) {
    people_money = bet * 1.5;
    return people_money;
  } else if (people <= 5) {
    people_money = 0;
    return people_money;
  }
}

//게임시작

for (i = 1; i <= 10; i++) {
  people = Math.floor(Math.random() * 10);

  //user 가위바위보
  let user = Math.floor(Math.random() * 10);
  if (user >= 0 && user <= 3) {
    user = "가위";
  } else if (user >= 4 && user <= 6) {
    user = "바위";
  } else if (user >= 7 && user <= 9) {
    user = "보";
  }
  //com 가위바위보
  let com = Math.floor(Math.random() * 10);
  if (com >= 0 && com <= 3) {
    com = "가위";
  } else if (com >= 4 && com <= 6) {
    com = "바위";
  } else if (com >= 7 && com <= 9) {
    com = "보";
  }
  //////////////////////////////////////////////////////////////////////////
  //무승부
  if (user === com) {
    user_money = set_user_draw(user_money, bet);
    com_money = set_com_draw(com_money, bet);
    people_money = cheer(bet);
    //console.log("무승부 기부금 : " + people_money);
    //console.log("무승부 기부금 확률 : " + people);
    draw++;
    console.log("무승부" + "  user :", user + "  com :", com);
  } 
  //com 승리
    else if (
    (user === "가위" && com === "바위") ||
    (user === "바위" && com === "보") ||
    (user === "보" && com === "가위")
  ) {
    com_money = set_com_win(com_money, bet);
    user_money = set_user_lose(user_money, bet);
    people_money = cheer(bet);
   // console.log("com 승리 기부금 : " + people_money);
    //console.log("com 승리 기부금 확률 : " + people);
    com_win++;
    console.log("com 승리" + "  user :", user + "  com :", com);
  } 
   // user 승리 
    else if (
    (com === "가위" && user === "바위") ||
    (com === "바위" && user === "보") ||
    (com === "보" && user === "가위")
  ) {
    user_money = set_user_win(user_money, bet);
    com_money = set_com_lose(com_money, bet);
    people_money = cheer(bet);
    //console.log("유저 승리 기부금 : " + people_money);
    //console.log("유저승리 기부금 확률 : " + people);
    user_win++;
    console.log("user 승리" + "  user :", user + "  com :", com);
  }

  if (user_money<=0 || com_money<=0) {
      break;
  } 
}
console.log("---------------------------------------");
console.log("user 승리 :", user_win + "  com 승리 :" , com_win + "  무승부 :" , draw);
console.log("---------------------------------------");
console.log("user money :", user_money + "  com money :" , com_money + "  poeple money :" , people_money);



// let a = prompt("a");
// let b = prompt("b");

// function min(a,b)
// {
//     if(a<b)
//     {return a;}
//     else
//     {return b;}
// }

// let result = min(a,b);
// console.log(result);

//////////////////////////////////////////////////////////

let x = prompt("x?");
let n = prompt("n?");

function pow(x,n)
{
    return x**n;
}
let result = pow(x,n);
console.log(result);

///////////////////////////////////////////////////////////

// let x = prompt("x?");
// let n = prompt("n?");

// function pow(x,n)
// {
//     let result = x;
//     for(i=1; i<n; i++)
//     {
//         result *= x;
//     }
//     return result;

// }
// console.log(pow(x,n));

//////////////////////////////////////////////////////////////
