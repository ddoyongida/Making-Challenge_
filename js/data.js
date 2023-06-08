/*
코딩 왕초보 킹,0
코딩 왕초보 워리어,1
코딩 왕초보 키드,2
*/



const qnaList = [
    { 
      q:'1.CSS는 프로그래밍 언어이다.',
      a: [
        {answer: '맞음', score: 0}
        ,{answer: '틀림', score: 1 }
       ],
      
    },
    { q:'2.통상적으로 데이터 조회(Read)를 요청할 때 쓰는 방식은 ?'
    , a:[
        
        {answer: 'POST', score: 0 },
        {answer: 'GET', score: 1 }
        ],
        
        
    },
    { q:'3.알고리즘이란 어떤 문제를 해결하기 위한 절차의 집합이다.'
     ,a:[
        {answer: '맞음', score: 1},
        {answer: '틀림', score: 0}
        ],
        
        
    },
    { q:'4.Javascript는 웹페이지가 동작하는 것을 담당한다.'
     ,a:[
        {answer: '맞음', score: 1 },
        {answer: '틀림', score: 0}
        ],
        
        
    },
    { q:'5.HTML은 크게 (   )와 (   )로 구성 된다.'
     ,a:[
        {answer: 'Head, Body', score: 1},
        {answer: 'Front, Tail', score: 0}
        ],
       
        
    },
    { q:'6.SQL문법의 종류에 해당하지 않는 것은?'
     ,a:[
        {answer: 'DDL : 데이터 정의 언어', score: 1},
        {answer: 'DTL : 데이터 변형 언어', score: 0},
        {answer: 'DCL : 데이터 제어 언어', score: 1},
        {answer: 'DML : 데이터 조작 언어 ', score: 0}
        ],
        
        
    },
    { q:'7.(     )은 바깥 여백을, (     )은 내 안쪽 여백을 말한다.'
     ,a:[ 
        {answer: 'outline, inline', score: 0},
        {answer: 'padding, margin', score: 0},
        {answer: 'outside, inside', score: 0},
        {answer: 'margin, padding', score: 1},
        ],
        
        
    },
    { q:'8. 특정 문자로 문자열을 나누고 싶을 때 쓰는 명령어는?'
     ,a:[
        
        {answer: 'divide', score: 0},
        {answer: 'share', score: 0},
        {answer: '%', score: 0},
        {answer: 'split', score: 1},
        ],
        
        
    },
    { q:'9. 다음 중 Head 안에 들어가는 대표적인 요소가 아닌 것은?'
     ,a:[
        
        {answer: 'meta', score: 0},
        {answer: 'section', score: 1},
        {answer: 'script', score: 0},
        {answer: 'link', score: 0}
        ],
       
        
    },
    { q:'10.다음 중 "제목"을 나타나는 코드는?'
     ,a:[
        
        {answer: 'div', score: 0},
        {answer: 'input', score: 0},
        {answer: 'H1', score: 1},
        {answer: 'url', score: 0}
        ],
        
        
    }
]



const infoList = [
    {   from: 0,
        to:4,
        name: '포기 하지말고 <코딩 왕초보 KID>',
        desc: '괜찮아(짝!) 괜찮아(짝!) 우리 포기 하지말고 한번 만 더 차근차근 수강해봐요~ 안보이던 것이 보이는 MAGIC~~'
    },
    {   from: 5,
        to:7,
        name: ' 한번만 더 <코딩 왕초보 WARRIOR>',
        desc: '굿굿 Not Bad~ 5주는 아무래도 쉽지 않죠? 이번엔 잘안되는 부분 위주로 공부해봐요~ 그러면 걱정없는 워리어가 될꺼에요~',
        

    },
    {   from:8,
        to:10,
        name: '이제 다음 단계로 가도 되는 <왕초보 KING>',
        desc: '짝짝짝~ 그동안 성실히 5주간 웹개발 왕초보반을 수행하셨군요! "시작이 반이다" 처음이 가장 어렵죠,,하지만 그걸 해낸 당신! 앞으로 을마나 잘할지 기대가 됩니다!'
    }
    
]
