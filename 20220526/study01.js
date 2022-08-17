// /*
// 고차함수 : 함수를 인수로 전달받거나 함수를 반환하는 함수
// 고차함수는 외부상태의 변경이나 가변데이터를 피하고 불변성을 지향하는
// 함수형 프로그래밍에 기반을 두고있다.

// sort : 정렬함수 , 원본배열을 직접변경하며 정렬된 배열을 리턴한다
// */

// const fruits = ['banana' , 'orange' , 'apple'];
// fruits.sort(); //기본적으로 오름차순으로
// console.log(fruits);

// fruits.reverse(); //내림차순으로 정렬
// console.log(fruits);

// const points = [40 , 30 , 1 , 5 , 2 , 25 , 100 ,10]
// // 유니코드 (문자열 1 : U+0031 , 2 : U+0032 , 10 : U+0031+0030) 로 인식되어 원하는 정렬이 안됨
// points.sort();
// console.log(points);
// // 숫자요소를 정렬할때는 정렬순서를 정의하는 비교함수를 인수로 전달해야한다.
// points.sort((a,b) => a-b);
// console.log(points);



// // let sum = function(a,b)
// // {
// //     return a+b;
// // }
 
// // //위와 아래는 같은식

// // let sum1 = (a,b)=>a+b;

// // //ex)
// // let double = n=>n*2;
// // let double1 = function(n)
// // {
// //     return n*2;
// // }

// // let print = ()=>alert('안녕');

// // const numbers = [1,2,3]
// // const pow = [];

// // // for(let i = 0; i<numbers.length; i++)
// // // {
// // //     pow.push(numbers[i] **2);
// // // }
// // // console.log(pow);

// // // 위아래는 같은식

// // numbers.forEach(item=>pow.push(item**2));
// // console.log(pow);


// //***map*** : 요소의 값을 다른 값으로 mapping 한 새로운 배열을 생성하여 반환하는 고차함수

// const number = [1,2,3];
// const roots = number.map(item=>Math.sqrt(item)); //제곱 벗김

// console.log(roots); //map은 새로운 배열을 반환
// console.log(number); //원본배열은 건드리지 않는다.


// //함수오버로딩 (함수 이름은 동일하지만 매개변수 갯수가 다르거나 자료형이 다르다.)

// function myfunction(a,b,c)
// {
//     const len = arguments.length;
//     if(len==0)
//     console.log("매개변수 없음");
//     else if(len==1)
//     {
//         console.log("한개");
//     }
//     else if(len==2)
//     {
//         return a+b;
//     }
//     else
//     {
//         return a+b+c;
//     }
// }

// //디폴트매개변수
// function call(a,b = 5)
// {
//     return a+b;
// }
// console.log(call(1));

// //recursive function(재귀함수)
// let res = 0;
// for(let i=0; i<101; i++)
// {
//     res+=i;
// }

// //재귀함수(자기자신을 계속 호출)
// //메모리가 많이 소비된다
// function recursiveFunction(n)
// {
//     if(n<=1)return 1;//종료조건이 있어야함!!
//     return n+recursiveFunction(n-1);
// }

//피보나치 수열(재귀함수의 대표)
function fibo(num)
{
    let res = [0,1];
    if(num==0){
        console.log([0]);
    }
    if(num==1){
        console.log([0,1])
    }
    for(let i=2; i<=num; i++)
    {
        res.push(res[i-2]+res[i-1]);
        console.log(res);
    }
}
fibo(8);

function recursiveFibo(num)
{
    if(num<2)return num;
    return recursiveFibo(num-1)+recursiveFibo(num-2);
}

console.log(recursiveFibo(8));

