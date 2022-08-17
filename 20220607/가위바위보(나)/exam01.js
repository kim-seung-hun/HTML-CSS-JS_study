//가위바위보
//start 버튼 click
//게임을 한번 돌려보기

//가위바위보에서 
//start 버튼으로 게임 한번 시작
//버튼 3개 가위바위보



// let user = Math.floor(Math.random()*10);
let com = Math.floor(Math.random()*10);

 //user 낼것



start.onclick = function(){

    //user 낼것

    gawi.onclick = function(){
        user = "가위";
        console.log("user : 가위");
    }
    
    bawi.onclick = function(){
        user = "바위";
        console.log("user : 바위");
    }
    
    bo.onclick = function(){
        user = "보";
        console.log("user : 보");
    }   

//com 낼것
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

//승부
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
}
