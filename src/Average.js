import { useMemo, useState } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산 중");
  if (numbers.length === 0) return 0;

  const sum = numbers.reduce((a, b) => a + b);
  // for문을 안쓰기위해 reduce함수로 처리
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const onInsert = () => {
    const nextList = [...list, parseInt(number)];
    setList(nextList);
    setNumber("");
  };

  // 콜백함수
  const avg = useMemo(() => getAverage(list, [list]));

  // 정해진 패턴이며 많아봤자 10개

  return (
    <>
      <label>
        정수 입력{""}
        <input
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        ></input>
      </label>
      <button onClick={onInsert}>등록</button>
      <ul>
        {list && list.map((e, index) => <li key={index}>{e}</li>)}
        <p>평균값: {useMemo(() => getAverage(list), [list])}</p>
      </ul>
    </>
  );
};

export default Average;
