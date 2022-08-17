// document.write(1);
// document.write(2);
// document.write(3);
// document.write(4);
// document.write(5);
// document.write(6);
// document.write(7);
// document.write(8);
// document.write(9);
// document.write(10);

// 반복문
// for(변수 선언문 or 할당문; 조건식; 증감식)
// {
//     조건식이 참인 경우 발복 실행
// }


// //예시

// for(let i = 0; i<2; i++)
//  {
//      console.log(i);
//      document.write(i);
//      document.write("<br>");
//  }

// //1부터 100까지의 합
// let res = 0;
// for(let i = 0; i<=100; i++)
//  {
//      res = res+i;
//  }
//  console.log(res);

//  for(let i = 0; i<=10; i++)
//  {
//      if(i==2) continue; // console은 건너뛰고 진행
//      console.log(i);
//  }

//  for(let i = 5; i>=0; i--)
//  {
//      console.log(i);
//  }

// 2중 for

//  for(let i = 0; i<3; i++)
//  {
//      for(let k = 0; k<3; k++)
//      {
//          console.log(i,k);
//      }
//      for(let u = 0; u<3; u++)
//      {
//          console.log(i,u);
//      }
//  }


//      let result = 0;
//      document.write("구구단<br><br>")
// for(let a = 2; a<=9; a++)
//  {
//      document.write(a+"단"+"<br><br>")
//      for(let b = 1; b<=9; b++)
//      {
//      result = `${a} X ${b} = ${a*b}`; //$ : 상수식별자 (상수치환)
//      document.write(result+"<br>");
//      }
//      if(b=9)
//      { document.write("<br>")
//      }
//  }

// //기본적으로 무한루프
// //종료조건이 무조건 있어야 함

//   let number = 0;
// //  while (number<10) {
// //      number+=2;
// //      console.log(number);
// //      if(number===10) break; 
// //  }


// 코딩테스트 자주 나옴
//  while (number<10) 
//  {
//      number++;
//      if(number %2 !=0) continue; //2로 나눈 나머지가 0이 아니라면 건너뛰어라
//      console.log(number);
//  }

//  for(let i = 0; i<5; i++)
//  {
//      for(let k = 0; k<=i; k++)
//      {
//          document.write('*');
//      }
//      document.write('<br>')
//  }
// ////////////////////////////////////////////////////////
// //역순 5개부터 1개 차례로
//  for(let i = 5; i<=5 && i>=0; i--)
//  {
//      for(let k = 0; k<i; k++)
//      {
//          document.write('*');
//      }
//      document.write('<br>')
//  }

// //역순 5개부터 1개 반대로 
// for(let i = 1; i<=5 && i>=1; i++)
// {
//     for(let k = 2; k<=i; k++)
//     {
//         document.write('&nbsp');
//         continue;
//     }
//     for(let j = 5; j>=i; j--)
//     {
//         document.write('*');
//     }
//     document.write('<br>')
// }

// //////////////////////////////////////////////////////////////
// 1개부터 5개 반대로
for(let i = 5; i<=5 && i>=1; i--)
{
    for(let k = 1; k<i && k<5; k++)
    {
        document.write('&nbsp');
        continue;
    }
    for(let j = 5; j>=i; j--)
    {
        document.write('*');
    }
    document.write('<br>')
}

// //정삼각형
// for(let i = 1; i>0 && i<=9; i++)
// {
//     for(let k = 1; k<=4, k++)
//     {
//         document.write('&nbsp');
//         continue;
//     } 
//     for(let y = 9; )
//     for(let p = 1; i<=p; p++)
//     {
//         document.write('*');
//  }
// }

//     *    
