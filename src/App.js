import "./App.css";
import React from "react";
// import WelcomeProp from "./WelcomProp";
// import Article from "./Article";
// import BoardDto from "./BoardDto";
// import Say from "./Say";
import InputEvent from "./InputEvent";

// const data = [
//   {
//     // 뉴스 데이터 'e'가 밑에 내용을 의미함
//     title: "정치",
//     content: "민주당과 국민의힘이 열심히 싸우고 있습니다.",
//     author: "MBC 뉴스 기자",
//     date: "2026-10-15 03:00 PM",
//   },
//   {
//     tutle: "경제",
//     content: "코스피 폭락중~~~",
//     author: "KBS 뉴스 기자",
//     date: "2026-10-15 03:10 PM",
//   },
//   {
//     tutle: "사회",
//     content: "부산의 인기스타가 된 부캉이 집은 언제 돌아갈까?",
//     author: "SBS 뉴스 기자",
//     date: "2026-10-15 03:20 PM",
//   },
//   {
//     tutle: "문화",
//     content: "사람들이 책을 읽지 않아서 서점의 매출이 감소하고 있습니다.",
//     author: "안유진 기자",
//     date: "2026-10-15 03:30 PM",
//   },
//   {
//     tutle: "스포츠",
//     content: "축구 경기 결과 발표",
//     author: "MBC 스포츠 기자",
//     date: "2026-10-15 03:40 PM",
//   },
// ];

// const data2 = [
//   {
//     id: 1,
//     title: "오늘 점심 메뉴 추천해주세요",
//     content: "매일 점심 메뉴를 고르는 게 고민이네요. 다들 오늘 뭐 드셨나요?",
//     LocalDateTime: "2026-10-15 03:00 PM",
//     name: "점심고민",
//     viewCount: 12,
//   },
//   {
//     id: 2,
//     title: "퇴근 후 운동 시작했습니다",
//     content: "요즘 체력이 떨어진 것 같아서 퇴근 후 30분씩 걷고 있습니다.",
//     LocalDateTime: "2026-10-15 02:30 PM",
//     name: "운동초보",
//     viewCount: 25,
//   },
//   {
//     id: 3,
//     title: "주말에 갈 만한 곳 있을까요?",
//     content:
//       "이번 주말에 친구들과 놀러 가려고 하는데 좋은 장소 추천 부탁드립니다.",
//     LocalDateTime: "2026-10-15 01:20 PM",
//     name: "주말여행",
//     viewCount: 34,
//   },
//   {
//     id: 4,
//     title: "요즘 날씨가 많이 쌀쌀하네요",
//     content: "아침저녁으로 기온이 내려가서 이제 겉옷을 챙겨야겠어요.",
//     LocalDateTime: "2026-10-15 11:40 AM",
//     name: "가을사람",
//     viewCount: 18,
//   },
//   {
//     id: 5,
//     title: "집에서 간단하게 요리해 봤어요",
//     content: "오늘은 김치볶음밥을 만들어 먹었는데 생각보다 맛있었습니다.",
//     LocalDateTime: "2026-10-14 07:10 PM",
//     name: "자취요리사",
//     viewCount: 42,
//   },
//   {
//     id: 6,
//     title: "요즘 재미있는 드라마 추천받아요",
//     content: "퇴근하고 볼 드라마를 찾고 있습니다. 재미있는 작품 있을까요?",
//     LocalDateTime: "2026-10-14 05:30 PM",
//     name: "드라마팬",
//     viewCount: 57,
//   },
//   {
//     id: 7,
//     title: "카페에서 공부하는 게 좋네요",
//     content:
//       "집에서는 집중이 잘 안 되는데 카페에 나오니 공부가 잘되는 것 같습니다.",
//     LocalDateTime: "2026-10-14 03:15 PM",
//     name: "공부중",
//     viewCount: 21,
//   },
//   {
//     id: 8,
//     title: "새로운 취미를 찾고 있습니다",
//     content: "최근에 여유 시간이 생겨서 새로운 취미를 시작해 보려고 합니다.",
//     LocalDateTime: "2026-10-13 08:00 PM",
//     name: "취미탐색",
//     viewCount: 39,
//   },
//   {
//     id: 9,
//     title: "아침 일찍 일어나는 방법이 있을까요?",
//     content:
//       "알람을 여러 개 맞춰도 아침에 일어나기가 어렵네요. 좋은 방법 있을까요?",
//     LocalDateTime: "2026-10-13 09:20 AM",
//     name: "늦잠쟁이",
//     viewCount: 63,
//   },
//   {
//     id: 10,
//     title: "오늘 하루도 수고하셨습니다",
//     content:
//       "월요일부터 바쁘게 지냈는데 벌써 한 주의 중간이네요. 모두 힘내세요!",
//     LocalDateTime: "2026-10-12 06:40 PM",
//     name: "행복한하루",
//     viewCount: 46,
//   },
// ];

function App() {
  // 자바스크립은 문법 구간
  // App는 최상위 부모 컴포넌트 이며 시작점이 되는 컴포넌트이다.

  return (
    // 화면을 그려주는 구간
    // <> 감싸인 태그는 하나만 있어야 한다.
    // 여러개를 쓰고 싶으면 fragment를 사용하면 된다.
    // 정수형은 {}로 감싸서 전달해야 한다. 문자열은 ""로 감싸서 전달하면 된다.
    // welcomeProp와 Article은 자식 컴포넌트이다.
    // props를 통해 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달할 수 있다.

    <>
      {/* <h1>props를 통한 데이터 전달(오늘의 뉴스)</h1>
      {data && data.map((e, index) => <Article key={index} data={e} />)}

      <h1>props를 통한 데이터 전달(오늘의 게시판)</h1>
      {data2 &&
        data2.map((board, index) => <BoardDto key={index} data2={board} />)} */}
      {/* <Say />; */}
      <InputEvent />
    </>
  );
}

export default App;
