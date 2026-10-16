// 과제
// 이름, 비밀번호, 나이, 주소, 이메일을 입력 받기
// 전부 입력이 완료 되었을떄 확인 버튼을 누르면 입력 받은 결과를 출력 하기

import { useState } from "react";

const InputEvent = () => {
  // 입력할 정보들
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");
  const [age, setAge] = useState("");
  const [addr, setAddr] = useState("");
  const [email, setEmail] = useState("");

  // 확인 버튼 눌렸을때의 결과 출력
  const [message, setMessage] = useState("");

  // 입력값마다 onChange 핸들러 따로 작성

  return (
    <>
      <p>입력 연습</p>
      <input
        type="text"
        placeholder="이름 입력"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <br />
      <input
        type="password"
        placeholder="비밀번호 입력"
        onChange={(pwd) => setPwd(pwd.target.value)}
        value={pwd}
      />
      <br />
      <input
        type="text"
        placeholder="나이 입력"
        onChange={(age) => setAge(age.target.value)}
        value={age}
      />
      <br />
      <input
        type="text"
        placeholder="주소 입력"
        onChange={(addr) => setAddr(addr.target.value)}
        value={addr}
      />
      <br />
      <input
        type="text"
        placeholder="이메일 입력"
        onChange={(email) => setEmail(email.target.value)}
        value={email}
      />

      <button
        onClick={() =>
          setMessage(
            `회원님의 정보는 ${name}님이며 
             회원님의 비밀번호는 ${pwd}이며 
             나이는${age} 
             현재 거주지는 ${addr}입니다. 
             이메일은${email}입니다.`,
          )
        }
      >
        확인
      </button>
      <p style={{ color: "black", whiteSpace: "pre-line" }}>{message}</p>
    </>
  );
};

export default InputEvent;
