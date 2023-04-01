import ContentWrap from "components/ContentWrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
   getAuth,
   signInWithEmailAndPassword,
   signInWithPopup,
   GoogleAuthProvider,
} from "firebase/auth";
import { googleAuth } from "../../../firebase";
import axios from "axios";
import googleLogo from "assets/images/users/login/logo_googleg_48dp@2x.png";
import kakaoLogo from "assets/images/users/login/Pr6-kakao-symbol@2x.png";

const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;

const Header = styled.header`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   margin: 85px 0;
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

const SubmitInput = styled(StyledInput).attrs({ type: "submit" })`
   background-color: ${({ theme }) => theme.color.yellow01};
   cursor: pointer;
   transition: transform 0.2s ease-in-out;

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
   ${({ theme }) => theme.mediaQueries.mobile} {
      margin-bottom: 180px;
   }
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

   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      try {
         const { user } = await signInWithEmailAndPassword(
            googleAuth,
            email,
            password
         );

         console.log(user);
      } catch (error: any) {
         console.log(error.code);
      }
   };

   const handleGoogleLogin = async () => {
      const provider = new GoogleAuthProvider();
      try {
         const result = await signInWithPopup(googleAuth, provider);

         const credential = GoogleAuthProvider.credentialFromResult(result);
         const token = credential?.accessToken;
         const user = result.user;

         console.log(token, user);
      } catch (error) {
         console.error(error);
      }
   };

   const handleKakaoLogin = async () => {
      //TODO: Kakao Login
   };

   const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
   };

   const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
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
                  <SubmitInput value="로그인" />
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
