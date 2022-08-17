//ex)[1,2,3,4,5] = 9 return하는 인덱스는 3,4
//배열 arr가 있고 어떤수 weight가 주어졌을때 합쳐서 weight가 되는 배열내
//두개의 인덱스를 반환하라 , 만약 합쳐서 weight가 되는 항목 두개가 존재하지 않을경우
//-1 return

const arr = [1, 2, 3, 4, 5];
const test = findsum(arr, 3);

function findsum(arr, weight) {
  for (let i = 0; i < arr.length; i++) {
    for (let k = i+1; k < arr.length; k++) {
      if (arr[i] + arr[k] == weight) {
        return [i, k];
      }
    }
  }
  return -1;
}

console.log(test);
