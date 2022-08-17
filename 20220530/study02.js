// class Mother {
//     constructor(name,age){
//         this.name = name;
//         this.age = age;

//     }
//     getInfo(){
//         return console.log("내이름은" + this.name + "이고 나이는" + this.age + "입니다.");
//     }
// }
// let a = new Mother("바보",20);
// a.getInfo();


// //extends : 키워드를 사용해서 상속받을 수 있다.
// //자식 클래스가 부모클래스를 상속받아서 자식클래스에서 부모클래스에 기능을 물려받아서 사용가능
// //기존에 존재하던 기능을 토대로 새로운 기능을 확장시켜 만들수 있다.
// class Child extends Mother{
//     constructor(a){
//         super(name);
//         this.name = a;
//     }
//  }

// let b = new Child("자식",30);
// b.getInfo();


//함수오버라이딩 : 부모의 함수를 받아서 재정의해서 사용
//run함수가 없으면 Animal의 상속받은 run함수를 실행시킨다.
// class Animal {
//     constructor(name){
//         this.name = name;
//         this.speed = 0;
//     }
//     run(speed){
//         this.speed += speed;
//         console.log(this.name + "은" + this.speed + "로 달린다.","나는 부모");
//     }
//     stop(){
//         this.speed = 0;
//         console.log(this.name + "가 멈췄다.");
//     }
// }

// let ani = new Animal("동물");
// ani.run(5);
// ani.stop();

// class Cat extends Animal{

//     //constructor 가 없는 경우 비어있는 생성자가 만들어진다.

//     // run(speed){
//     //     this.speed = speed;
//     //     console.log(this.name + "은" + this.speed + "로 달린다" , "나는 자식");
//     // }

//     speak(){
//         console.log("야옹야옹");
//     }

//     stop(){
//         super.stop(); //부모의 stop을 실행 -> 재정의 해서 사용할수도 있지만
//         //this.speak(); // super(상속받은 부모클래스 키워드)를 이용해 부모 함수를 실행할수 있다.
//     }
// }

// let cat = new Cat("고양이");
// cat.run(20);
// cat.speak();
// cat.stop();





// class Human {
//     constructor(name,age){
//     this.name = name;
//     this.age = age;
//     }
// }
// class Man extends Human{
    
//     //아래 생성자처럼 생성자를 정의하면 오류가 난다.
//     //상속을 받는 클래스에선 반드시 부모클래스를 호출해야한다.
//     //super를 호출해야한다.
//     //일반적인 함수에서는 new키워드와 같이 실행되면 빈객체가 만들어지고
//     //this 키워드에 이 객체를 할당한다.
//     //반면에 상속클래스는 (Man)의 생성자 함수가 실행되면 일반적인 함수에서 일어나는 일이 일어나지 않는다.
//     //this의 객체를 할당하는 일을 부모 클래스에 생성자가 처리해주기 바라기 때문이다.
//     constructor(name,age){
//         super(name,age);
//         this.name = name;
//         this.age = age;

//     }
// }
// let ma = new Man("경일",30);
// console.log(ma);

// function fun(){
//     console.log("하이");
// }
// fun();

// window.fun();

// console.log(fun()===window.fun());

//this : C++에서는 멤버함수가 속한 클래스를 가르키는 포인터
//JS에서의 this는 실행 컨텍스트가 생성될때 결정이 되고 실행 컨덱스트는 함수를 호출할때 생성되므로
//this는 함수가 호출될때 결정된다.(호출하는 방법에 따라 틀리다.)

var abc = 5;
console.log(abc);
console.log(window.abc);
console.log(this.abc);

function f(){
    if(window===this){
        console.log("윈도우는 this");
    }
}
f();


var student = {
    name : "hong",
    st : function(){
        console.log(this);
    },
};
student.st();

//전역공간에 있으므로 실행주체는 window객체가 되기 때문
//아라에 this는 전역객체의 window가 나오게 된다.
var s = student.st;
s();