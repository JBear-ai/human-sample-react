// Props: 부모 컴포넌트에서 자식 컴포넌트로 전달되는 데이터  함수의 매개변수와 비슷하다
// props는 키워드가 아니고 객체라 props를 x로 바꿔도 상관없다.

// 함수형 컴포넌트 생성: 화살표 함수
// props: 객체로 이루어져 있음 (키와 값으로 구성된 속성들이 존재)
// 구조 분해 / 비구조화 할당 : {}
const WelcomeProp = (props) => {
  // 구조 분해 방식
  // 기본값 인자 사용
  const { name = "없음", gender = "F", age = 0, address = "서울" } = props;
  return (
    <>
      <h3>이름: {name}</h3>
      <p>성별: {gender}</p>
      <p>나이: {age}</p>
      <p>주소: {address}</p>
    </>
  );
};

export default WelcomeProp;
