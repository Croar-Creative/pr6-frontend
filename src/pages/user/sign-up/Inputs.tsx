/* eslint-disable no-duplicate-case */
import ContentWrap from "components/ContentWrap";
import Radio from "components/inputs/radio/Radio";
import {
   RadioElementType,
   RadioProps,
} from "components/inputs/radio/Radio.props";
import LabeledTextInput from "components/inputs/text/LabeledTextInput";
import { useEffect, useState } from "react";
import styled from "styled-components";
import scrollTo from "../function/scrollTo";
import {
   validateEmail,
   validatePassword,
   validatePasswordCheck,
   validatePhoneNumber,
   validateRequired,
} from "./Validators";

const Title = styled.h2`
   ${({ theme }) => theme.font.title3};
   max-width: 328px;
   width: 100%;
   margin: 74px auto 56px auto;
   ${({ theme }) => theme.mediaQueries.desktop} {
      display: flex;
      align-items: center;
      justify-content: center;
   }
`;

const InputWrap = styled.div`
   width: 100%;
   max-width: 328px;
   margin: 0 auto 17px auto;
   :last-child {
      margin-bottom: 104px;
   }
`;

const RadioWrap = styled(InputWrap)`
   margin: 56px auto 28px auto;
`;

const ButtonWrap = styled(InputWrap)`
   margin: 0 auto 16px auto;
`;

const Button = styled.button`
   border: none;
   cursor: pointer;
   width: 100%;
   background-color: ${({ theme }) => theme.color.yellow01};
   border-radius: 10px;
   height: 44px;
   ${({ theme }) => theme.font.body3}
   transition: all 0.2s ease-in-out;
   :active:not(:disabled) {
      transform: scale(0.98);
   }
   :disabled {
      filter: grayscale(100%);
      cursor: not-allowed;
   }
`;

const RadioLabel = styled.h3`
   ${({ theme }) => theme.font.body3};
   margin-bottom: 17px;
`;

const PasswordMessage = styled.p`
   ${({ theme }) => theme.font.detail1};
   color: ${({ theme }) => theme.color.gray07};

   width: 274px;
   text-align: center;
   margin: 8px auto 0 auto;
`;

const Form = styled.form``;

const USERTYPE = [
   {
      id: "INDIVIDUAL",
      label: "개인고객",
   },
   {
      id: "COMPANY",
      label: "기업고객",
   },
] as RadioElementType;

const SIGNUPROUTE = [
   {
      id: "friend",
      label: "소개",
   },
   {
      id: "ad",
      label: "광고",
   },
   {
      id: "search",
      label: "검색",
   },
   {
      id: "blog",
      label: "블로그",
   },
] as RadioElementType;

export interface SignUpProps {
   value: string;
   valid: boolean;
}

export interface SignUpFormValues {
   email: SignUpProps;
   password: SignUpProps;
   passwordCheck: SignUpProps;
   name: SignUpProps;
   companyName: SignUpProps;
   phoneNumber: SignUpProps;
   authNumber: SignUpProps;
}

