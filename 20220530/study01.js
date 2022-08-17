//자바스크립트는 프로토타입 기반 객체지향 언어다.
//프로토타입에 대해서 정리
//class : 생성자함수와 비슷
//0개 이상의 method만 정의할 수 있다.
//생성자, 프로토타입메서드, 정적메서드

// class CSstudent {

//     //생성자
//     constructor(age,phone,city) {
//         this.age = age;
//         this.phone = phone;
//         this.city = city;
//     }
//     getInfo(){
//         return "나이는 : " + this.age + "살," + "핸드폰 번호는" + this.phone + "사는 곳은 : " + this.city + "입니다"
//     }
// }


// let st  = new CSstudent(10,10,"서울시 강동구");
// console.log(st);
// console.log(st.age);
// console.log(st.getInfo());




// //getter,setter
// //클래스는 프로퍼티의 값을 가져오거나 값을 설정하기 위해 getter,setter 를 제공한다.
// //클래스는 필드에 접근할때 직접 변수에 접근하는 형태가 아닌 get,set을 통한 접근하는 방법이다.
// //외두에 값을 전달하거나 외부로부터 가지고 올때 추가적인 조작이 가능하고 내부 구조를 캡슐화 하는데도 유리하다.

//private,public,protected
// class Product {
//     constructor(name,price) {
//         this.name = name;
//         this.price = price;
//     }

//     //ex)은행원 : 돈을 뺴거나 넣을때 통하는 기능
//     get getName() {
//         return "제품명 : " + this.name;
//     }
//     set setPrice(price) {
//         this.price = price;
// }
// }

// let pr = new Product("아이폰14 언제 출시함? " , 1000000);
// console.log(pr);
// console.log(pr.getName);
// pr.setPrice = 2000;


// // class Person {
// //     name = "Lee";
// // }
// // const me = new Person();
// // console.log(me.name);


// //# : 프라이빗 식별자 , 클래스 외부에서 엑세스불가
// // 기본적으론 자바스크립트는 public
// // 아래와 같이 private 필드의 앞부분에 # 붙여줌
// class Person {
//     #name = "Lee"; //외부에 공개 안함

//     constructor(name){
//         this.#name = name;
//     }
// }
// const me = new Person();
// console.log(me.name);