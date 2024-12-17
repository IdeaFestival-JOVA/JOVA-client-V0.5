import { useState } from "react";
import styled from "styled-components";
import MiniNotion from "./MiniNotion";

const Text = styled.h1`
  font-family: "Pretendard-Regular", sans-serif;
  margin: 0;
  font-size: 44px;
`;

const Wrapper = styled.div`
  top: 100px;
  position: absolute;
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const DividSpace = styled.div`
  width: 20px;
  height: 2px;
  background-color: gray;
  margin-top: 20px;
  margin-bottom: 40px;
`;

type TextPProps = {
  marginLeft: number;
};

const TextP = styled.p<TextPProps>`
  font-family: "Pretendard-Regular", sans-serif;
  margin: 0;
  margin-left: ${({ marginLeft }) => `${marginLeft}px`};
`;

const MiniNotionWrapper = styled.div`
  width: 1103px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ListWrapper = styled.div`
  width: 1103px;
  height: 23px;
  display: flex;
  align-items: center;
  border-bottom: 4px solid gray;
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PageButton = styled.button<{ active: boolean }>`
  margin: 0 5px;
  padding: 5px 10px;
  background-color: ${({ active }) => (active ? "#007BFF" : "#f0f0f0")};
  color: ${({ active }) => (active ? "#fff" : "#000")};
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #007bff;
    color: #fff;
  }
