import { useState } from "react"; // 상태관리

const DropDown = () => {
  const [selectValue, setSelectValue] = useState("");

  // 셀렉트박스 방식
  return (
    <>
      <h2>드롭다운 예시</h2>
      <select
        value={selectValue}
        onChange={(e) => setSelectValue(e.target.value)}
      >
        <option value="" disabled>
          과일을 선택해주세요
        </option>
        <option value="apple">사과</option>
        <option value="banana">바나나</option>
        <option value="grape">포도</option>
        <option value="orange">오렌지</option>
      </select>
      <h3>선택된 과일: {selectValue}</h3>
    </>
  );
};

export default DropDown;
