//CSS 선택자

//태그선택자
//div{color : red;} >> 모든 div 선택자들은 red color 사용
//p {color : black}

//id 선택자
//#name {color : red;} >> html 문서에서 <div id = "name"> id 어트리뷰트가 name인 선택자
//id는 고유 이름만

//class 선택자
// .contnet {color : red;} 클래스는 동일한 이름을 가질수 있다.
//content 클래스를 가지고 있는 모든 요소에 위 옵션을 넣을 수 있다.
//class는 고유 이름을 가질 필요없다(같은 이름 여러개 사용가능)

//어트리뷰트 선택자
//div[href] {color : red;} >> div에 href가 있는 모든 요소

//div[target = "_blank"] {color : red;} >> div에 target이 있는데 값이 _blank인 요소

//자식 선택자
//.content .name{color : red;} >> content클래스 안에 자식요소로 name클래스를 가지고 있는 모든 요소

//.content > .name{color : red;} >> content클래스 안에 자식요소인데 부모 바로 아래 자식요소(첫번째만)

//형제 선택자
//.content + .content2 {color : red;} >> content클래스의 같은 레벨의 형제선택요소

//가상클래스
//a:hover {color : red;} >> a에 마우스를 올렸을 때 일어나는 스타일
//input:focus {color : red;} input이 포커스 상태일때 일어나는 스타일

//다수의 클래스 선택자
//.content.active {color : red;} >> content클래스도 가지고 있고 active클래스도 가지고 있는 요소