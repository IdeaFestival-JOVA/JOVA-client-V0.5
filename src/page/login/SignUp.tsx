import styled from "styled-components";
import Header from "../../components/Header";

export default SignUp;

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const InputContainer = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-size: 14px;
  color: #555;
  margin-bottom: 5px;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const SignUpButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const Wrapper = styled.div`
  padding-top: 200px;
  height: 100%;
`;

function SignUp() {
  return (
    <>
      <Header />
      <Wrapper>
        <SignUpContainer>
          <Title>회원가입</Title>
          <Form>
            <InputContainer>
              <Label htmlFor="email">이메일</Label>
              <Input
                type="email"
                id="email"
                placeholder="이메일을 입력하세요"
              />
            </InputContainer>
            <InputContainer>
              <Label htmlFor="username">성명</Label>
              <Input
                type="text"
                id="username"
                placeholder="성명을 입력하세요"
              />
            </InputContainer>
            <InputContainer>
              <Label htmlFor="password">반</Label>
              <Input
                type="password"
                id="password"
                placeholder="반을을 입력하세요"
              />
            </InputContainer>
            <InputContainer>
              <Label htmlFor="passwordConfirm">학년</Label>
              <Input
                type="password"
                id="passwordConfirm"
                placeholder="학년을 입력하세요"
              />
            </InputContainer>
            <InputContainer>
              <Label htmlFor="passwordConfirm">번호</Label>
              <Input
                type="password"
                id="passwordConfirm"
                placeholder="번호를 입력하세요"
              />
            </InputContainer>
            <SignUpButton>회원가입</SignUpButton>
          </Form>
        </SignUpContainer>
      </Wrapper>
    </>
  );
}
