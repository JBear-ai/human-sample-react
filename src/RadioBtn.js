import { useState } from "react";

const RadioBtn = () => {
  const [selectedValue, setSelectedValue] = useState("");

  function handleChange(event) {
    setSelectedValue(event.target.value);
  }

  // 라디오버튼 방식
  return (
    <>
      <h3>라디오 버튼</h3>
      <label htmlFor="그랜저">
        <input type="radio" name="car" value="그랜저" onChange={handleChange} />
        그랜저
      </label>
      <br />
      <label htmlFor="싼타페">
        <input type="radio" name="car" value="싼타페" onChange={handleChange} />
        싼타페
      </label>
      <br />
      <label htmlFor="제네시스">
        <input
          type="radio"
          name="car"
          value="제네시스"
          onChange={handleChange}
        />
        제네시스
      </label>
      <br />
      <p>탑승할 차량: {`${selectedValue}`}</p>
    </>
  );
};

export default RadioBtn;
