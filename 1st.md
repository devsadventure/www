# 11/13(월) 1일차 TIL

- - - 

## HTML과 CSS, 웹 표준과 웹 접근성

### HTML
콘텐츠의 구조를 설계하는 것으로, 이미지를 구현하는 데 초점을 맞춰서는 안 된다.

### CSS
패션이라고 생각할 것. 상황에 맞는 옷을 어떻게 입힐 것인지 생각해야 한다.

### 웹 표준
다양한 브라우저마다 태그와 코드를 어떻게 해석할 것인지를 합의해 표준으로 만드는 작업.
 - [World Wide Web Consortiums (3WC)](https://www.w3.org/): 웹 표준을 개발하고 장려하는 조직. 팀 버너스 리를 중심으로 설립되었다.
 - [제프리 젤드만의 웹표준 가이드](http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=1024887) : 어떤 식으로 브라우저가 발전해왔는지를 보여주는 책.

### 웹 접근성
장애나 환경을 이유로 접근할 수 없는 서비스가 늘어나고 있다. 누구나 접근할 수 있는 보편적인 개발에 관심을 가지는 것이 중요. 여러 가지 장애에 대한 이해를 가져야 한다. 
```ex) iOS 보이스 오버 기능```

- - - 

### 환경에 대한 이해

#### 다양한 Platform
내가 만든 서비스가 여러 플랫폼에서 돌아가는지 항상 염두에 두어야 한다.

#### Cross Browsing

#### SEO(Search Engine Optimization)
검색 엔진 최적화. 알고리즘 상 표준을 잘 지키고 접근성을 준수했다면 상위에 노출시켜준다. 내가 만든 서비스가 잘 노출될 수 있도록 해준다.

ex) 페이지 <title></title>에 모델명을 노출. 타이틀이 어떤 효과를 담당하는지 모르고 만들면 "환영합니다", "어서오세요" 정도만 담는다.

#### 저사양 또는 저속회선
우리 나라는 네트워크가 빨라서, 저속회선에 대한 고민을 덜 하게 된다. 빠르게 최적화시키는 기술에 대해 알아야 한다.

#### 장애인 차별 금지 및 권리 구제 등에 관한 법률
cf. [원숭이 실험(동영상)](https://youtu.be/llQSJ6GLNwM): 동물조차도 차별에 민감하게 반응한다!

#### 4가지 원칙
1. Perceivable (인지, 자각)
2. Operable (운용)
3. Understandable (이해)
4. Robust (탄탄한, 견고한)

- - - 

### 개발환경 및 Git 설정
[김데레사 강사님 Github 1 링크](https://github.com/seulbinim/FC-FDS/blob/master/README/preferences.md) 참고
 cf. Git: 버전관리 프로그램. 나중에 배울 예정!

### 터미널 명령어
[김데레사 강사님 Github 2 링크](https://github.com/seulbinim/FC-FDS/blob/master/README/cli.md) 참고

- - -

## HTML 코드 살펴보기


    <!DOCTYPE html>
    <html lang="ko">

    <head>
        <meta charset="UTF-8">
        <title>웹카페 - HTML5, CSS3, 웹접근성</title>
    </head>

    <body>
        <div class="container">
            <header class="header">헤더</header>
            <div class="visual">비주얼</div>
            <main class="main-content">메인 콘텐트</main>
            <article class="slogan">슬로건</article>
            <footer class="footer">푸터</footer>
        </div>
    </body>

    </html>

- `<!DOCTYPE html>`을 선언해줘야 표준.
- `lang`: 공용속성(global attribute). 명령어와 관련 없이 쓸 수 있는 것.
    - ex) lang, id, class, title, style, data-* 등
    - `속성(attribute)="값"`으로 표시해준다. (meta 태그 관련)
-아래 두 개는 같은 코드이기 때문에 하나만 적어주면 된다. 우리는 좀 더 짧고 새로운 버전을 적어준다.
    - `<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">(구버전 코드)`
    - `<meta charset="utf-8"> (HTML5 코드)` <= 갓챠!
- 시안이 나오면 구조를 분석해야 함. 콘텐츠 관점에서 바라봐야 한다!
    - 웹 사이트는 3단 구조


    header
    navigator


    contents


    footer

- - -

## 트리구조
DOM TREE라고 부른다. 문서 안에서 최상위 요소가 HTML이라고 인식. 그 아래 호환되어 있는 요소를 인식. 자식요소가 2개. 가계도가 그려짐. 브라우저가 나중에 내부적으로 그리게 됨.
## 기타

- 줄바꿈은 왜 일어날까? -> CSS 부분!

- 컴파일러 언어: 컴파일을 하기 전까지는 언어의 형태를 확인할 수가 없음.
- 인터프리터 언어

***

## 단축키 사용 팁! 

- [Emmet](emmet.io)
    - `head+body` + `tab`: 형제선택자
    - `html:5` + `tab`: 기본형을 만들어준다

    - [cheatsheet 바로가기](https://docs.emmet.io/cheat-sheet/) 
- VS Code
    - `option + 방향키`: 코드 위치 조정 가능
    - `cmd + shift + P`: 토글!
    - `cmd + shift + K`: 커서가 놓여 있는 한 줄을 전체 다 제거할 때 사용.
    - [VS Code 도움말](https://code.visualstudio.com/docs/editor/codebasics)

- - -

## 예습 (생활코딩)

- [생활코딩 HTML](https://opentutorials.org/course/2039)
- [생활코딩 CSS](https://opentutorials.org/course/2418)
