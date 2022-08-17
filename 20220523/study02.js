// 조건문


let number = 1;
let number1 = 2;
// // 만약에 조건이 true면
// if(조건)
// {
//     //여기를 실행해라 (스쿠프영역)
//     console.log(1);
// }

if(number<number1)
{
    console.log(1);
}

//////////////////////////////////////////////////

const age = 30;
const age1 = 20;

if(age<age1)
{
    console.log("if의 조건이 참이면 여기가 실행");
}
else if(age>age1)
{
    console.log("바로 위에 있는 if문이 거짓일때만 여기가 실핼"); //무조건 if문이 있어야 가능
}
else
{
    console.log("위 조건이 전부 아니면 여기가 실행"); //무조건 if문이 있어야 가능
}

// const isCheck = 조건
// if(조건)
// 조건이 복잡할 경우 위와 같은 형태로 자주 쓰임

let inputNum = Number(prompt("아무 숫자나 입력"));

if(inputNumber<10)
{
    console.log("if문 실행");
    console.log("내가 입력한 값" , inputNumber);
}
else if(inputNumber>10 || inputNumber<20)
{
    console.log("첫번째 else if 실행");
    console.log("내가 입력한 값 : ",inputNumber);
}
else if(inputNumber>10 && inputNumber<20)
{
    onsole.log("두번째 else if 실행");
    console.log("내가 입력한 값 : ",inputNumber);
}
else{
    console.log("else 실행");
}

// if문의 조건이 만족하더라도 아래 if문들을 전부다 검사하지만
// else if문은 조건이 만족하면 아래 else if문들 전부 건너 뛴다
