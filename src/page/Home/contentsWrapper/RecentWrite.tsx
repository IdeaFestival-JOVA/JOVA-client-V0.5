import styled from "styled-components";
import MiniCard from "../../../components/MiniCard";

const Text = styled.h1`
  font-family: "Pretendard-Regular", sans-serif;
  margin: 0;
  font-weight: regular;
  font-size: 20px;
`;

const Wrapper = styled.div`
  width: 541px;
  height: 236px;
  background-color: white;
`;

const WriteWrapper = styled.div`
  width: 540px;
  height: 200px;
  background-color: white;
  margin-top: 15px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`;

type NotionProps = {
  title: string;
  content: string;
  category: string;
  createdAt: string;
  endsAt: string;
  author: string;
  Num?: number;
};

function RecentWrite() {
  const NotionArray: NotionProps[] = [
    {
      title: "이상혁은은 신이야",
      content: "# 내가 바로 정의다",
      category: "FRONTEND",
      createdAt: "2024.12.1",
      endsAt: "2024.12.31",
      author: "이상혁",
    },
    {
      title: "Frontend Master",
      content: "# 코드로 세상을 바꾸다",
      category: "FRONTEND",
      createdAt: "2024.12.5",
      endsAt: "2024.12.25",
      author: "김프론트",
    },
    {
      title: "React의 모든 것",
      content: "# 컴포넌트 설계의 정석",
      category: "FRONTEND",
      createdAt: "2024.12.10",
      endsAt: "2024.12.30",
      author: "박리액트",
    },
    {
      title: "UI/UX 혁신",
      content: "# 사용자를 위한 디자인",
      category: "FRONTEND",
      createdAt: "2024.12.15",
      endsAt: "2024.12.29",
      author: "정유아이",
    },
  ];

  return (
    <Wrapper>
      <Text>공지</Text>
      <WriteWrapper>
        {NotionArray.map((data, index) => {
          if (index < 4)
            return (
              <MiniCard
                title={data.title}
                author={data.author}
                createdAt={data.createdAt}
              />
            );
        })}
      </WriteWrapper>
    </Wrapper>
  );
}

export default RecentWrite;
