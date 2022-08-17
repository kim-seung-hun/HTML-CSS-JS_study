//로또번호 생성기
//1~45
//6개의 숫자를 뽑아낸다.(랜덤)

let lottoNumber = [];

for(let i = 0; i<=5; i++)
{
    result = Math.floor(Math.random()* 45)+1;
    if(lottoNumber.indexOf(result)==-1){
        lottoNumber.push(result);
    }
    else if(lottoNumber.indexOf(result)>=0) {
        i--;
    }
}
lottoNumber.sort((a,b)=> a - b);
console.log(lottoNumber);

// 힌트 : index를 랜덤하게