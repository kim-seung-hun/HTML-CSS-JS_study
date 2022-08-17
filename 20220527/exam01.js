//카드게임 만들기 (월남뽕)
//52장의 카드
//카드 2장을 보여줌
//모양은 상관없이 숫자가 2장의 카드 숫자 범위 안에 들어와야함
//다이아 클로바 하트 스페이드 (각 13장)

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let pattern = ["♣", "♦", "♠", "♥"];
let deck = [];
let two_pick = [];
let hidden_pick = [];
let user_money = 100000;

//deck 52장 생성
for (let i = 0; i < 52; i++) {
  let shuffle =
    pattern[Math.floor(Math.random() * pattern.length)] +
    number[Math.floor(Math.random() * number.length)];
  if (deck.indexOf(shuffle) == -1) {
    deck.push(shuffle);
  } else if (deck.indexOf(shuffle) >= 0) {
    i--;
  }
}
console.log(deck);

//게임 start

alert("게임을 시작하겠습니다.");

//게임을 몇판 반복할지
for (let play_game = 0; play_game < 1; play_game++) {
    

    //두장의 랜덤 카드 뽑기
  for (let i = 0; i < 2; i++) {
    ran_num = Math.floor(Math.random() * deck.length);
    if (two_pick.indexOf(deck[ran_num]) == -1) {
      two_pick.push(deck[ran_num]);
      //뽑은 두장의 랜덤카드를 deck에서 제거
      deck.splice(deck.indexOf(two_pick),1);
    } else if (two_pick.indexOf(deck[ran_num]) >= 0) {
      i--;
    }
  }
  //뽑은 두장의 랜덤카드의 대소를 비교
  two_pick.sort(function(a,b) {
    if (parseInt(a.substr(1, two_pick.length)) > parseInt(b.substr(1, two_pick.length)))
    {   
      return 1;
    }
    else if(parseInt(a.substr(1, two_pick.length)) < parseInt(b.substr(1, two_pick.length)))
    {
      return -1;
    }
    else { 
      return 0; 
    }
  });
  console.log(two_pick);

  alert(`com이 뽑은 두장의 카드는 ${two_pick[0]} 와 ${two_pick[1]} 입니다.`)
  let gamble = Number(prompt("얼마를 베팅하시겠습니까?"));

  //hidden card 1장 뽑기
  let hidden = deck[Math.floor(Math.random() * deck.length)];
  hidden_pick.push(hidden);
  deck.splice(deck.indexOf(hidden_pick),1);

  console.log(hidden_pick);

  alert(`당신이 뽑은 카드는 ${hidden_pick} 입니다.`)

  //승리
  if(parseInt(two_pick[0].substr(1,two_pick.length)) <= parseInt(hidden_pick[0].substr(1,hidden_pick.length)) && parseInt(two_pick[1].substr(1,two_pick.length)) >= parseInt(hidden_pick[0].substr(1,hidden_pick.length))) {
      user_money = user_money + gamble*2;
      alert("user가 승리 했습니다." + "남은 user money : " + user_money);
  }
  //패배
  else {
    user_money = user_money - gamble*2;
    alert("user가 패배 했습니다." + "남은 user money : " + user_money);
  }

  hidden_pick = [];
  two_pick = [];

  //아래 같은 조건에서 게임 종료
 if(play_game = 0 || user_money <= 0) {
     break;
 }
 
 }
