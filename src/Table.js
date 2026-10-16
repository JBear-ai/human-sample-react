import { useState, useEffect } from "react";

// 테이블 요소에 이벤트 추가하기
// ID, 이름, 나이, 주소로 구성된 배열 5개 생성

const rowData = [
  { id: 1, name: "강문석", age: 29, addr: "천안시" },
  { id: 2, name: "김민수", age: 25, addr: "서울시" },
  { id: 3, name: "이서연", age: 31, addr: "대전시" },
  { id: 4, name: "박지훈", age: 27, addr: "수원시" },
  { id: 5, name: "최유진", age: 24, addr: "부산시" },
];

const Table = () => {
  const [members, setMembers] = useState("");
  // setMembers는 안써도 된다고 하심

  useEffect(() => {
    // 서버에 대한 데이터를 비동기로 요청함
    setMembers(rowData);
  }, []); // [] 마운트 시점을 의미 함

  return (
    <>
      <h3>테이블 다요.</h3>
      <table>
        <tr>
          {/* <th>Id</th> */}
          <th>이름</th>
          <th>나이</th>
          <th>주소</th>
        </tr>
        {members &&
          members.map((member) => (
            <tr key={member.id} onClick={() => alert(member.name)}>
              {/* <td>{member.id}</td> */}
              <td>{member.name}</td>
              <td>{member.age}</td>
              <td>{member.addr}</td>
            </tr>
          ))}
      </table>
    </>
  );
};
export default Table;
