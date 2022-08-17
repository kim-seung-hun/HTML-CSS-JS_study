//부모클래스(Monster) 만든다
//부모클래스를 상속받기
//하위클래스(Boss 등등) 만든다
//부모클래스는 공격.방어 기타 걷기 등등 가지고있다
//하위 클래스는 위 해당하는 기능을 재정의 한다

class Monster {
    constructor(attack , guard , walking) {
        this.attack = attack;
        this.guard = guard;
        this.walking = walking;
    }
    attack1(attack){
        this.attck = attack;
        console.log("내 공격력은 : " + this.attck);
    }
    guard1(guard){
        this.guard = guard;
        console.log("내 방어력은 : " + this.guard);
    }
    walking1(walking){
        this.walking = walking;
        console.log("내 속도는 : " + this.walking);
    }

    getInfo(){
        return console.log("나의 공격력은 " + this.attack + "이고," + "나의 방어력은 " + this.guard + "이고," + "속도는 " + this.walking + "이다.");
    }
}

class sol extends Monster {
    // attack1(attack){
    //     this.attck = attack;
    //     console.log("내 공격력은 : " + this.attck);
    // }
    // guard1(guard){
    //     this.guard = guard;
    //     console.log("내 방어력은 : " + this.guard);
    // }
    // walking1(walking){
    //     this.walking = walking;
    //     console.log("내 속도는 : " + this.walking);
    // }
    skill1(skill){
        this.skill = skill;
        console.log("스킬 : " + this.skill);
    }
}

class Mob extends Monster {
    // attack1(attack){
    //     this.attck = attack;
    //     console.log("내 공격력은 : " + this.attck);
    // }
    // guard1(guard){
    //     this.guard = guard;
    //     console.log("내 방어력은 : " + this.guard);
    // }
    // walking1(walking){
    //     this.walking = walking;
    //     console.log("내 속도는 : " + this.walking);
    // }
}
let seok = new sol(10,10,10)
seok.getInfo();

let ha = new Mob(10,10,10);
ha.getInfo();