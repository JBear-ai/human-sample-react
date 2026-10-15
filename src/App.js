import "./App.css";
import React from "react";
import WelcomeProp from "./WelcomProp";
import Article from "./Article";

function App() {
  // 자바스크립은 문법 구간
  // App는 최상위 부모 컴포넌트 이며 시작점이 되는 컴포넌트이다.

  return (
    // 화면을 그려주는 구간
    // <> 감싸인 태그는 하나만 있어야 한다.
    // 여러개를 쓰고 싶으면 fragment를 사용하면 된다.
    // 정수형은 {}로 감싸서 전달해야 한다. 문자열은 ""로 감싸서 전달하면 된다.
    // welcomeProp와 Article은 자식 컴포넌트이다.
    // props를 통해 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달할 수 있다.

    <>
      <WelcomeProp
        name="강문석"
        gender="남자"
        age={23}
        address="천안시 목천읍"
      />
      <WelcomeProp />
      <Article
        title="리액트"
        content="리액트는 UI를 만들기 위한 자바스크립트 라이브러리이다."
        date="2026-10-15"
        author="강문석"
      />
      <Article />
    </>
  );
}

export default App;
