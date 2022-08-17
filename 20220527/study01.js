/*
객체(object)
기본 데이터 타입을 제외한 나머지 모두 객체라고 볼 수 있다.
함수,배열,정규표현식..... 객체는 key,value가 존재한다.

프로퍼티 : 객체의 상태(status)를 나타내는 값
method : 프로퍼티를 창조하고 조작할 수 있는 동작
*/

// const person = {
//     name : 'kim', // 프로퍼티
//     age : 20 // 프로퍼티
// //  key   value
// };

// let counter = {
//     num : 0, //프로퍼티
//     increase : function(){  //method
//         this.num++;
//     }
// }

//리터럴 : 인간이 이해할수 있는 표현식
// let person = {
//     name : 'kim',
//     Hello : function() {
//         console.log(`hello my name is ${this.name}`);
//     }
// }
// console.log(typeof person);
// console.log(person);
// console.log(person.name);
// person.Hello();


// //중괄호 내에 프로퍼티를 정의하지 않으면 빈 객체 생성
// let empty = {};

// let student = {
//     list : {a:10 , b:20 , c:30}, //객체
//     print: function() {
//         console.log("나는 프린트");
//     }
// }

// console.log(empty);
// student.print();


//전역변수 안쓰는게 좋지만 불가피하게 사용하게 된다면
//1. 하나의 객체를 전역변수로 만들고 객체의 속성으로 변수를 관리
// let myObj = {};
// myObj.cal = {a:null, b:null};
// myObj.test = {c:null, d:null};
// myObj.cal.a = 10;
// myObj.cal.b = 20;

// function sum()
// {
//     return myObj.cal.a + myObj.cal.b;
// }

// let korea = {
//     a:500,
//     b:300,

//     seoul : {
//         a:100,
//         b:20,
//         c:50
//     },
// };

let circle = {
    radius : 5,
    getDiameter : function(){
        return 2*this.radius;
            //객체 자신을 뜻하는 창조 변수 : this(circle)
    }
}
// console.log(circle.getDiameter());

//프로퍼티에 접근방법
// . []
// console.log(circle.radius);
// console.log(circle['radius']);

// let obj = {a:10 , b:20 , c:30};
// for(const key in obj) {
//     console.log(key);
// }
// for(const val in obj) {
//     console.log(obj[val]);
// }
// for(i in obj) {
//     console.log("key : " + i + "value : " + obj[i]);
// }




// /////////////////////////////////////////////////////////////////////
// // 2교시




// function User(name){

//     // this = {};
//     this.name = name;
//     this.isCheck = false;

//     return this;
// }

// let user = new User("홍길동");

// function Person(name , age , city)
// {
//     this.name = name;
//     this.age = age;
//     this.city = city;
//     this.information = function() {
//         console.log("나는" + this.name + "나이는" + this.age + "사는곳" + this.city);
//     }

// }
// //객체를 new로 재생성
// //인스턴스 : 클래스에 의해 메모리에 저장된 실체 -> 메모리에 저장되어 실제로 존재
// let p1 = new Person("사자",19,"에버랜드");
// let p2 = new Person("호랑이",20,"앞마당");
// p1.information();
// p2.information();




// ///////////////////////////////////////////////////////////////////////////////
// //3교시



// //회사에 4명이 있다(모든 직원의 월급에 대한 정보를 담고 있는 객체가 있다)
// //모든 팀원 월급을 합한 값을 모두 구한(function) 결과를 출력

let salary = {
    employee1 : 100,
    employee2 : 300,
    employee3 : 300,
    employee4 : 400,
    sum : function(){
    return this.employee1 + this.employee2 + this.employee3 + this.employee4 ;
    }
}
console.log("직원 월금의 합 : " , salary.sum());

//객체A가 프로퍼티 값이 숫자인 경우 그 값을 두배로 늘려주는 함수를 만들기

let two = {
    A : 200,
    double : function() {
            return this.A * 2;
    }
}

console.log(two.double());