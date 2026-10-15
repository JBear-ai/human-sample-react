// 기사제목
// 내용
// 작성일
// 작성자
// props로 전달 받아 표시 해보기
// default 설정 사용 할 것
// 구조 분해 사용 할것

const Article = (props) => {
  const {
    // 구조 분해 방식 및 기본값 설정
    title = "기사제목없음",
    content = "내용없음",
    date = "날짜없음",
    author = "작성자없음",
  } = props;
  return (
    <>
      <h3>기사제목: {title}</h3>
      <p>내용: {content}</p>
      <p>작성일: {date}</p>
      <p>작성자: {author}</p>
    </>
  );
};

export default Article;