function Inputs() {
   const [userType, setUserType] = useState(USERTYPE[0].id);
   const [signUpRoute, setSignUpRoute] = useState(SIGNUPROUTE[0].id);
   const [isAllValid, setIsAllValid] = useState(false);

   const [formValues, setFormValues] = useState({
      email: { value: "", valid: false },
      password: { value: "", valid: false },
      passwordCheck: { value: "", valid: false },
      name: { value: "", valid: false },
      companyName: { value: "", valid: true },
      phoneNumber: { value: "", valid: false },
      authNumber: { value: "", valid: true },
   });

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(formValues);
   };

   useEffect(() => {
      scrollTo({ to: "top" });
   }, []);

   useEffect(() => {
      const isAllValid = Object.values(formValues).every(
         (value) => value.valid
      );
      console.log(formValues);
      setIsAllValid(isAllValid);
   }, [formValues]);

   return (
      <ContentWrap>
         <Title>회원가입</Title>
         <Form onSubmit={handleSubmit}>
            <InputWrap>
               <LabeledTextInput
                  label="이메일"
                  onChange={(e) => {
                     setFormValues((prev) => ({
                        ...prev,
                        email: validateEmail(e.target.value).result,
                     }));
                  }}
                  option={{
                     detail: validateEmail(formValues.email.value).detail,
                  }}
                  placeholder="example@example.com"
                  required
               />
            </InputWrap>
            <InputWrap>
               <LabeledTextInput
                  label="비밀번호"
                  onChange={(e) => {
                     setFormValues((prev) => ({
                        ...prev,
                        password: validatePassword(e.target.value).result,
                     }));
                  }}
                  option={{
                     detail: validatePassword(formValues.password.value).detail,
                  }}
                  type="password"
                  placeholder="새 비밀번호"
                  required
               />
               <PasswordMessage>
                  영문, 숫자, 특수문자를 포함한 8자 이상
               </PasswordMessage>
            </InputWrap>

            <InputWrap>
               <LabeledTextInput
                  label="비밀번호 확인"
                  onChange={(e) => {
                     setFormValues((prev) => ({
                        ...prev,
                        passwordCheck: validatePasswordCheck(
                           e.target.value,
                           formValues.password.value
                        ).result,
                     }));
                  }}
                  option={{
                     detail: validatePasswordCheck(
                        formValues.passwordCheck.value,
                        formValues.password.value
                     ).detail,
                  }}
                  type="password"
                  placeholder="새 비밀번호 확인"
                  required
               />
            </InputWrap>
            <RadioWrap>
               <Radio
                  groupName="userType"
                  elements={USERTYPE}
                  onChange={(e) => {
                     if (e.target.value === "INDIVIDUAL") {
                        setFormValues((prev) => ({
                           ...prev,
                           companyName: {
                              value: "",
                              valid: true,
                           },
                        }));
                     } else if (
                        e.target.value === "COMPANY" &&
                        !formValues.companyName.valid
                     ) {
                        setFormValues((prev) => ({
                           ...prev,
                           companyName: {
                              value: "",
                              valid: false,
                           },
                        }));
                     }
                     setUserType(e.target.value);
                  }}
               />
            </RadioWrap>
            <InputWrap>
               <LabeledTextInput
                  label="이름"
                  onChange={(e) => {
                     setFormValues((prev) => ({
                        ...prev,
                        name: validateRequired(e.target.value).result,
                     }));
                  }}
                  option={{
                     detail: validateRequired(formValues.name.value).detail,
                  }}
                  placeholder="이름"
                  required
               />
            </InputWrap>
            {userType === "COMPANY" && (
               <InputWrap>
                  <LabeledTextInput
                     label="회사명"
                     onChange={(e) => {
                        setFormValues((prev) => ({
                           ...prev,
                           companyName: validateRequired(e.target.value).result,
                        }));
                     }}
                     option={{
                        detail: validateRequired(formValues.companyName.value)
                           .detail,
                     }}
                     required
                  />
               </InputWrap>
            )}
            <InputWrap>
               <LabeledTextInput
                  label="휴대폰 번호"
                  onChange={(e) => {
                     setFormValues((prev) => ({
                        ...prev,
                        phoneNumber: validatePhoneNumber(e.target.value).result,
                     }));
                  }}
                  option={{
                     detail: validatePhoneNumber(formValues.phoneNumber.value)
                        .detail,
                  }}
                  placeholder="하이픈(-) 없이 입력"
                  required
               />
            </InputWrap>
            <ButtonWrap>
               <Button>인증번호 받기</Button>
            </ButtonWrap>
            <InputWrap>
               <LabeledTextInput
                  label="인증번호"
                  onChange={(e) => {
                     setFormValues((prev) => ({
                        ...prev,
                        authNumber: {
                           value: e.target.value,
                           valid: prev.authNumber.valid,
                        },
                     }));
                  }}
                  placeholder="인증번호 6자리"
                  required
               />
            </InputWrap>
            <ButtonWrap>
               <Button>인증하기</Button>
            </ButtonWrap>
            <RadioWrap>
               <Radio
                  groupName="signUpRoute"
                  elements={SIGNUPROUTE}
                  onChange={(e) => {
                     setSignUpRoute(e.target.value);
                  }}
               />
            </RadioWrap>

            <ButtonWrap>
               <Button disabled={!isAllValid}>회원 가입 하기</Button>
            </ButtonWrap>
         </Form>
      </ContentWrap>
   );
}

export default Inputs;