`;

type NotionProps = {
  User: string;
  Title: string;
  Time: string;
};

function NotionBody() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const TempArray: NotionProps[] = [
    {
      User: "1412 이상혁",
      Title: "메이플 진힐라 팟 급구@@@@ 260, 전투력 1억이상",
      Time: "2024.12.16",
    },
    {
      User: "김태은",
      Title: "Rainbow Friends 팀원 급구!!",
      Time: "2024.12.17",
    },
    { User: "전준연", Title: "게이 섹스팟", Time: "2024.12.16" },
    { User: "최준영", Title: "JOVA팀원 모집합니다", Time: "2024.12.16" },
    { User: "황지훈", Title: "밥 한 끼만 사주세요", Time: "2024.1.27" },
    { User: "서경주", Title: "밥 한 끼 사드릴께요", Time: "2077.27.01" },
    { User: "이주언", Title: "섹스하고 싶다", Time: "202.27.01" },
    {
      User: "박현민",
      Title: "여자친구 사귄 날짜: 2026. 2.30ㅋ",
      Time: "2024.12.16",
    },
    {
      User: "박승일",
      Title: "AI 재밌어요 진짜로 많이 하세요",
      Time: "2024.12.16",
    },
    {
      User: "이가은",
      Title: "GSM 빈자리 들어가고 싶습니다",
      Time: "2024.12.16",
    },
    {
      User: "이준희",
      Title: "React와 TypeScript 공부 중!",
      Time: "2024.12.18",
    },
    { User: "김민수", Title: "UI/UX 디자이너 협업", Time: "2024.12.12" },
    { User: "최서연", Title: "앱 개발자 같이 공부해요", Time: "2024.12.13" },
    { User: "박지훈", Title: "스터디 모집 공지입니다", Time: "2024.12.14" },
    { User: "조현우", Title: "해커톤 팀원 급구!", Time: "2024.12.15" },
    {
      User: "김하늘",
      Title: "기획자와 함께 프로젝트할 분?",
      Time: "2024.12.16",
    },
    {
      User: "장민호",
      Title: "웹 개발 프로젝트 참여자 모집",
      Time: "2024.12.17",
    },
    {
      User: "신지수",
      Title: "프로그래밍 튜터링 모집합니다",
      Time: "2024.12.18",
    },
    { User: "오승민", Title: "모각코 같이 하실 분", Time: "2024.12.19" },
    { User: "배윤아", Title: "Vue.js 스터디 팀 모집 공지", Time: "2024.12.20" },
    { User: "정하윤", Title: "졸업작품 협업 구합니다", Time: "2024.12.21" },
    { User: "이상우", Title: "개발 공부방 참여자 모집", Time: "2024.12.22" },
    { User: "최연재", Title: "AI 모델링 해보실 분 구함", Time: "2024.12.23" },
    { User: "김도현", Title: "React Native 프로젝트 팀원", Time: "2024.12.24" },
    {
      User: "이수빈",
      Title: "게임 개발 프로젝트 팀 구합니다",
      Time: "2024.12.25",
    },
    { User: "강지훈", Title: "프리랜서 개발자 협업 모집", Time: "2024.12.26" },
    { User: "박유림", Title: "오픈소스 기여 함께해요", Time: "2024.12.27" },
    {
      User: "김성준",
      Title: "CSS 고수분들 조언 부탁드립니다",
      Time: "2024.12.28",
    },
    {
      User: "최민석",
      Title: "기초부터 배우는 프로젝트 팀",
      Time: "2024.12.29",
    },
    {
      User: "한지민",
      Title: "파이썬 알고리즘 스터디 팀원 구인",
      Time: "2024.12.30",
    },
    {
      User: "김민수",
      Title: "React 스터디 팀원 모집합니다!",
      Time: "2024.12.17",
    },
    {
      User: "이지은",
      Title: "알고리즘 스터디 발표 자료 공유",
      Time: "2024.12.16",
    },
    {
      User: "박철수",
      Title: "Kotlin 프로젝트 협업 인원 구합니다",
      Time: "2024.12.15",
    },
    {
      User: "최윤정",
      Title: "개발자 커리어 상담 진행합니다",
      Time: "2024.12.14",
    },
    {
      User: "장준혁",
      Title: "Hackathon 2024 팀원을 구합니다",
      Time: "2024.12.13",
    },
    {
      User: "윤하영",
      Title: "TypeScript 스터디 관련 공지사항",
      Time: "2024.12.12",
    },
    {
      User: "배수진",
      Title: "Java로 작성한 간단한 툴 배포합니다",
      Time: "2024.12.11",
    },
    {
      User: "정우성",
      Title: "프론트엔드와 백엔드 협업 세미나",
      Time: "2024.12.10",
    },
    {
      User: "한예슬",
      Title: "CSS-in-JS 라이브러리 비교와 사례",
      Time: "2024.12.09",
    },
    {
      User: "이강호",
      Title: "개발 관련 Q&A 세션 진행 안내",
      Time: "2024.12.08",
    },
    {
      User: "메타데이터",
      Title: "메타데이터 임의로 정했습니다",
      Time: "adfwaoirhvbn",
    },
  ];

  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedData = TempArray.slice(startIndex, startIndex + itemsPerPage);

  const totalPages = Math.ceil(TempArray.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Wrapper>
      <Text>공지사항</Text>
      <DividSpace />
      <TextP marginLeft={0}>전체 {TempArray.length}건</TextP>
      <ListWrapper>
        <TextP marginLeft={65}>No</TextP>
        <TextP marginLeft={108}>작성자</TextP>
        <TextP marginLeft={353}>제목</TextP>
        <TextP marginLeft={346}>등록일</TextP>
      </ListWrapper>
      <MiniNotionWrapper>
        {displayedData.map((notion, index) => (
          <MiniNotion
            key={startIndex + index}
            Num={startIndex + index + 1}
            User={notion.User}
            Title={notion.Title}
            Time={notion.Time}
          />
        ))}
      </MiniNotionWrapper>
      <PaginationWrapper>
        {Array.from({ length: totalPages }, (_, index) => {
          const pageNumber = index + 1;
          if (
            pageNumber === 1 ||
            pageNumber === totalPages ||
            Math.abs(pageNumber - currentPage) <= 1
          ) {
            return (
              <PageButton
                key={pageNumber}
                active={currentPage === pageNumber}
                onClick={() => handlePageChange(pageNumber)}
              >
                {pageNumber}
              </PageButton>
            );
          } else if (pageNumber === 2 || pageNumber === totalPages - 1) {
            return <p key={pageNumber}>...</p>;
          }
          return null;
        })}
      </PaginationWrapper>
    </Wrapper>
  );
}

export default NotionBody;
