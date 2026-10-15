import "./App.css";
import React from "react";
import WelcomeProp from "./WelcomProp";

function App() {
  // 자바스크립은 문법 구간

  return (
    // 화면을 그려주는 구간
    // <> 감싸인 태그는 하나만 있어야 한다.
    // 여러개를 쓰고 싶으면 fragment를 사용하면 된다.
    // 정수형은 {}로 감싸서 전달해야 한다. 문자열은 ""로 감싸서 전달하면 된다.

    <>
      <WelcomeProp
        name="강문석"
        gender="남자"
        age={23}
        address="천안시 목천읍"
      />
      <WelcomeProp
        name="장원영"
        gender="여자"
        age={23}
        address="서울시 강남구"
      />
      <WelcomeProp
        name="안유진"
        gender="남자"
        age={23}
        address="대전시 문전동"
      />
    </>
  );
}

export default App;
