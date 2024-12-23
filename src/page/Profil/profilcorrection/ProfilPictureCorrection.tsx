import styled from "styled-components";
import baseImage from "../../../images/image/baseImage.png";

const Text = styled.h1`
  font-family: "Pretendard-Regular", sans-serif;
  margin: 0;
  font-size: 36px;
`;

const ProfilWrapper = styled.div`
  width: 687px;
  height: 376px;
  display: flex;
  justify-content: space-between;
  margin-top: 85px;
  margin-right: 200px;
`;

const ProfilImage = styled.img`
  width: 376px;
  height: 376px;
  border-radius: 50%;
`;

const ProfilInformationWrapper = styled.div`
  width: 222px;
  height: 376px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const ProfilInformation = styled(Text)`
  font-size: 24px;
`;

const ImformationWrapper = styled.div``;

const ImageCorrection = styled.div`
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

function ProfilPictureCorrection() {
  return (
    <Body>
      <Text>마이 페이지</Text>
      <ProfilWrapper>
        <ImageCorrection>
          <ProfilImage src={baseImage} />
        </ImageCorrection>
        <ProfilInformationWrapper>
          <ImformationWrapper>
            <ProfilInformation>이름:</ProfilInformation>
          </ImformationWrapper>
          <ImformationWrapper>
            <ProfilInformation>github:</ProfilInformation>
          </ImformationWrapper>
          <ImformationWrapper>
            <ProfilInformation>E-mail:</ProfilInformation>
          </ImformationWrapper>
          <ImformationWrapper>
            <ProfilInformation>전공:</ProfilInformation>
          </ImformationWrapper>
        </ProfilInformationWrapper>
      </ProfilWrapper>
    </Body>
  );
}

export default ProfilPictureCorrection;
