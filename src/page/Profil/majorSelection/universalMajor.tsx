import styled from "styled-components";

const MajorBox = styled.div`
  display: inline-block;
  background-color: #e0e0e0;
  color: #333;
  padding: 6px 12px; /* 텍스트 양옆 여백 */
  margin: 4px; /* 박스 간 간격 */
  border-radius: 12px; /* 둥근 테두리 */
  font-size: 14px;
  text-align: center;
  white-space: nowrap; /* 텍스트 줄바꿈 방지 */
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1); /* 약간의 그림자 */
`;

function UniversalMajor() {
  return (
    <div>
      <MajorBox>프론트엔드</MajorBox>
      <MajorBox>백엔드</MajorBox>
      <MajorBox>DevOps</MajorBox>
      <MajorBox>UI/UX design</MajorBox>
      <MajorBox>AI</MajorBox>
      <MajorBox>안드로이드</MajorBox>
      <MajorBox>iOS</MajorBox>
      <MajorBox>DB</MajorBox>
    </div>
  );
}

export default UniversalMajor;
