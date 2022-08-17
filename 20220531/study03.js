let lottoNumber = [];
let bonus = [];


for(let i=0; i<5; i++) {
    num = Math.floor(Math.random()*45+1);
    if(lottoNumber.indexOf(num) == -1) {
        lottoNumber.push(num);
    }
    else if(lottoNumber.indexOf(num) >= 0) {
        i--;
    }
    lottoNumber.sort(function(a,b){return a-b;})
}

bonus = [lottoNumber[3]-1];

console.log(lottoNumber);
console.log(bonus);


