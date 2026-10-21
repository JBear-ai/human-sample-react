import { useEffect, useState } from "react";

const Information = () => {
  const [name, setName] = useState("");
  const [nickname, setNickName] = useState("");
  const [addr, setAddr] = useState("");

  useEffect(() => {
    console.log("렌더링이 완료되었습니다.");
    console.log({ name, nickname, addr });
  }, [name]);

  return (
    <>
      <label>
        이름
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        ></input>
      </label>
      {""}
      <br></br>
      <label>
        별명
        <input
          type="text"
          onChange={(e) => {
            setNickName(e.target.value);
          }}
          value={nickname}
        ></input>
      </label>
      {""}
      <br></br>
      <label>
        주소
        <input
          type="text"
          onChange={(e) => {
            setAddr(e.target.value);
          }}
          value={addr}
        ></input>
      </label>
      {""}
      <br></br>

      <div>
        <p>이름: {name}</p>
        <p>별명: {nickname}</p>
        <p>주소: {addr}</p>
      </div>
    </>
  );
};

export default Information;
