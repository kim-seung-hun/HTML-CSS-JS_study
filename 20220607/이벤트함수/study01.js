// UI 이벤트

//load = 페이지와 기타 요소들의 로딩이 완료되었을 때
//on이 붙으면 어트리뷰트 방식
// window.onload = function() {
//     //로드가 완료되고 실행되는 함수
//     console.log('페이지가 로드됨');
//     console.log(document.querySelector('.tag'));
// };

// window.addEventListener('load',function(){
//     //여기도 로드가 완료되고 실행되는 함수
//     console.log('페이지가 로드됨2');
// })

// //어트리뷰트를 사용하거나
// //window.addEventListener('이번트의 타입' , 함수)를 사용하여
// //이벤트 핸들러에도 load 이벤트를 등록할 수 있다.


// //resize 브라우저 창의 크기가 바뀌었을 때
// window.onresize = function(){
//     console.log('페이지 사이즈가 변했다.');
// }

// window.addEventListener('resize',function(){
//     console.log('페이지 사이즈가 변했다2.');
// });


// //scroll 사용자가 페이지를 스크롤 했을 때
// //window.scrollY 브라우저의 스크롤 값 맨위가 0
// window.onscroll = function(){
//     console.log(window.scrollY);
// };

// window.addEventListener('scroll',function(){
//     console.log('나 스크롤됨2');
// });

// ///////////////////////////////////////////////////////////////////


// //keyboard 이벤트

// //keydown 사용자가 키를 눌렀을때 누르고 뗀게 아니라 누르자마자
// window.onkeydown = function(){
//     console.log('키가 입력됨');
// };

// window.addEventListener('keydown',function(){
//     console.log('나 키입력됨2');
// });

// //keyup 사용자가 키를 누르고 뗐을때
// window.onkeyup = function(){
//     console.log('키를 뗐다');
// };

// window.addEventListener('keyup',function(){
//     console.log('키를 뗐다2');
// })

// //keypress 사용자가 키를 꼭 누르고 있는 동안
// window.onkeypress = function(){
//     console.log('키 누르고 있음');
// };

// window.addEventListener('keypress',function(){
//     console.log('키 누르고 있음2');
// });

// ////////////////////////////////////////////////////////////////////////


// //마우스 이벤트

// //click 사용자가 페이지 위에서 태그에 해당 마우스를 클릭했을때
// // document.querySelector('.content')
// content.onclick = function(){
//     console.log('나 클릭됨');
// };

// content.addEventListener('click',function(){
//     console.log('나 클릭됨2');
// });

// //dblclick 더블 클릭했을때 발동되는 함수
// content.ondblclick = function(){
//     console.log('나 더블 클릭됨');
// };

// content.addEventListener('dblclick',function(){
//     console.log('나 더블클릭됨2');
// });

// //mouseup과 mousedown은 좌표차이를 이용하여 측정가능

// //mousedown 마우스버튼을 누르자마자
// content.onmousedown = function(){
//     console.log('마우스 눌렀음');
// };

// content.addEventListener('mousedown',function(){
//     console.log('마우스 눌렀음2');
// });

// //mouseup 마우스버튼 뗄때
// content.onmouseup = function(){
//     console.log('마우스 뗌');
// };
// //단일 함수 갈아끼우기

// content.addEventListener('mouseup',function(){
//     console.log('마우스 뗌2');
// });
// // addEventListener >> 다수의 함수를 추가

// //mousemove 마우스가 움직일때
// window.onmousemove = function(){
//     console.log('마우스 움직임');
// };

// window.addEventListener('mousemove',function(){
//     console.log('마우스 움직임2');
// });

// //mouseenter 마우스를 해당 요소 위로 올렸을때
// content.onmouseenter = function(){
//     console.log('콘텐츠에 올라옴');
// } ;

// content.addEventListener('mouseenter',function(){
//     console.log('콘텐츠에 올라옴2');
// });

// //moseleave 마우스가 해당 요소를 빠져나갔을때
// content.onmouseleave = function(){
//     console.log('마우스 빠져나감');
// };

// content.addEventListener('mouseleave',function(){
//     console.log('마우스 빠져나감2');
// });

// //////////////////////////////////////////////////////////////////////

//모바일 터치

//touchstart 화면을 눌렀을때
//컨트롤 + shift + M  모바일 화면 확인 가능
window.ontouchstart = function(){
    console.log('모바일 화면이 눌림');
};

//touchend 화면에서 손을 뗏을때
window.ontouchend = function(){
    console.log('모바일 화면에서 손 뗌');
};

//touchmove 화면에서 touch로 이동할때
window.ontouchmove = function(){
    console.log('터치이동중');
}


//드래그이벤트
//drag 드래그 하고 있을때
window.ondrag = function(){};

//dragstart 드래그가 시작됐을때
window.ondragstart = function(){};

//dragend 드래그가 끝났을대
window.ondragend = function(){};

//dragenter 드래그하면서 요소 위로 마우스가 올라왔을때
window.ondragenter = function(){};

//dragleave 드래그 하면서 마우스가 요소 밖으로 나갔을때
window.ondragleave = function(){};

//drop 드래그하다가 놓았을때
window.ondrop = function(){};