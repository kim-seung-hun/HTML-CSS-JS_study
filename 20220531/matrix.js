
let matrix = [[1,0,1],[0,0,1],[1,1,1]];

const rotateMatrix = function (matrix, k) {

    if(matrix.length ===0) return []
    
    let result = [];
    for(let i=0; i<matrix[0].length; i++){
      result.push([]); 
    }
    for(let j=0; j<matrix[0].length; j++){
      for(let i=0; i<matrix.length; i++){
          result[j].push(matrix[i][j]) //matrix의 세로방향 요소들을 result의 가로방향 요소들로 import!
      } 
      result[j].reverse(); //그리고 result의 요소들은 reverse
    } //90도 돌렸을 때 result배열 만들기 완성!
    
    
    if(k%4 === 0){ //4로 나누고 나머지가 0일때
      return matrix;
    }
    else if(k===undefined || k%4 === 1){ //나머지가 1일 때 위에서 구해놓은 result 바로 반환 
      return result;
    }
    else if(k%4 ===2){ 
      for(let j=0; j<matrix.length; j++){
        matrix[j].reverse(); //행렬의 각 요소를 reverse하고
      }
      matrix.reverse(); //행렬 전체도 한번 reverse
      return matrix;
    }
    else{
      for(let j=0; j<result.length; j++){
        result[j].reverse();
      }
      result.reverse();
      return result;
    }
  
  };

console.log(rotateMatrix(matrix,3));


  