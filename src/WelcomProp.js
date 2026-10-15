// Props: 부모 컴포넌트에서 자식 컴포넌트로 전달되는 데이터  함수의 매개변수와 비슷하다
// properties의 줄임말  속성을 뜻함 속성은 key-value 쌍으로 이루어져 있다
// 기본적으로 객체다 이걸 줄여서 props라고 부른다

// props는 키워드가 아니고 객체라 props를 x로 바꿔도 상관없다.
const WelcomeProp = (props) => {
  return (
    <>
      <h3>이름: {props.name}</h3>
      <p>성별: {props.gender}</p>
      <p>나이: {props.age}</p>
      <p>주소: {props.address}</p>
    </>
  );
};

export default WelcomeProp;
