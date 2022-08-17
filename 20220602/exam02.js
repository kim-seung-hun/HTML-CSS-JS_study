//Promise Hell을 탈출한 코드 보고
//더하기 하는데 값은 아무거나
//값을 10번 더해보세요
//더한 값을 6초 뒤 보여주기


//Promise Hell을 탈출하려면
function add(num) {
    return new Promise((res , rej)=> {
        let _num = num + num;
        console.log(_num);
        res(_num);
    })
}

add(5).then(result => {
    return add(result);
}).then(result => {
    return add(result);
}).then(result => {
    console.log("Hell 지옥 탈출");
});


function eat(){
    return new Promise(function(res){
        //setTimeout 밑에 쓴 숫자는 1000에 1초다
        //setTimeout은 밑의 시간 이후에 실행
        setTimeout(() => {
            res('6초후 날 볼거야(작업완료)');
        }, 6000);
    });
}
//await : 처리 될때 까지 기다려줌
(async function() {
    var result = await eat(); //eat res가 될때까지 기다려
    console.log(result);
})(); 