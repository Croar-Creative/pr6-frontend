/* eslint-disable no-duplicate-case */
import ContentWrap from "components/ContentWrap";
import Radio from "components/inputs/radio/Radio";
import {
   RadioElementType,
   RadioProps,
} from "components/inputs/radio/Radio.props";
import LabeledTextInput, {
   MessageType,
} from "pages/user/sign-up/components/LabeledTextInput";
import { useEffect, useState } from "react";
import styled from "styled-components";

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
   messageType?: MessageType;
   fulfilled: boolean;
   value: string;
}

interface ButtonProps {
   text: string;
   onClick: () => void;
}

export interface SignUpProps {
   message: string;
   messageType: MessageType;
   value: string;
   valid: boolean;
}

function Inputs() {
   const [userType, setUserType] = useState(USERTYPE[0].id);
   const [signUpRoute, setSignUpRoute] = useState(SIGNUPROUTE[0].id);

   const [email, setEmail] = useState<SignUpProps>({
      message: "",
      messageType: null,
      value: "",
      valid: false,
   });
   const [password, setPassword] = useState<SignUpProps>({
      message: "",
      messageType: null,
      value: "",
      valid: false,
   });
   const [passwordCheck, setPasswordCheck] = useState<SignUpProps>({
      message: "",
      messageType: null,
      value: "",
      valid: false,
   });
   const [name, setName] = useState<SignUpProps>({
      message: "",
      messageType: null,
      value: "",
      valid: false,
   });
   const [companyName, setCompanyName] = useState<SignUpProps>({
      message: "",
      messageType: null,
      value: "",
      valid: false,
   });
   const [managerName, setManagerName] = useState<SignUpProps>({
      message: "",
      messageType: null,
      value: "",
      valid: false,
   });
   const [phoneNumber, setPhoneNumber] = useState<SignUpProps>({
      message: "",
      messageType: null,
      value: "",
      valid: false,
   });
   const [authNumber, setAuthNumber] = useState<SignUpProps>({
      message: "",
      messageType: null,
      value: "",
      valid: false,
   });

   useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
   }, []);

   const validateInputs = () => {
      const emailReg =
         /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
      const passwordReg =
         /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
      const nameReg = /^[가-힣]{2,}$/;
      const phoneNumberReg = /^\d{3}-\d{3,4}-\d{4}$/;

      if (email.value === "") {
         setEmail((prev) => ({
            ...prev,
            message: "이메일을 입력해주세요.",
            messageType: "error",
         }));
      } else if (!emailReg.test(email.value)) {
         setEmail((prev) => ({
            ...prev,
            message: "이메일 형식이 올바르지 않습니다.",
            messageType: "error",
         }));
      } else {
         setEmail((prev) => ({
            ...prev,
            message: "",
            messageType: null,
            valid: true,
         }));
      }

      if (password.value === "") {
         setPassword((prev) => ({
            ...prev,
            message: "비밀번호를 입력해주세요.",
            messageType: "error",
         }));
      } else if (!passwordReg.test(password.value)) {
         setPassword((prev) => ({
            ...prev,
            message: "비밀번호 형식이 올바르지 않습니다.",
            messageType: "error",
         }));
      } else {
         setPassword((prev) => ({
            ...prev,
            message: "사용 가능한 비밀번호입니다.",
            messageType: "success",
            valid: true,
         }));
      }

      if (passwordCheck.value === "") {
         setPasswordCheck((prev) => ({
            ...prev,
            message: "비밀번호를 입력해주세요.",
            messageType: "error",
         }));
      } else if (password.value !== passwordCheck.value) {
         setPasswordCheck((prev) => ({
            ...prev,
            message: "비밀번호가 일치하지 않습니다.",
            messageType: "error",
         }));
      } else {
         setPasswordCheck((prev) => ({
            ...prev,
            message: "비밀번호가 일치합니다.",
            messageType: "success",
            valid: true,
         }));
      }

      if (userType === "INDIVIDUAL") {
         setCompanyName((prev) => ({
            ...prev,
            message: "",
            messageType: null,
            valid: true,
         }));
         setManagerName((prev) => ({
            ...prev,
            message: "",
            messageType: null,
            valid: true,
         }));

         if (name.value === "") {
            setName((prev) => ({
               ...prev,
               message: "이름을 입력해주세요.",
               messageType: "error",
            }));
         } else if (!nameReg.test(name.value)) {
            setName((prev) => ({
               ...prev,
               message: "이름 형식이 올바르지 않습니다.",
               messageType: "error",
            }));
         } else {
            setName((prev) => ({
               ...prev,
               message: "",
               messageType: null,
               valid: true,
            }));
         }
      } else if (userType === "COMPANY") {
         setName((prev) => ({
            ...prev,
            message: "",
            messageType: null,
            valid: true,
         }));

         if (companyName.value === "") {
            setCompanyName((prev) => ({
               ...prev,
               message: "회사명을 입력해주세요.",
               messageType: "error",
            }));
         } else {
            setCompanyName((prev) => ({
               ...prev,
               message: "",
               messageType: null,
               valid: true,
            }));
         }

         if (managerName.value === "") {
            setManagerName((prev) => ({
               ...prev,
               message: "담당자명을 입력해주세요.",
               messageType: "error",
            }));
         } else if (!nameReg.test(managerName.value)) {
            setManagerName((prev) => ({
               ...prev,
               message: "담당자명 형식이 올바르지 않습니다.",
               messageType: "error",
            }));
         } else {
            setManagerName((prev) => ({
               ...prev,
               message: "",
               messageType: null,
               valid: true,
            }));
         }
      }

      if (phoneNumber.value === "") {
         setPhoneNumber((prev) => ({
            ...prev,
            message: "휴대폰 번호를 입력해주세요.",
            messageType: "error",
         }));
      } else if (!phoneNumberReg.test(phoneNumber.value)) {
         setPhoneNumber((prev) => ({
            ...prev,
            message: "휴대폰 번호 형식이 올바르지 않습니다.",
            messageType: "error",
         }));
      } else {
         setPhoneNumber((prev) => ({
            ...prev,
            message: "",
            messageType: null,
            valid: true,
         }));
      }

      if (!authNumber.valid) {
         setAuthNumber((prev) => ({
            ...prev,
            message: "전화번호 인증을 해주세요.",
            messageType: "error",
         }));
      }
   };

   const handleAuthNumberSend = async () => {};

   const handleAuthNumberCheck = async () => {
      const authNumberReg = /^\d{6}$/;

      if (authNumber.value === "") {
         setAuthNumber((prev) => ({
            ...prev,
            message: "인증번호를 입력해주세요.",
            messageType: "error",
         }));
      }
      // fail
      if (!authNumberReg.test(authNumber.value)) {
         setAuthNumber((prev) => ({
            ...prev,
            message: "인증번호 형식이 올바르지 않습니다.",
            messageType: "error",
         }));
      }
      // success
      else {
         setAuthNumber((prev) => ({
            ...prev,
            message: "인증되었습니다.",
            messageType: "success",
            valid: true,
         }));
      }
   };

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      validateInputs();
      if (
         [
            email,
            password,
            passwordCheck,
            name,
            companyName,
            managerName,
            phoneNumber,
            authNumber,
         ].every((el) => el.valid)
      ) {
         console.log("회원가입 성공");
      }
   };

   useEffect(() => {
      console.log(userType);
   }, [userType]);

   return (
      <ContentWrap>
         <Title>회원가입</Title>
         <Form onSubmit={handleSubmit}>
            <InputWrap>
               <LabeledTextInput
                  label="이메일 (아이디)"
                  inputType="text"
                  placeholder="example@example.com"
                  message={email.message}
                  messageType={email.messageType}
                  value={email.value}
                  onChange={(e) => {
                     setEmail((prev) => ({
                        ...prev,
                        value: e.target.value,
                     }));
                  }}
               />
            </InputWrap>
            <InputWrap>
               <LabeledTextInput
                  label="비밀번호"
                  inputType="password"
                  placeholder="새 비밀번호"
                  message={password.message}
                  messageType={password.messageType}
                  value={password.value}
                  onChange={(e) => {
                     setPassword((prev) => ({
                        ...prev,
                        value: e.target.value,
                     }));
                  }}
               />
               <PasswordMessage>
                  비밀번호는 8자리 이상, 32자리 이하의 영문 대소문자, 숫자,
                  특수문자를 모두 포함해야합니다.
               </PasswordMessage>
            </InputWrap>
            <InputWrap>
               <LabeledTextInput
                  label="비밀번호 확인"
                  inputType="password"
                  placeholder="새 비밀번호 확인"
                  message={passwordCheck.message}
                  messageType={passwordCheck.messageType}
                  value={passwordCheck.value}
                  onChange={(e) => {
                     setPasswordCheck((prev) => ({
                        ...prev,
                        value: e.target.value,
                     }));
                  }}
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
                     message={name.message}
                     messageType={name.messageType}
                     value={name.value}
                     onChange={(e) => {
                        setName((prev) => ({
                           ...prev,
                           value: e.target.value,
                        }));
                     }}
                  />
               </InputWrap>
            ) : (
               <>
                  <InputWrap>
                     <LabeledTextInput
                        label="회사명"
                        inputType="text"
                        placeholder="회사명"
                        message={companyName.message}
                        messageType={companyName.messageType}
                        value={companyName.value}
                        onChange={(e) => {
                           setCompanyName((prev) => ({
                              ...prev,
                              value: e.target.value,
                           }));
                        }}
                     />
                  </InputWrap>
                  <InputWrap>
                     <LabeledTextInput
                        label="담당자명"
                        inputType="text"
                        placeholder="담당자명"
                        message={managerName.message}
                        messageType={managerName.messageType}
                        value={managerName.value}
                        onChange={(e) => {
                           setManagerName((prev) => ({
                              ...prev,
                              value: e.target.value,
                           }));
                        }}
                     />
                  </InputWrap>
               </>
            )}
            <InputWrap>
               <LabeledTextInput
                  label="휴대폰 번호"
                  inputType="text"
                  placeholder="휴대폰 번호"
                  message={phoneNumber.message}
                  messageType={phoneNumber.messageType}
                  value={phoneNumber.value}
                  onChange={(e) => {
                     setPhoneNumber((prev) => ({
                        ...prev,
                        value: e.target.value,
                     }));
                  }}
               />
            </InputWrap>

            <ButtonWrap>
               <Button>인증번호 발송</Button>
            </ButtonWrap>
            <InputWrap>
               <LabeledTextInput
                  label="인증번호"
                  inputType="text"
                  placeholder="인증번호"
                  message={authNumber.message}
                  messageType={authNumber.messageType}
                  value={authNumber.value}
                  onChange={(e) => {
                     setAuthNumber((prev) => ({
                        ...prev,
                        value: e.target.value,
                     }));
                  }}
               />
            </InputWrap>
            <ButtonWrap>
               <Button>인증번호 확인</Button>
            </ButtonWrap>
            <RadioWrap>
               <RadioLabel>회원가입 경로</RadioLabel>
               <Radio
                  groupName="signUpRoute"
                  elements={SIGNUPROUTE}
                  setSelectValue={setSignUpRoute}
               />
            </RadioWrap>

            <ButtonWrap>
               <Button type="submit">회원 가입</Button>
            </ButtonWrap>
         </Form>
      </ContentWrap>
   );
}

export default Inputs;
