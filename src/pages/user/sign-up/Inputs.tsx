import ContentWrap from "components/ContentWrap";
import { useEffect, useState } from "react";
import styled from "styled-components";

const InnerContainer = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: flex-start;
`;

const InputWrap = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: center;
   max-width: 328px;
   width: 100%;
   margin-bottom: 17px;
`;

const InputLabel = styled.label`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-bottom: 20px;
`;

const InputLabelText = styled.span`
   ${({ theme }) => theme.font.body3}
`;

const ErrorText = styled.span`
   ${({ theme }) => theme.font.detail1}
   color: ${({ theme }) => theme.color.red01};
`;

const StyledInput = styled.input.attrs({ required: true })`
   width: 100%;
   height: 44px;
   border-radius: 10px;
   border: none;
   background-color: ${({ theme }) => theme.color.gray03};
   padding: 0 16px;
   :focus {
      outline: 2px solid ${({ theme }) => theme.color.yellow01};
   }
`;

const EmailInput = styled(StyledInput).attrs({ type: "email" })``;

const PasswordInput = styled(StyledInput).attrs({ type: "password" })``;

const RadioWrap = styled.div`
   margin-top: 56px;
   display: flex;
   max-width: 328px;
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: flex-start;
   gap: 21px;
`;

const RadioLabel = styled.label`
   ${({ theme }) => theme.font.body3}
   display: flex;
   align-items: center;
   justify-content: flex-start;
   cursor: pointer;
`;

const CustomRadio = styled.span`
   display: block;
   position: relative;
   width: 20px;
   height: 20px;
   border-radius: 50%;
   border: 1px solid ${({ theme }) => theme.color.gray03};
   margin-right: 10px;

   span {
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.color.gray03};
   }
`;

const StyledRadio = styled.input.attrs({ type: "radio" })`
   display: none;
   :checked + ${CustomRadio} {
      transform: scale(1);
      content: "";
      border-radius: 50%;
      background-color: ${({ theme }) => theme.color.white01};
      border: 2px solid ${({ theme }) => theme.color.yellow01};
      span {
         background-color: ${({ theme }) => theme.color.yellow01};
      }
   }
`;

type UserType = "INDIVIDUAL" | "COMPANY";

function Inputs() {
   const [userType, setUserType] = useState<UserType>("INDIVIDUAL");

   return (
      <ContentWrap>
         <InnerContainer>
            <InputWrap>
               <InputLabel>
                  <InputLabelText>이메일 (아이디)</InputLabelText>
                  <ErrorText>에러!</ErrorText>
               </InputLabel>
               <EmailInput placeholder="example@example.com" />
            </InputWrap>
            <InputWrap>
               <InputLabel>
                  <InputLabelText>비밀번호</InputLabelText>
                  <ErrorText>에러!</ErrorText>
               </InputLabel>
               <PasswordInput placeholder="새 비밀번호" />
            </InputWrap>
            <InputWrap>
               <InputLabel>
                  <InputLabelText>비밀번호 확인</InputLabelText>
                  <ErrorText>에러!</ErrorText>
               </InputLabel>
               <PasswordInput placeholder="비밀번호 확인" />
            </InputWrap>
            <RadioWrap>
               {Array.from({ length: 2 }).map((_, index) => {
                  return (
                     <RadioLabel key={index}>
                        <StyledRadio
                           name="userType"
                           value={index === 0 ? "INDIVIDUAL" : "COMPANY"}
                           checked={
                              userType ===
                              (index === 0 ? "INDIVIDUAL" : "COMPANY")
                           }
                           onChange={(e) =>
                              setUserType(e.target.value as UserType)
                           }
                        />
                        <CustomRadio>
                           <span />
                        </CustomRadio>
                        {index === 0 ? "개인고객" : "기업고객"}
                     </RadioLabel>
                  );
               })}
            </RadioWrap>
         </InnerContainer>
      </ContentWrap>
   );
}

export default Inputs;
