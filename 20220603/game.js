//컴퓨터 스코어
let comScore = 0;
//플레이어 스코어
let userScore = 0;
//서로 번갈아가면서 실행할수 있는 변수
let turn = false;

//게임 횟수
let gamecount = 10;




function usershoot(){
    //turn이 true면 return실행
    if(turn) return;
    let shootTpye = Math.random() < 0.5 ? 2 : 3;
    if(shootTpye === 2) {
        if(Math.random() < 0.5) {
            console.log("user : 2점 슛 성공");
            userScoreUpdate(shootTpye);
        }
        else {
            console.log("user : 2점 슛 실패");
        }
    }
    else {
        if(Math.random() < 0.33) {
            console.log("user : 3점 슛 성공");
            userScoreUpdate(shootTpye);
        }
        else {
            console.log("user : 3점 슛 실패")
        }
    }
    //다 동작 후 turn을 true로 만듬
    turn = true;
}

function comshoot(){
    //turn이 false면 return 실행
    if(!turn) return;
    let shootTpye = Math.random() < 0.5 ? 2 : 3;
    if(shootTpye === 2) {
        if(Math.random() < 0.5) {
            console.log("com : 2점 슛 성공");
            comScoreUpdate(shootTpye);
        }
        else {
            console.log("com : 2점 슛 실패");
        }
    }
    else {
        if(Math.random() < 0.33) {
            console.log("com : 3점 슛 성공");
            comScoreUpdate(shootTpye);
        }
        else {
            console.log("com : 3점 슛 실패")
        }
    }
    turn = false;
}

function userScoreUpdate(addScore){
    //userScore에 addScorer값을 증가시킨다
    userScore += addScore;
    console.log(userScore);
    document.querySelector('.player-score').innerHTML = userScore;
}

function comScoreUpdate(addScore){
    comScore += addScore;
    console.log(comScore);
    document.querySelector('.computer-score').innerHTML = comScore;
}


// document.querySelector("#user").addEventListener()
// document.querySelector("#com")
//.addEventListener() 이벤트함수 설정
//document.querySelector("요소의 클래스나 아이디 아니면 어트리뷰트 선택자") 
//id는 고유 하나만 존재해야함

//.addEventListener 첫번째 매개변수는 이벤트 타입을 문자열로, 두번째 매개변수는 이벤트 작동시 실행 함수
user.addEventListener("click",function(){
    //user를 click 하면 실행되는 곳
    usershoot();
})

com.addEventListener("click",function(){
    //user를 click 하면 실행되는 곳
    comshoot();
})