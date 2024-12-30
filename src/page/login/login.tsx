import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LoginButton from "./loginBtn";
import styled from "styled-components";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Wrapper = styled.div`
  padding-top: 200px;
  width: 99vw;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;

const SignUpBtn = styled.p`
  color: skyblue;
`;

const Login = () => {
  const query = useQuery();
  const code = query.get("code");

  const go = useNavigate();

  const handleClick = () => go("/signup");

  useEffect(() => {
    if (code) {
      const postCode = async () => {
        try {
          const response = await fetch(
            "https://port-0-jova-backend-m0kvtwm45b2f2eb2.sel4.cloudtype.app/auth/login",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ code: code }),
            }
          );

          const result = await response.json();
          console.log("Response:", result);
        } catch (error) {
          console.error("Error:", error);
        }
      };

      postCode();
    }
  }, [code]);

  return (
    <Wrapper>
      <h1>로그인하고 다양한 서비스를 누려보세요!</h1>
      <SignUpBtn onClick={handleClick}>
        계정이 없나요? 회원가입을 해보세요
      </SignUpBtn>
      <LoginButton />
    </Wrapper>
  );
};

export default Login;
