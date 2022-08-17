//과제 회원가입 페이지 이쁘게 만들기
//1.부트스트랩 사용 or CSS 사용
//2.input에 회원가입 조건 추가해서 통과하면 수락되게
//3.input에 쓴값이 회원가입 조건에 충족하지 않으면
//4. 충족되지 않은 이류 표시


btn.onclick = function(){
    let id_check = user_id.value;
    let pw_check = user_pw.value;
    let pw_check2 = user_pw_check.value;

    let my_id = /^[a-zA-Z0-9]+$/;
    let my_pw = /^[0-9]{4,8}$/;

    if(my_id.test(id_check)){
        if(my_pw.test(pw_check)){
            if(pw_check == pw_check2) {
                console.log(id_check);
                console.log(pw_check);
            }else {
                alert("비밀번호가 서로 다릅니다.");
            }
        }else {
            alert("비밀번호를 확인해주세요");
        }
    }else {
        alert("아이디를 확인해주세요");
    }
    
}