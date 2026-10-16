import { useState } from "react";

// State and Lifecycle

const Say = () => {
  const [message, setMessage] = useState(""); // 상태 관리를 위해 useState 사용
  const [color, setColor] = useState("black"); // 색상 상태 관리

  // {}한개와 {{}} 두개 차이가 무엇일까?
  // {} 한개는 자바스크립트 표현식을 의미하고, {{}} 두개는 객체 리터럴을 의미합니다.

  // 실습 과제  1교시
  // 보라색 버튼, 노란색 버튼 추가하기
  // 웰컴, 환영합니다. {}님 이름 변수 만들기
  const [name, setName] = useState("");
  return (
    <>
      <input
        type="text"
        placeholder="이름 입력"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <br />
      <button onClick={() => setMessage(`안녕하세요, ${name}님!`)}>
        인사말
      </button>
      <button onClick={() => setMessage(`안녕히 가세요, ${name}님.`)}>
        작별인사
      </button>
      <button onClick={() => setMessage(`환영합니다. ${name}님`)}>웰컴</button>
      <button onClick={() => setMessage("")}>메시지 지우기</button>

      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        빨간색
      </button>

      <button style={{ color: "green" }} onClick={() => setColor("green")}>
        초록색
      </button>

      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
        파란색
      </button>

      <button style={{ color: "purple" }} onClick={() => setColor("purple")}>
        보라색
      </button>

      <button style={{ color: "orange" }} onClick={() => setColor("orange")}>
        주황색
      </button>
    </>
  );
};

export default Say;
