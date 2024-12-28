import { useState } from "react";
import styled from "styled-components";

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
  cursor: pointer;
  transition: background-color 0.1s, color 0.1s;
`;

const FunctionMajorText = styled.h3`
  margin-right: 320px;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: cetner;
  border-radius: 10px;
`;

interface FunctionGroupProps {
  setActiveIndices: React.Dispatch<React.SetStateAction<number[]>>; // 상태 업데이트 함수
  setModal: (x: boolean) => void;
}

function FunctionGroup({ setActiveIndices, setModal }: FunctionGroupProps) {
  const [activeIndices, setMajor] = useState<number[]>([]);

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
      setMajor(activeIndices.filter((i) => i !== index));
    } else {
      setMajor([...activeIndices, index]);
    }
  };

  const handleProps = () => {
    setActiveIndices(activeIndices);
    setModal(false);
  };

  return (
    <div>
      <FunctionMajorText>기능반</FunctionMajorText>
      {majors.map((major, index) => (
        <MajorBox
          key={index}
          isActive={activeIndices.includes(index)}
          onClick={() => handleClick(index)}
        >
          {major}
        </MajorBox>
      ))}
      <Button onClick={handleProps}>제출</Button>
    </div>
  );
}

export default FunctionGroup;
