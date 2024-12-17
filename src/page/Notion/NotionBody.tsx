// NotionBody.tsx
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
  height: 441.7px;
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

type NotionProps = {
  Num: number;
  User: string;
  Title: string;
  Time: string;
};

function NotionBody() {
  const count = 0;

  const TempArray: NotionProps[] = [
    {
      Num: 1,
      User: "1412 이상혁",
      Title: "메이플 진힐라 팟 급구@@@@ 260, 전투력 1억이상",
      Time: "2024.12.16",
    },
    {
      Num: 2,
      User: "김태은",
      Title: "Rainbow Friends 팀원 급구!!",
      Time: "2024.12.17",
    },

    { Num: 3, User: "이상혁", Title: "도토리구함@@", Time: "2024.12.16" },
    {
      Num: 4,
      User: "최준영",
      Title: "JOVA팀원 모집합니다",
      Time: "2024.12.16",
    },
    { Num: 5, User: "황지훈", Title: "밥 한 끼만 사주세요", Time: "2024.1.27" },
    {
      Num: 6,
      User: "서경주",
      Title: "밥 한 끼 사드릴께요",
      Time: "2077.27.01",
    },
    { Num: 7, User: "이주언", Title: "섹스하고 싶다", Time: "202.27.01" },
    {
      Num: 8,
      User: "박현민",
      Title: "여자친구 사귄 날짜: 2026. 2.30ㅋ",
      Time: "2024.12.16",
    },
    {
      Num: 9,
      User: "박승일",
      Title: "AI 재밌어요 진짜로 많이 하세요",
      Time: "2024.12.16",
    },
    {
      Num: 10,
      User: "이가은",
      Title: "GSM 빈자리 들어가고 싶습니다",
      Time: "2024.12.16",
    },
  ];

  return (
    <Wrapper>
      <Text>공지사항</Text>
      <DividSpace />
      <TextP marginLeft={0}>전체 {count}건</TextP>
      <ListWrapper>
        <TextP marginLeft={65}>No</TextP>
        <TextP marginLeft={108}>작성자</TextP>
        <TextP marginLeft={353}>제목</TextP>
        <TextP marginLeft={346}>등록일</TextP>
      </ListWrapper>
      <MiniNotionWrapper>
        {TempArray.map((Notion, index) => (
          <MiniNotion
            key={index}
            Num={Notion.Num}
            User={Notion.User}
            Title={Notion.Title}
            Time={Notion.Time}
          />
        ))}
      </MiniNotionWrapper>
    </Wrapper>
  );
}

export default NotionBody;
