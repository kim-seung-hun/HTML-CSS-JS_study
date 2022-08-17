//1. 콜백 함수 란?
//비동기 방식으로 작성된 함수를 동기 처리 하기위해 주로 사용
//비동기 처리를 기본으로 하고 일부 구간에서 순차적인 처리가 필요할때(예? API?)
//응답을 받은 다음에 처리해야 할때

// //익명의 함수 사용
// let num = ["222","111",3,4];

// num.forEach(function(el,index) {  //forEach : 배열의 길이만큼 반복
//     console.log(el);
//     console.log(index);
// }) ;

// //함수의 이름만 전달하는 방법
// //매개변수로 이름과 함수를 받을 함수
// //보통 함수를 선언한 뒤에 함수 타입 파라미터를 맨 마지막으로 하나 더 선언 해준다.
// function myFun(text,callBack) {
//     // 매캐변수로 받은 text 보여줌
//     console.log(text);
//     // 매개변수로 받은 콜백함수 사용
//     callBack();
// }



// // callFun 콜백으로 전달해서 보여줄 함수를 만듬
// // 함수
// function callFun() {
//     console.log('난 콜백');
// } 

// //함수를 사용했고 첫번째 매개변수는 임의의 문자를 삽입
// //함수를 전달하는 부분은 우리가 함수를 사용할때 ()괄호를 붙이는데
// //()괄호는 함수를 사용하겠다는 뜻이고 , 콜백으로 함수를 전달 할때는
// //()괄호가 없이 함수의 이름만 전달하는 것
// myFun("fsdaafa",callFun);

//---------------------------------------------------------------

// //전역변수 , 지역변수 콜백함수의 파라미터로 전달

// //전역변수를 선언
// let myName = "승훈";

// //매개변수로 함수를 받을 함수를 만듬
// function callBackFun(call) {
//     //지역변수 선언
//     let youName = "후니";
//     call(youName);
// }

// //매개변수로 넘겨줄 콜백함수
// function callName(you) {
//     //매개변수로 넘길 함수를 선언해둔 myName 전역변수를 사용하고
//     //자신이 받은 매개변수 you를 사용한다.
//     console.log(myName + "이랑" + you + "사이가 좋아");
// }

// //callBackFun 함수를 사용 하는데 매개변수로 callName함수의 이름을 전달
// callBackFun(callName);
// //callBackHun(callName(youName))




// //콜백의 주의할 점 this를 보호하자
// let con = {
//     name : "홍길동",
//     setName : function(firstName,lastName) {
//         this.name = firstName + " " + lastName;
//     }
// }

// function getName(firstName , lastName , callBack) {
//     callBack(firstName,lastName);
//     console.log(callBack);
//     console.log(this);
// }

// getName('나 승훈' , '나 후니' , con.setName);
// con.setName('나 승훈' , '나 후니');
// console.log(con.name);
// console.log(window.name);
// //우리가 getName이 함수에 전달한 callBack 매개변수에응 con.setName의
// //함수가 전달이 되었는데 con.setName(); 이렇게 코드상에서 사용하면
// //this는 con 객체이지만 getName함수에 getName의 이름으로 callBack함수를
// //전달해서 사용하면 this는 window 객체이다.




//------------------------------------------------------------------

//콜백지옥

//첫번째로 숫자 값을 받고 두번째로 함수를 받는다.
function temp(num,call) {
    let _num = num * num;
    console.log(_num);
    call(_num);
}

temp(5,function(result) {
    temp(result,function(result) {
        console.log("콜백");
    })
});

// //해결방안

// function add(num) {
//     return new Promise((res , rej)=>{
//         let _num = num + num;
//         console.log(_num);
//         res(_num);
//     })
// }

// //Promise는 정상 수행 후 res , 실패 후 rej이 실행된다.
// //callBack을 사용 했던 것과 마찬가지로 res에 값을 담아 전달한다.

// //Promise는 Hell이다. 이건
// add(5).then(res => {
//     add(res).then(res => {
//         console.log('끝');
//     })
// })

//Promise Hell을 탈출하려면
function add(num) {
    return new Promise((res , rej)=> {
        let _num = num + num;
        console.log(_num);
        res(_num);
    })
}

add(5).then(result => {
    return add(result);
}).then(result => {
    return add(result);
}).then(result => {
    console.log("Hell 지옥 탈출");
});


function eat(){
    return new Promise(function(res){
        //setTimeout 밑에 쓴 숫자는 1000에 1초다
        //setTimeout은 밑의 시간 이후에 실행
        setTimeout(() => {
            res('5초후 날 볼거야(작업완료)');
        }, 5000);
    });
}
//await : 처리 될때 까지 기다려줌
(async function() {
    var result = await eat(); //eat res가 될때까지 기다려
    console.log(result);
})(); 