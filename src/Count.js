// import { useState } from "react";
// import { useEffect } from "react";

// const Count = () => {
//   // useState 예제
//   // const [number, setNumber] = useState(0);

//   const [flag, setFlag] = useState(false);
//   let number = 0;

//   const numInc = () => {
//     number += 1;
//     console.log(number);

//     // flag 값을 변경해서 컴포넌트를 다시 렌더링시킴
//     setFlag(!flag);
//   };

//   const numDec = () => {
//     number -= 1;
//     console.log(number);

//     // flag 값이 변경되면 React가 다시 렌더링함
//     setFlag(!flag);
//   };

//   /*
//     일반 변수(let)는 값 자체는 변경할 수 있지만,
//     값이 바뀌었다고 해서 React가 자동으로 다시 렌더링하지는 않는다.

//     또한 컴포넌트가 다시 렌더링되면 함수가 다시 실행되기 때문에
//     let number = 0도 다시 실행되어 number 값이 0으로 초기화된다.
//   */

//   /*
//     useState를 사용하는 이유

//     1. 렌더링 사이에서도 값을 유지할 수 있다.
//     2. setter 함수로 값을 변경하면 React가 다시 렌더링한다.
//     3. 화면에 표시되는 값이 변경되어야 할 때 사용한다.
//   */

//   /*
//     useRef와의 차이

//     useRef도 렌더링 사이에서 값을 유지할 수 있다.
//     하지만 ref의 값이 변경되어도 그 자체로는 다시 렌더링되지 않는다.

//     useState
//     - 값 유지 O
//     - 값 변경 시 재렌더링 O

//     useRef
//     - 값 유지 O
//     - 값 변경 시 재렌더링 X
//   */

//   return (
//     <>
//       <h3>현재 카운터 : {number}</h3>

//       {/* useState를 이용한 카운터 예제 */}
//       {/*
//       <button onClick={() => setNumber(number + 1)}>증가</button>
//       <button onClick={() => setNumber(number - 1)}>감소</button>
//       */}

//       <button onClick={numInc}>증가</button>
//       <button onClick={numDec}>감소</button>

//       <br />

//       <h3>정보 조회</h3>
//     </>
//   );
// };
// export default Count;
