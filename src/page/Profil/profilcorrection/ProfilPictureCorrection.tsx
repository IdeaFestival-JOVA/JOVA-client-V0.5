import styled from "styled-components";
import baseImage from "../../../images/image/baseImage.png";

const Text = styled.h1`
  font-family: "Pretendard-Regular", sans-serif;
  margin: 0;
  font-size: 36px;
`;

const ProfilWrapper = styled.div`
  width: 1028px;
  height: 376px;
  display: flex;
  justify-content: space-between;
  margin-top: 85px;
  margin-left: 100px;
`;

const ProfilImage = styled.img`
  width: 376px;
  height: 376px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const ProfilInformationWrapper = styled.div`
  width: 562px;
  height: 376px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const ProfilInformation = styled(Text)`
  font-size: 20px;
  color: #6c6c6c;
`;

const ImformationWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ImageCorrection = styled.div`
  height: 463px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Body = styled.div`
  padding-top: 100px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ImageUpload = styled.div`
  border: 2px dashed #ccc;
  border-radius: 8px;
  width: 197px;
  height: 87px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #999;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
  }
`;

const ToBaseImage = styled.div`
  border-radius: 8px;
  width: 197px;
  height: 87px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: white;
  background-color: #929292;
  cursor: pointer;

  &:hover {
    background-color: #999;
  }
`;

const MiniBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const InputBox = styled.input`
  width: 400px;
  height: 51px;
  background-color: #f5f5f5;
  border-radius: 8px;
  border: 0;
`;

const MajorSellectBtn = styled.div`
  width: 135px;
  height: 47px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid #929292;
`;

function ProfilPictureCorrection() {
  return (
    <Body>
      <Text>개인정보 수정</Text>
      <ProfilWrapper>
        <ImageCorrection>
          <ProfilImage src={baseImage} />
          <MiniBoxWrapper>
            <ImageUpload>이미지 업로드하기</ImageUpload>
            <ToBaseImage>기본이미지</ToBaseImage>
          </MiniBoxWrapper>
        </ImageCorrection>
        <ProfilInformationWrapper>
          <ImformationWrapper>
            <ProfilInformation>이름:</ProfilInformation>
            <InputBox />
          </ImformationWrapper>
          <ImformationWrapper>
            <ProfilInformation>github:</ProfilInformation>
            <InputBox />
          </ImformationWrapper>
          <ImformationWrapper>
            <ProfilInformation>E-mail:</ProfilInformation>
            <InputBox />
          </ImformationWrapper>
          <ImformationWrapper>
            <ProfilInformation>전공:</ProfilInformation>
            <MajorSellectBtn>전공 선택</MajorSellectBtn>
          </ImformationWrapper>
        </ProfilInformationWrapper>
      </ProfilWrapper>
    </Body>
  );
}

export default ProfilPictureCorrection;
