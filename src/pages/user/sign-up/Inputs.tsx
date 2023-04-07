/* eslint-disable no-duplicate-case */
import ContentWrap from "components/ContentWrap";
import Radio from "components/inputs/radio/Radio";
import {
   RadioElementType,
   RadioProps,
} from "components/inputs/radio/Radio.props";
import LabeledTextInput from "pages/user/sign-up/components/LabeledTextInput";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Formik } from "formik";
import * as Yup from "yup";

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
   :active {
      transform: scale(0.98);
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

interface InputProps {
   id: number;
   label: string;
   inputType: string;
   placeholder: string;
   message?: string;
   fulfilled: boolean;
   value: string;
}

interface ButtonProps {
   text: string;
   onClick: () => void;
}

export interface SignUpProps {
   message: string;
   value: string;
   valid: boolean;
}

function Inputs() {
   const [userType, setUserType] = useState(USERTYPE[0].id);
   const [signUpRoute, setSignUpRoute] = useState(SIGNUPROUTE[0].id);

   const [formValues, setFormValues] = useState({
      email: { value: "", valid: false },
      password: { value: "", valid: false },
      passwordCheck: { value: "", valid: false },
      name: { value: "", valid: false },
      companyName: { value: "", valid: false },
      managerName: { value: "", valid: false },
      phoneNumber: { value: "", valid: false },
      authNumber: { value: "", valid: false },
   });

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(formValues);
   };

   return (
      <ContentWrap>
         <Title>회원가입</Title>
         <Formik
            validateOnBlur
            initialValues={{
               email: "",
               password: "",
               passwordCheck: "",
               userType: "INDIVIDUAL",
               name: "",
               companyName: "",
               managerName: "",
               phoneNumber: "",
               authNumber: "",
            }}
            onSubmit={(values, { setSubmitting }) => {
               setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
               }, 1000);
            }}
            validationSchema={Yup.object().shape({
               email: Yup.string()
                  .required("필수 입력사항입니다.")
                  .email("유효한 이메일이 아닙니다."),
               password: Yup.string()
                  .required("필수 입력사항입니다.")
                  .min(8, "비밀번호는 8자 이상이어야 합니다.")
                  .matches(
                     /^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])$/,
                     "비밀번호는 영문, 숫자, 특수문자를 포함해야 합니다."
                  ),
               passwordCheck: Yup.string()
                  .required("필수 입력사항입니다.")
                  .oneOf(
                     [Yup.ref("password")],
                     "비밀번호가 일치하지 않습니다."
                  ),
               name: Yup.string().when("userType", () => {
                  if (userType === "INDIVIDUAL") {
                     return Yup.string().required("필수 입력사항입니다.");
                  } else {
                     return Yup.string().notRequired();
                  }
               }),
               companyName: Yup.string().when("userType", () => {
                  if (userType === "COMPANY") {
                     return Yup.string().required("필수 입력사항입니다.");
                  } else {
                     return Yup.string().notRequired();
                  }
               }),
               managerName: Yup.string().when("userType", () => {
                  if (userType === "COMPANY") {
                     return Yup.string().required("필수 입력사항입니다.");
                  } else {
                     return Yup.string().notRequired();
                  }
               }),
               phoneNumber: Yup.string()
                  .required("필수 입력사항입니다.")
                  .matches(/^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/),

               authNumber: Yup.string().required("필수 입력사항입니다."),
            })}
         >
            {(props) => (
               <form onSubmit={handleSubmit}>
                  <InputWrap>
                     <LabeledTextInput
                        label="이메일 (아이디)"
                        inputType="text"
                        placeholder="example@example.com"
                        {...props.getFieldProps("email")}
                        {...props.getFieldMeta("email")}
                     />
                  </InputWrap>
                  <InputWrap>
                     <LabeledTextInput
                        label="비밀번호"
                        inputType="password"
                        placeholder="새 비밀번호"
                        {...props.getFieldProps("password")}
                        {...props.getFieldMeta("password")}
                     />
                     <PasswordMessage>
                        비밀번호는 8자리 이상, 32자리 이하의 영문 대소문자,
                        숫자, 특수문자를 모두 포함해야합니다.
                     </PasswordMessage>
                  </InputWrap>
                  <InputWrap>
                     <LabeledTextInput
                        label="비밀번호 확인"
                        inputType="password"
                        placeholder="비밀번호 확인"
                        {...props.getFieldProps("passwordCheck")}
                        {...props.getFieldMeta("passwordCheck")}
                     />
                  </InputWrap>
                  <RadioWrap>
                     <Radio
                        groupName="userType"
                        elements={USERTYPE}
                        setSelectValue={setUserType}
                     />
                  </RadioWrap>
                  {userType === "INDIVIDUAL" ? (
                     <InputWrap>
                        <LabeledTextInput
                           label="이름"
                           inputType="text"
                           placeholder="이름"
                           {...props.getFieldProps("name")}
                           {...props.getFieldMeta("name")}
                        />
                     </InputWrap>
                  ) : (
                     <>
                        <InputWrap>
                           <LabeledTextInput
                              label="기업명"
                              inputType="text"
                              placeholder="기업명"
                              {...props.getFieldProps("companyName")}
                              {...props.getFieldMeta("companyName")}
                           />
                        </InputWrap>
                        <InputWrap>
                           <LabeledTextInput
                              label="담당자명"
                              inputType="text"
                              placeholder="담당자명"
                              {...props.getFieldProps("managerName")}
                              {...props.getFieldMeta("managerName")}
                           />
                        </InputWrap>
                     </>
                  )}
                  <InputWrap>
                     <LabeledTextInput
                        label="휴대폰 번호"
                        inputType="text"
                        placeholder="휴대폰 번호"
                        {...props.getFieldProps("phoneNumber")}
                        {...props.getFieldMeta("phoneNumber")}
                     />
                  </InputWrap>
                  <ButtonWrap>
                     <Button type="button">인증번호 발송</Button>
                  </ButtonWrap>
                  <InputWrap>
                     <LabeledTextInput
                        label="인증번호"
                        inputType="text"
                        placeholder="인증번호"
                        {...props.getFieldProps("authNumber")}
                        {...props.getFieldMeta("authNumber")}
                     />
                  </InputWrap>
                  <ButtonWrap>
                     <Button type="button">인증번호 확인</Button>
                  </ButtonWrap>
                  <RadioWrap>
                     <RadioLabel>
                        <span>회원가입 경로</span>
                     </RadioLabel>
                     <Radio
                        groupName="signUpRoute"
                        elements={SIGNUPROUTE}
                        setSelectValue={setSignUpRoute}
                     />
                  </RadioWrap>
                  <ButtonWrap>
                     <Button type="submit" disabled={props.isSubmitting}>
                        회원 가입
                     </Button>
                  </ButtonWrap>
               </form>
            )}
         </Formik>
      </ContentWrap>
   );
}

export default Inputs;
