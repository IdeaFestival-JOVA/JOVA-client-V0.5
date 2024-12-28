import styled from "styled-components";
import { useState } from "react";

const MajorBox = styled.div<{ isActive: boolean }>`
  display: inline-block;
  background-color: ${(props) => (props.isActive ? "#818181" : "#e0e0e0")};
  color: ${(props) => (props.isActive ? "#fff" : "#333")};
  padding: 6px 12px;
  margin: 4px;
  border-radius: 5px;
  font-size: 14px;
  text-align: center;
  white-space: nowrap;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  cursor: pointer; /* 클릭 가능 커서 */
  transition: background-color 0.1s, color 0.1s; /* 부드러운 색상 전환 */
`;

const FunctionMajorText = styled.h3`
  margin-right: 320px;
`;

function FunctionGroup() {
  const [activeIndices, setActiveIndices] = useState<number[]>([]);

  const majors = [
    "개임개발",
    "모바일로보틱스",
    "클라우드컴퓨팅",
    "플러터",
    "사이버보안",
    "IT네트워크",
  ];

  const handleClick = (index: number) => {
    if (activeIndices.includes(index)) {
      // 이미 활성화된 경우 배열에서 제거
      setActiveIndices(activeIndices.filter((i) => i !== index));
      console.log(activeIndices);
    } else {
      // 활성화되지 않은 경우 배열에 추가
      setActiveIndices([...activeIndices, index]);
      console.log(activeIndices);
    }
  };

  return (
    <div>
      <FunctionMajorText>기능반</FunctionMajorText>
      {majors.map((major, index) => (
        <MajorBox
          key={index}
          isActive={activeIndices.includes(index)} // 클릭된 항목인지 확인
          onClick={() => handleClick(index)}
        >
          {major}
        </MajorBox>
      ))}
    </div>
  );
}

export default FunctionGroup;
