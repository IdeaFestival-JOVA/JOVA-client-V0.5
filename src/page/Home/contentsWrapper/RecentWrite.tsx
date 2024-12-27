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
      title: "이상혁근 신이야",
      content: "# 내가 바로 정의다",
      category: "FRONTEND",
      createdAt: "2024.12.1",
      endsAt: "2024.12.31",
      author: "이상혁혁",
    },
  ];

  return (
    <Wrapper>
      <Text>공지</Text>
      <WriteWrapper>
        {NotionArray.map((data) => {
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
