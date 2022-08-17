//콜백함수 사용해서
//우리반 네명 이름 정해서
//하나 전역변수 하나 지역변수로 만들어보기

let myName = "승훈";

function friend(friendly) {
    let friend1 = "석";
    let friend2 = "하진";
    let friend3 = "병현";
    
    friendly(friend1,friend2,friend3);
}

function callName(f1,f2,f3) {
    console.log(myName + "은 " + f1 + "과 " + f2 + "과 " + f3 + "과 친하다");
}

friend(callName);
