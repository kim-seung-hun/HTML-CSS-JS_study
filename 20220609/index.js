//이벤트 함수의 타겟

//클릭의 event.target
window.onclick = function(event){
    //event.target은 이벤트가 발생한 요소
    //event 태그의 이벤트가 담겨있다.
    console.log(event.target);
    event.target;

    //클래스가 무엇인지로 판단을 해서 이벤트를 적용시킬수 있다
    if(event.target.classList.contains('_target')) {
        console.log("있어");
    }

    //클래스가 무엇인지 가져와서
    //아래와 같이 조건문으로 이벤트를 설정해줄수 있다
    // let _class = event.target.className;
    // switch (_class) {
    //     case "_target"
            
    //         break;
    
    //     default:
    //         break;
    // }
};




//마우스의 현재 페이지에서의 위치
//onmousemove 마우스가 움직일때 실행
window.onmousemove = function(e){
    //e.type 해당 이벤트의 타입이 무엇인지
    console.log(e.type);
    //e.pageX 문서 페이지 상에서 마우스 X의 좌표
    console.log(e.pageX);
    //e.pageY 문서 페이지 상에서 마우스 Y의 좌표
    console.log(e.pageY);  
}

//키보드 입력 이벤트
_input.onkeydown = function(e) {
    //_input의 이벤트는 >> keyboardEvent
    //e.keyCode는 아스키코드 숫자로 표현됨
    //영문키 엔터 컨트롤 알트 각 숫자로 표현
    //한글은 229만 뜬다
    console.log(e.keyCode);
}

//기본동작을 취소하는 방법
_btn.onclick = function(e){
    // 기본 동작을 취소하는 함수 >> preventDefault()
    e.preventDefault();
    // 버블링 현상을 막는방법(이벤트 전파 막기)
    //stopPrepagetion() 이벤트의 전파를 막는 함수
    e.stopPrepagetion();
}