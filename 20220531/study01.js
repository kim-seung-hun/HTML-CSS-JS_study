//재귀 arr

// const arr1 = [[1,2,3],[4,5,6],[7,8,9]];
//1,2,3
//4,5,6
//7,8,9

// function Matrix(row,col)
// {
//     let jaggedArr = new Array(row);
//     for(let i=0; i<col; i+=1) {
//         jaggedArr[i] = new Array(row);
//     }
//     return jaggedArr;
// }

// console.log(Matrix(3,3));

/*
Input
[1,0,1],
[0,0,1],
[1,1,1]

Output
[1,1,1],
[0,0,1],
[1,0,1]

1.행렬의 세번째 열이 회전된 행렬의 첫번째 행이 된다.
2.행렬의 두번째 열이 회전된 행렬의 두번째 행이 된다.
3.행렬의 첫번째 열이 회전된 행렬의 세번째 행이 된다.
*/

function rotateMatrix(mat) {
    let N = mat.length;
  
    for (let i = 0; i < N / 2; i++) {
      //현재 항목을 기준으로
      for (let k = i; k < N - i - 1; k++) {
        //현재 칸의 값을 임시 변수에 저장
        let temp = mat[i][k];
        //현재 항목 기준 오른쪽값을 현재 항목 기준 위쪽칸에 할당
        mat[i][k] = mat[k][N - 1 - i];
        //현재 항목기준 아래쪽 값을 현재 항목 기준 오른쪽 칸에 할당
        mat[k][N - 1 - i] = mat[N - 1 - i][N - 1 - k];
        //현재 항목 기준 왼쪽값을 현재 항목 기준 아래쪽 칸에 할당
        mat[N - 1 - i][N - 1 - k] = mat[N - 1 - k][i];
        //임시변수의 값을 현재 항목 기준 왼쪽칸에 할당
        mat[N - 1 - k][i] = temp;
      }
    }
  }


////////////////////////////////////////////////////////////////

/*
버블정렬 : 가장 간단하지만 , 전체 배열을 순회하면서 이전항목이 다음항목보다 큰경우 두 항목을 교환
모든 가능한 짝을 비교하기 때문에 좋지 않다.

6,1,2,3,4,5
1,6,2,3,4,5
1.2.6.3.4.5
1.2.3.6.4.5
1.2.3.4.6.5
1.2.3.4.5.6
*/
// function random(n){
//     let arr = new Array();
//     let num;
//     let temp;

//     for(let i=0; i<=n; i++) {
//         arr.push(i);
//     }
//     for(let i=0; i<arr.length; i++) {
//         num = Math.floor(Math.random()*n);
//         temp = arr[i];
//         arr[i] = arr[num];
//         arr[num] = temp;
//     }
//     return arr;
// }

// function bubbleSort(array){
//     const arrlen = array.length;
//     for(let i=0; i<arrlen; i++) {
//         for(let k=0; k<arrlen-1-i; k++) {
//             if(array[k]>array[k+1]) {     //
//                 let temp = array[k];      //
//                 array[k] = array[k+1];    //
//                 array[k+1] = temp;        //스왑공식
//             }
//         }
//     }
//     return array;
// }

// let bubbleSorting = random(10);
// console.log("버블정렬전 : ",bubbleSorting);
// let statTime = new Date().getTime() / 1000;
// console.log("버블정렬후 : ", bubbleSort(bubbleSorting));
// let endTime = new Date().getTime() / 1000;
// console.log(`정렬시간 : ${endTime - statTime}`);

///////////////////////////////////////////////////////////////////////

/*
선택정렬 : 가장 작은 항목을 찾아서 해당 항목을 배열의 현위치에 삽입방식
7 4 5 6 8 2 1
1 4 5 6 8 2 7 최솟값 1->7 교환
1 2 5 6 8 4 7
1 2 4 6 8 5 7
1 2 4 5 8 6 7
1 2 4 5 6 8 7
1 2 4 5 6 7 8
*/

// function swap(arr,a,b)
//     {
//         let temp = arr[a];
//         arr[a] = arr[b];
//         arr[b] = temp;
//     }

// function random(n){
//     let arr = new Array();
//     let num;
//     let temp;

//     for(let i=0; i<=n; i++) {
//         arr.push(i);
//     }
//     for(let i=0; i<arr.length; i++) {
//         num = Math.floor(Math.random()*n);
//         temp = arr[i];
//         arr[i] = arr[num];
//         arr[num] = temp;
//     }
//     return arr;
// }

// function selecSort(arr) {
//     const arrlen = arr.length;
//     let min;

//     for(let i=0; i<arrlen; i++) {
//         //최소항목을 현재 위치로 설정
//         min = i;

//         //더 작은 항목이 있는지 배열의 나머지를 확인
//         for(let k=i+1; k<arrlen; k++) {
//             if(arr[k]<arr[min]) {
//                 min = k;
//             }
//         }
//         //현재 위치가 최소항목 위치가 아니라면 항목 swap
//         if(i!=min) {
//             swap(arr,i,min);
//         }
//     }
//     return arr;
// }

// let number = random(10);
// console.log("선택정렬전 : ",number);
// let statTime = new Date().getTime() / 1000;
// console.log("선택정렬후 : ", selecSort(number));
// let endTime = new Date().getTime() / 1000;
// console.log(`정렬시간 : ${endTime - statTime}`);