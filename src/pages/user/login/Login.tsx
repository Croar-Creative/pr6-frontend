import ContentWrap from "components/ContentWrap";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import {
   signInWithEmailAndPassword,
   signInWithPopup,
   GoogleAuthProvider,
} from "firebase/auth";
import { googleAuth } from "../../../firebase";
import googleLogo from "assets/images/users/login/logo_googleg_48dp@2x.png";
import kakaoLogo from "assets/images/users/login/Pr6-kakao-symbol@2x.png";

const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   margin: 85px 0;
   ${({ theme }) => theme.mediaQueries.mobile} {
      margin: 125px 0;
   }
`;

const Header = styled.header`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   margin-bottom: 85px;
   ${({ theme }) => theme.mediaQueries.mobile} {
      margin-bottom: 65px;
   }
`;

const Title = styled.h1`
   ${({ theme }) => theme.font.title2}
   ${({ theme }) => theme.mediaQueries.mobile} {
      ${({ theme }) => theme.font.title4}
   }
`;

const SubTitle = styled.h2`
   ${({ theme }) => theme.font.body1}
   ${({ theme }) => theme.mediaQueries.mobile} {
      ${({ theme }) => theme.font.body3}
   }
   margin-top: 1em;
`;

const InnerContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   width: 328px;
   ${({ theme }) => theme.mediaQueries.mobile} {
      width: 266px;
   }
`;

const LoginForm = styled.form`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 100%;
`;

const StyledInput = styled.input`
   font-size: 1.2rem;
   margin-bottom: 1em;
   padding: 0 2em;
   width: 100%;
   height: 44px;
   ${({ theme }) => theme.mediaQueries.mobile} {
      height: 36px;
   }
   border-radius: 999px;
   background-color: ${({ theme }) => theme.color.gray03};
   border: none;
   ::placeholder {
      color: ${({ theme }) => theme.color.gray05};
   }
   :focus {
      outline: none;
   }
`;

const EmailInput = styled(StyledInput).attrs({ type: "email" })``;

const PasswordInput = styled(StyledInput).attrs({ type: "password" })`
   margin-bottom: 2em;
`;

const SubmitInput = styled(StyledInput).attrs({ type: "submit" })<{
   error: boolean;
}>`
   background-color: ${({ theme, error }) =>
      error ? theme.color.gray08 : theme.color.yellow01};
   color: ${({ theme, error }) =>
      error ? theme.color.white01 : theme.color.black01};
   cursor: pointer;
   transition: all 0.2s ease-in-out;
   animation: ${({ error }) => (error ? Shake : "")} 0.82s
      cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
   :hover {
      transform: scale(1.02);
   }
   :hover:active {
      transform: scale(0.98);
   }
`;

const UserContainer = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-between;
`;

const SocialLoginContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   margin-top: 4.5em;
   width: 100%;
`;

const SocialLoginTitle = styled.h3`
   ${({ theme }) => theme.font.body2};
   margin-bottom: 1em;
`;

const SocialLoginButton = styled.button`
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 1.2rem;
   margin-bottom: 10px;
   padding: 0 2em;
   width: 100%;
   height: 44px;
   border-radius: 999px;
   background-color: ${({ theme }) => theme.color.gray03};
   ${({ theme }) => theme.mediaQueries.mobile} {
      height: 36px;
   }
   border: none;
   cursor: pointer;
   transition: transform 0.2s ease-in-out;
   :hover {
      transform: scale(1.02);
   }
   :hover:active {
      transform: scale(0.98);
   }
`;

const GoogleLoginButton = styled(SocialLoginButton)``;

const KakaoLoginButton = styled(SocialLoginButton)`
   background-color: #fee500;
`;

const Symbol = styled.img`
   width: 19px;
   margin-right: 10px;
`;

const Shake = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }

`;

interface AuthError {
   code:
      | "auth/invalid-email"
      | "auth/wrong-password"
      | "auth/user-not-found"
      | "auth/missing-password";
}

function Login() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState("");
   const navigate = useNavigate();

   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      try {
         const { user } = await signInWithEmailAndPassword(
            googleAuth,
            email,
            password
         );

         console.log(user);
      } catch (error) {
         const authError = error as AuthError;

         if (authError.code === "auth/invalid-email")
            setError("유효하지 않은 이메일입니다.");
         else if (authError.code === "auth/wrong-password")
            setError("비밀번호가 일치하지 않습니다.");
         else if (authError.code === "auth/user-not-found")
            setError("존재하지 않는 이메일입니다.");
         else if (authError.code === "auth/missing-password")
            setError("비밀번호를 입력해주세요.");
         else setError("알 수 없는 오류가 발생했습니다.");
      }
   };

   const handleGoogleLogin = async () => {
      const provider = new GoogleAuthProvider();
      try {
         const { user } = await signInWithPopup(googleAuth, provider);
         const jwt = await user.getIdToken();

         localStorage.setItem("accessToken", jwt);
         navigate("/");
      } catch (error) {
         console.error(error);
      }
   };

   const handleKakaoLogin = async () => {
      //TODO: Kakao Login
   };

   const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
      setError("");
      setEmail(event.target.value);
   };

   const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
      setError("");
      setPassword(event.target.value);
   };

   return (
      <ContentWrap>
         <Container>
            <Header>
               <Title>로그인</Title>
               <SubTitle>서비스 이용을 위해 로그인이 필요합니다.</SubTitle>
            </Header>
            <InnerContainer>
               <LoginForm onSubmit={handleSubmit}>
                  <EmailInput
                     placeholder="example@example.com"
                     onChange={onChangeEmail}
                  />
                  <PasswordInput
                     placeholder="password"
                     onChange={onChangePassword}
                  />
                  <SubmitInput
                     value={error.length <= 0 ? "로그인" : error}
                     error={error.length > 0}
                  />
               </LoginForm>
               <UserContainer>
                  <Link to="/sign-up">회원가입</Link>
                  <Link to="/find-user">아이디 / 비밀번호 찾기</Link>
               </UserContainer>
               <SocialLoginContainer>
                  <SocialLoginTitle>소셜 계정으로 빠른 시작</SocialLoginTitle>
                  <GoogleLoginButton onClick={handleGoogleLogin}>
                     <Symbol src={googleLogo} alt="logo" />
                     구글 계정으로 로그인
                  </GoogleLoginButton>
                  <KakaoLoginButton onClick={handleKakaoLogin}>
                     <Symbol src={kakaoLogo} alt="logo" />
                     카카오 로그인
                  </KakaoLoginButton>
               </SocialLoginContainer>
            </InnerContainer>
         </Container>
      </ContentWrap>
   );
}

export default Login;
