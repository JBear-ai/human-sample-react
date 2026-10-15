const BoardDto = ({ data2 }) => {
  return (
    <>
      <h2>제목: {data2.title}</h2>
      <p>내용: {data2.content}</p>
      <p>작성일: {data2.LocalDateTime}</p>
      <p>작성자: {data2.name}</p>
      <p>조회수: {data2.viewCount}</p>
    </>
  );
};

export default BoardDto;
