import React, { useState } from "react";
import styled from "styled-components";

// 스타일 정의
const MajorBox = styled.div<{ isActive: boolean }>`
  display: inline-block;
  background-color: ${(props) => (props.isActive ? "#818181" : "#e0e0e0")};
  color: ${(props) => (props.isActive ? "#fff" : "#333")};
  padding: 6px 12px;
  margin: 4px;
  border-radius: 12px;
  font-size: 14px;
  text-align: center;
  white-space: nowrap;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  cursor: pointer; /* 클릭 가능 커서 */
  transition: background-color 0.3s, color 0.3s; /* 부드러운 색상 전환 */
`;

function UniversalMajor() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const majors = [
    "프론트엔드",
    "백엔드",
    "DevOps",
    "UI/UX design",
    "AI",
    "안드로이드",
    "iOS",
    "DB",
  ];

  const handleClick = (index: number) => {
    setActiveIndex(index); // 클릭된 항목의 인덱스를 저장
  };

  return (
    <div>
      {majors.map((major, index) => (
        <MajorBox
          key={index}
          isActive={activeIndex === index} // 클릭된 항목만 활성화
          onClick={() => handleClick(index)}
        >
          {major}
        </MajorBox>
      ))}
    </div>
  );
}

export default UniversalMajor;
