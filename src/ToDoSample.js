import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

const sample = [
  { id: 1, text: "HTML 연습" },
  { id: 2, text: "CSS 복습" },
  { id: 3, text: "자바스크립트이해" },
  { id: 4, text: "리액트프로젝트" },
];

const ToDoSample = () => {
  const [todoData, setTodoData] = useState(() => {
    const storeTodos = localStorage.getItem("todos");
    // 웹 브라우저의 저장소에서 키 이름이 () 값을 가져옴
    // 브라우저마다 로컬스토리지가 다 다름
    return storeTodos ? JSON.parse(storeTodos) : sample;
  });
  // 초기 데이터가 todoData에 들어감  상태관리(렌더링 조건을 만들기 위해서 사용)

  const [inputText, setInputText] = useState("");
  // 입력에 대한 상태관리

  const [nextId, setNextId] = useState(5);
  // 아이디 증가에 대한 상태관리
  // 백엔드가 있으면 이런방식은 사용하지 않음 (기본적인 문법 공부)

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoData));
  }, [todoData]);
  // 생명주기 관리 / 렌더링 이후에 다음 동작을 지정하는 역할

  const onClick = () => {
    const nextTodos = [...todoData, { id: nextId, text: inputText }];
    // 불변성의 원칙에 의해 만듬 리액트는 주소가 바뀌어야 한다
    // 새로바뀐 데이터는 바로 변경하는게 아닌 new datas(새 배열)를 만들어 넣는다
    // 데이터가 바뀌는건 신경을 안쓰고 데이터의 주소가 바뀌었는가에 중점을 둔다

    setNextId(nextId + 1);
    // id를 1 증가 시킴
    setTodoData(nextTodos);
    // 불변성의 원칙을 지킴
    setInputText("");
    // input 창을 지워 주는 역할
  };

  const onRemove = (id) => {
    const nextTodos = todoData.filter((todo) => todo.id !== id);
    //
    setTodoData(nextTodos);
  };

  // setInputText(e.target.value)만 쓰면 함수가 바로 호출이 되어버림
  // 그래서 앞에 => 붙임 그러면 체인지가 감지가되면 이벤트발생으로 e가 함수를 호출함

  // onClick={onClick} == {() => onClick()}
  // 호출이되냐 등록이되냐 구분을 할것

  // map을 사용해서 데이터를 추가함
  // 이번에는 삭제
  return (
    <>
      <input
        type="text"
        value={inputText}
        placeholder="내용을 입력하세요."
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onClick();
          }
        }}
      ></input>
      <button className="addbtn" onClick={onClick}>
        추가
      </button>
      <ul>
        {todoData &&
          todoData.map((todo) => (
            <li key={todo.id} onDoubleClick={() => onRemove(todo.id)}>
              {todo.text}
            </li>
          ))}
      </ul>
    </>
  );
};

export default ToDoSample;
