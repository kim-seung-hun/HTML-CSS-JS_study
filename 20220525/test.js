let lottoNumber = [];

for(let i = 1; i<=6; i++) {
    result = Math.floor(Math.random()* 45)+1;
    if(lottoNumber.indexOf(result)==-1) {
        lottoNumber.push(result);
        console.log("성공");
    }
    else if(lottoNumber.indexOf(result)>=0) {
        i--;
        console.log("실패");
    }
    console.log("i "+i);
}
lottoNumber.sort((a,b)=> a - b);

console.log(lottoNumber);