/*
가위바위보 게임
유저랑 컴퓨터랑 하기
유저는 가위,바위,보 셋중 하나를 낸다
컴퓨터도 가위,바위,보 셋중 하나를 낸다
랜덤하게
경과에 따라 무승부.패배,승리를 표시한다.
*/

let user = prompt("무엇을 내시겠습니까?");
console.log("user :",user);

let com = Math.floor(Math.random()*10);

if(com>=0 && com<=3)
{
    com = "가위";
    console.log("com : 가위");
}
else if(com>=4 && com<=6)
{
    com = "바위";
    console.log("com : 바위");
}
else if(com>=7 && com<=9)
{
    com = "보";
    console.log("com : 보");
}

if(user===com)
{
    console.log("무승부");
}
else if
(user==="가위" && com==="바위" || user==="바위" && com==="보" || user==="보" && com==="가위")
{
   console.log("com 승리")
}
    
else
{
   console.log("user 승리")
}



// com==="가위" && user==="바위" || com==="바위" && user==="보" || com==="보" && user==="가위"