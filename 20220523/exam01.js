/*
입력 4개 받는다 (점수)
평균값을 구한다
평균값이 70~79 C학점
평균값이 80~89 B학점
평균값이 90~100 A학점
70미만이다 낙제
*/

let kor = prompt("국어점수");
let math = prompt("수학점수");
let eng = prompt("영어점수");
let sci = prompt("과학점수");

let inputTypeCasing1 = Number(kor);
let inputTypeCasing2 = Number(math);
let inputTypeCasing3 = Number(eng);
let inputTypeCasing4 = Number(sci);

console.log((inputTypeCasing1+inputTypeCasing2+inputTypeCasing3+inputTypeCasing4)/4);

let avg = (inputTypeCasing1+inputTypeCasing2+inputTypeCasing3+inputTypeCasing4)/4;

if(avg>=70 && avg<=79)
{
    console.log("C학점");
}
else if(avg>=80 && avg<=89)
{
    console.log("B학점");
}
else if(avg>=90 && avg<=100)
{
    console.log("A학점");
}
else if(avg<70)
{
    console.log("낙제");
}