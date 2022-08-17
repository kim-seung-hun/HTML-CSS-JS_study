// /*
// 배열(array) 이란?
// 여러개의 값을 순차적으로 나열
// 사용빈도가 매우 높다

// 일반적인 배열은 인덱스로 빠르개 접근 가능
// 요소를 삽입,제거 시 효율적이지 않다
// 자바스크립트에서의 배열은 해시테이블로 구현된 객체
// 헤시테이블의 특징 때문에 인덱스로 접근하는 경우 일반적인 배열의 경우보다 퍼포먼스가 느림
// 반대로 요소를 삽입,삭제하는 경우에는 일반적인 배열보다 빠르다
// */

// //생성자 이용
// const arrNum = new Array();
// arrNum[0] = 1;
// arrNum[1] = 2;
// arrNum[2] = "배열?";
// //   index
// console.log(arrNum);

// const arrNum1 = new Array(1,2,3,"하하하하",'A');
// console.log(arrNum1[0]);
// console.log(arrNum1[3]);
// console.log(arrNum1[1]);

// //선언과 동시에
// const arrNum2 = [1,2,3,4,5,6,7,8,9];
// console.log(arrNum2);

// //빈배열
// const arrNum3 = [];
// arrNum3[0] = 1;
// arrNum3[1] = 2;
// console.log(arrNum3);

// //빈배열
// const arrNum4 = [];
// for(let i = 0; i<5; i++)
// {
//     arrNum4[i] = i+1;
// }
// console.log(arrNum4);

// for(let i = 0; i<arrNum4.length; i++)
// {
//     document.write(arrNum4[i]);
// }

// const arr = [1,2,3];
// console.log("arr의 데이터 :" ,arr);
// console.log(arr.length);

// arr.push(4);
// console.log("push 이후 arr의 데이터 :" ,arr);
// console.log(arr.length);
// arr.pop(5);

// console.log("pop 이후 arr의 데이터 :" ,arr);
// console.log(arr.length);

//현재 lenth 프로퍼티 값보다 작은 값을 할당하면 배열의 길이가 줄어든다
// const arr1 = [1,2,3,4,5]; //length : 5
// arr1.length = 3; // length : 3 할당
// console.log(arr1);

//현재 lenth 프로퍼티 값보다 큰 값을 넣으면 해당하는 칸은 빈칸으로 인식한다
// //희소배열
// const arr2 = [1];
// arr2.length = 3;
// console.log(arr2.length);
// console.log(arr2);
// //희소배열
// const arr3 = [1, ,3];
// console.log(arr3);

let arr4 = [1,2,3,4,5,6,7];
// arr4.shift();
// console.log(arr4);

let arr5 = [1,2,3,4,5];
arr4 = arr4.concat(arr5);
console.log(arr4);

// const arr = [1,2,2,3];
// console.log(arr.indexOf(2));
// console.log(arr.indexOf(4));
// console.log(arr.indexOf(2,2)); //두번째 인수는 검색을 시작할 인덱스

// //food 배열에 orange가 있는지 확인
// const food = ['apple','banana','orange'];
// if(food.indexOf('orange')===-1)
// {
//     food.push('orange'); //없으면 오렌지 넣어라
// }
// //food 배열에 orange가 있는지 확인
// if(!food.includes('orange'))
// {
//     food.push('orange'); //없으면 오렌지 넣어라
// }
// console.log(food);

// const numArr = [1,2,3,4];
// //배열의 인덱스 1부터 2개의 요소를 제거 , 그 자리에 30,40을 넣는다.
// //const res = numArr.splice(1,2,30,40);
// const res = numArr.splice(1,2);
// console.log(res);
// console.log(numArr);

// const numArr1 = [1,2,3,1,2];
// // 배열에서 특정요소를 제거하려면 indexOf method를 통해
// // 특정요소의 index를 가져오고 splice method를 사용
// function remove(arr,item)
// {
//     //제거할 item 요소의 index item요소가 여러개 있다면 첫번째 요소만 제거
//     const index = arr.indexOf(item);
//     //제거할 item이 있다면 제거
//     if(index !== -1) arr.splice(index,1)
    
//     return arr;
// }

// console.log(remove(numArr1,2));


/*
배열의 다양한 method

push : 배열의 끝에 원하는 값을 추가한다.
pop : 마지막 값 삭제
shift : 첫 번째 값 삭제
reverse : 배열을 역순으로 뒤집음
concat : 두개의 배열을 합침
indexOf : 배열에서 인수로 전달된 요소를 검색 -> 인덱스로 변환
배열에 인수로 전달한 요소의 중복되는 요소가 여러개 있다면
첫번째로 검색된 요소의 인덱스를 반환한다.
만약 검색하려는 데이터가 없으면 -1 반환
splice : 배열 중간에 데이터를 삽입 또는 삭제는 하는경우 사용
*/
