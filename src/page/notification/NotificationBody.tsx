import styled from "styled-components";
import { useState, useEffect } from "react";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const WrapperBox = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const BodyWrapper = styled.div`
  width: 1067px;
  height: 528px;
  padding-top: 105px;
`;

const Input = styled.input`
  margin-top: 38px;
  width: 1067px;
  height: 52px;
  border: 1px solid #dfdfdf;
  border-radius: 5px;
  color: black;

  &::placeholder {
    color: #dfdfdf;
  }
`;

const TextArea = styled.textarea`
  width: 1067px;
  height: 356px;
  border: 1px solid #dfdfdf;
  border-radius: 5px;
  margin-top: 40px;
  resize: none;

  &::placeholder {
    color: #dfdfdf;
  }
`;

const DragAndDropArea = styled.div`
  border: 2px dashed #dfdfdf;
  border-radius: 5px;
  padding: 20px;
  margin-top: 20px;
  width: 1067px;
  text-align: center;
  background-color: #fafafa;
`;

function NotificationBody() {
  const [contents, setContents] = useState<string>(
    "# 마크다운 ```문법```을 사용해 작성해 주세요"
  );

  const handleFileUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      const base64Image = reader.result as string;
      const imageId = `image-${Date.now()}`;
      const markdownImageTag = `![Image ${imageId}](${base64Image})`;
      setContents((prev) => `${prev}\n\n${markdownImageTag}`);
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      if (file.type.startsWith("image/")) {
        handleFileUpload(file);
      } else {
        alert("이미지 파일만 업로드 가능합니다.");
      }
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  // 이미지 태그 제거 시 처리 (생략 가능, Markdown 자체로만 관리)
  useEffect(() => {
    // 향후 필요하면 삭제 처리 가능
  }, [contents]);

  return (
    <WrapperBox>
      <BodyWrapper>
        <h1>공지 작성</h1>
        <Input placeholder="제목을 입력해 주세요" />
        <TextArea
          placeholder="마크다운문법을 사용해 작성하세요"
          value={contents}
          onChange={(e) => setContents(e.target.value)}
        />
        <DragAndDropArea onDrop={handleDrop} onDragOver={handleDragOver}>
          이미지를 드래그 앤 드롭하거나 클릭하여 업로드하세요.
        </DragAndDropArea>
        <Markdown rehypePlugins={[rehypeRaw]}>{contents}</Markdown>
      </BodyWrapper>
    </WrapperBox>
  );
}

export default NotificationBody;
