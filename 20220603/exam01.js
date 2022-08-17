function monster_attack(attack) {
    return new Promise (function(res,rej) {
        setTimeout(() => {
            if(attack > 4) {
                res();
            }
            else if(attack <= 4) {
                rej();
            }
        },1000);
    });
};


let attack = Math.floor(Math.random()*10);
console.log(attack);
monster_attack(attack).then(function() {
    console.log("공격성공");
}).catch(function(){
    console.log("공격실패");
})