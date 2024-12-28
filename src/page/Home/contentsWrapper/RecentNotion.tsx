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

const NotionWrapper = styled.div`
  width: 540px;
  height: 200px;
  background-color: white;
  margin-top: 15px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

type JobProps = {
  title: string;
  content: string;
  category: string;
  createdAt: string;
  endsAt: string;
  author: string;
  Num?: number;
};

function RecentNotion() {
  const JobArray: JobProps[] = [
    {
      title: "React를 마스터하자",
      content: "# React Hooks는 신세계다",
      category: "FRONTEND",
      createdAt: "2024.12.1",
      endsAt: "2024.12.31",
      author: "김지훈",
    },
    {
      title: "CSS-in-JS의 매력",
      content: "# Emotion과 styled-components",
      category: "FRONTEND",
      createdAt: "2024.12.2",
      endsAt: "2024.12.30",
      author: "박민수",
    },
    {
      title: "TypeScript를 정복하자",
      content: "# Type을 통한 코드 안정성",
      category: "FRONTEND",
      createdAt: "2024.12.3",
      endsAt: "2024.12.29",
      author: "이하늘",
    },
    {
      title: "프론트엔드 성능 최적화",
      content: "# Lighthouse 100점 만들기",
      category: "FRONTEND",
      createdAt: "2024.12.4",
      endsAt: "2024.12.28",
      author: "정윤아",
    },
  ];

  return (
    <Wrapper>
      <Text>구인구직 판</Text>
      <NotionWrapper>
        {JobArray.map((data, index) => {
          if (index < 4)
            return (
              <MiniCard
                title={data.title}
                userName={data.author}
                createdAt={data.createdAt}
                date={data.endsAt}
                content={data.content}
              />
            );
        })}
      </NotionWrapper>
    </Wrapper>
  );
}

export default RecentNotion;
