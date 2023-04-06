import ContentWrap from "components/ContentWrap";
import styled from "styled-components";
import UserComponents from "../login/Login.styled";
import { ReactElement, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const TermContainer = styled.div`
   max-width: 530px;
   width: 100%;
`;

const TermHeader = styled.header`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-bottom: 13px;
`;

const TermTitle = styled.h1`
   ${({ theme }) => theme.font.body2};
`;

const TermCheckbox = styled.input`
   display: none;
   :checked + svg {
      fill: ${({ theme }) => theme.color.yellow01};
   }
   :checked + svg::after {
      fill: ${({ theme }) => theme.color.gray06};
   }
`;

const TermCheckIcon = styled.svg`
   cursor: pointer;
`;

const TermContent = styled.div`
   ${({ theme }) => theme.font.body3};
   max-height: 240px;
   overflow-y: auto;
   background-color: ${({ theme }) => theme.color.gray03};
   padding: 14px 20px;
   margin-bottom: 56px;
   border-radius: 20px;
   p {
      line-height: 1.2;
      color: ${({ theme }) => theme.color.gray08};
   }
`;

const NextButton = styled(Link)<{ active: boolean }>`
   width: 328px;
   height: 44px;
   border-radius: 999px;
   background-color: ${({ theme }) => theme.color.yellow01};
   ${({ theme }) => theme.font.body3};
   display: flex;
   align-items: center;
   justify-content: center;
   filter: ${({ active }) => (active ? "none" : "grayscale(100%)")};
   cursor: ${({ active }) => (active ? "pointer" : "default")};
   transition: all 0.2s ease-in-out;
   :hover {
      transform: ${({ active }) => (active ? "scale(1.02)" : "scale(1)")};
   }
`;

type Term = {
   id: number;
   title: string;
   content: ReactElement | string;
   type: "필수" | "선택";
   checked: boolean;
};

function Agreements() {
   const [terms, setTerms] = useState<Term[]>([
      {
         id: 1,
         title: "프로젝트6 회원가입 약관 동의",
         content: (
            <>
               <p>제 1 조 (목적)</p>
               <p>
                  이 약관은 회원(이하 “회원”이라 함)이 크로아 크리에이티브(이하
                  “회사”라 함)가 운영하는 프로젝트6 서비스(이하 “서비스”라 함)를
                  이용함에 있어 회사와 회원간의 권리, 의무 및 책임사항, 기타
                  필요한 사항 등을 규정함을 목적으로 합니다.
               </p>
               <br />
               <p>제 2 조</p>
               <p>
                  회원은 이 약관에 동의함으로써 회사가 제공하는 서비스를 이용할
                  수 있습니다.
               </p>
               <br />
               <p>제 3 조</p>
               <p>
                  회원이 이 약관에 동의한 경우, 회사는 회원에 대하여 본 약관에
                  따라 서비스를 제공할 것이며, 회원은 회사가 제공하는 서비스를
                  이용함으로써 이 약관에 동의한 것으로 간주됩니다.
               </p>
            </>
         ),
         type: "필수",
         checked: false,
      },
      {
         id: 2,
         title: "개인 정보 수집 및 이용 동의",
         content: (
            <>
               <p>
                  ※ 귀하께서는 개인정보 수집·이용에 대한 동의를 거부하실 수
                  있으나, 동의를 거부하실 경우 회원가입, 서비스 이용 등을 하실
                  수 없습니다.
               </p>
               <br />
               <p>
                  1. 회원은 회사가 제공하는 서비스를 이용하기 위해 회원가입 시
                  필요한 최소한의 개인정보를 제공해야 합니다.
               </p>
               <p>
                  2. 회원은 개인정보 제공 시 개인정보 보호 관련 법령을 준수해야
                  합니다.
               </p>
               <p>
                  3. 회사는 회원의 개인정보를 보호하기 위해 최선을 다하며,
                  회원의 개인정보가 어떠한 목적으로 이용되고 있으며, 어떠한
                  보호조치를 취하고 있는지에 대하여 고지하고 있습니다.
               </p>
               <p>
                  4. 회원은 언제든지 회사의 개인정보 관리책임자에게 개인정보
                  보호 관련 문의를 할 수 있습니다.
               </p>
               <br />
               <p>개인정보 항목, 목적, 보유기간</p>
               <br />
               <p>
                  항목 : 성명, 생년월일, 아이디(이메일), 비밀번호, 휴대전화번호
               </p>
               <p>목적 :</p>
               <p>- 회원가입, 본인확인</p>
               <p>
                  - 서비스 제공 및 개선 (서비스 결제, 환불, 배송, 개인 맞춤형
                  서비스)
               </p>
               <p>- 회원관리 및 부정이용방지</p>
               <p>
                  - 서비스 관련 이벤트 및 행사정보 안내 (별도 마케팅정보 수신
                  동의 회원에 한함)
               </p>
               <p>
                  보유 및 이용기간 : 회원 탈퇴시 즉시 파기 (단, 반복 재가입 등의
                  방법을 이용한 서비스 부정이용 방지를 위해 이름,
                  아이디(이메일), 생년월일은 탈퇴 후 30일 보관) 또는 관계법령에
                  의한 별도 보존기간 (아래 관계법령에 의한 개인정보 보존기간
                  참고)
               </p>
               <br />
               <p>관계법령에 의한 개인정보 보존 기간</p>
               <br />
               <p>
                  - 서비스이용기록, 접속로그, 접속IP정보 (통신비밀보호법 :
                  3개월)
               </p>
               <p>- 표시/광고에 관한 기록 (전자상거래법 : 6개월)</p>
               <p>- 계약 또는 청약철회 등에 관한 기록 (전자상거래법 : 5년)</p>
               <p>
                  - 대금결제 및 재화 등의 공급에 관한 기록 (전자상거래법 : 5년)
               </p>
               <p>
                  - 소비자의 불만 또는 분쟁처리에 관한 기록 (전자상거래법 : 3년)
               </p>
            </>
         ),
         type: "필수",
         checked: false,
      },
      {
         id: 3,
         title: "개인 정보 제 3자 제공 동의",
         content: (
            <>
               <p>
                  ※ 귀하께서는 개인정보 제 3자 제공에 대한 동의를 거부하실 수
                  있으나, 동의를 거부하실 경우 회원가입, 서비스 이용 등을 하실
                  수 없습니다.
               </p>
               <br />
               <p>
                  1. 회사는 회원의 개인정보를 회원의 동의 없이 제 3자에게
                  제공하지 않습니다.
               </p>
               <p>
                  2. 회사는 회원의 개인정보를 제 3자에게 제공할 경우에는
                  제공받는 자, 제공목적, 제공하는 개인정보의 항목, 개인정보의
                  보유 및 이용기간 등을 명시하여 회원에게 고지하고 동의를
                  받습니다.
               </p>
               <p>
                  3. 회사는 회원의 개인정보를 제 3자에게 제공할 경우에는
                  관계법령에 따라 필요한 경우를 제외하고는 회원의 동의를
                  받습니다.
               </p>
            </>
         ),
         type: "필수",
         checked: false,
      },
      {
         id: 4,
         title: "마케팅 정보 수신 동의",
         content: (
            <>
               <p>
                  ※ 귀하께서는 마케팅 정보 수신에 대한 동의를 거부하실 수
                  있습니다.
               </p>
               <br />
               <p>
                  1. 회사는 회원의 개인정보를 이용하여 마케팅 활동을 할 수
                  있습니다.
               </p>
               <p>
                  2. 회사는 회원의 개인정보를 이용하여 마케팅 활동을 할 경우에는
                  마케팅 활동의 목적, 마케팅 활동의 내용, 마케팅 활동의 수단,
                  마케팅 활동의 기간 등을 명시하여 회원에게 고지하고 동의를
                  받습니다.
               </p>
               <p>
                  3. 회사는 회원의 개인정보를 이용하여 마케팅 활동을 할 경우에는
                  관계법령에 따라 필요한 경우를 제외하고는 회원의 동의를
                  받습니다.
               </p>
               <p>
                  4. 회사는 회원의 개인정보를 이용하여 마케팅 활동을 할 경우에는
                  회원이 수신 거부를 할 수 있도록 하며, 회원이 수신 거부를 할
                  경우에는 회원의 개인정보를 이용하여 마케팅 활동을 하지
                  않습니다.
               </p>
               <br />
               <p>
                  1. 회사는 회원의 개인정보를 이용하여 마케팅 활동을 할 경우에는
                  회원의 개인정보를 이용하여 마케팅 활동을 할 수 있는 권한을
                  회원에게 부여합니다.
               </p>
               <p>
                  2. 회사는 회원의 개인정보를 이용하여 마케팅 활동을 할 경우에는
                  회원의 개인정보를 이용하여 마케팅 활동을 할 수 있는 권한을
                  회원에게 부여할 때에는 회원의 개인정보를 이용하여 마케팅
                  활동을 할 수 있는 권한의 범위, 회원의 개인정보를 이용하여
                  마케팅 활동을 할 수 있는 권한의 기간, 회원의 개인정보를
                  이용하여 마케팅 활동을 할 수 있는 권한의 취소 방법 등을
                  명시하여 회원에게 고지하고 동의를 받습니다.
               </p>
               <p>
                  3. 회사는 회원의 개인정보를 이용하여 마케팅 활동을 할 경우에는
                  회원의 개인정보를 이용하여 마케팅 활동을 할 수 있는 권한을
                  회원에게 부여할 때에는 관계법령에 따라 필요한 경우를
                  제외하고는 회원의 동의를 받습니다.
               </p>
               <p>
                  4. 회사는 회원의 개인정보를 이용하여 마케팅 활동을 할 경우에는
                  회원의 개인정보를 이용하여 마케팅 활동을 할 수 있는 권한을
                  회원에게 부여할 때에는 회원이 수신 거부를 할 수 있도록 하며,
                  회원이 수신 거부를 할 경우에는 회원의 개인정보를 이용하여
                  마케팅 활동을 할 수 있는 권한을 회원에게 부여하지 않습니다.
               </p>
               <p>
                  5. 회사는 회원의 개인정보를 이용하여 마케팅 활동을 할 경우에는
                  회원의 개인정보를 이용하여 마케팅 활동을 할 수 있는 권한을
                  회원에게 부여할 때에는 회원의 개인정보를 이용하여 마케팅
                  활동을 할 수 있는 권한을 회원에게 부여할 수 있는 권한의 범위,
                  회원의 개인정보를 이용하여 마케팅 활동을 할 수 있는 권한을
                  회원에게 부여할 수 있는 권한의 기간, 회원의 개인정보를
                  이용하여 마케팅 활동을 할 수 있는 권한을 회원에게 부여할 수
                  있는 권한의 취소 방법 등을 명시하여 회원에게 고지하고 동의를
                  받습니다.
               </p>
            </>
         ),
         type: "선택",
         checked: false,
      },
   ]);
   const [allChecked, setAllChecked] = useState(false);

   useEffect(() => {
      setAllChecked(
         terms.every((term) => {
            if (term.type === "필수") return term.checked;
            return true;
         })
      );
   }, [terms]);

   return (
      <ContentWrap>
         <UserComponents.Container>
            <UserComponents.Header>
               <UserComponents.Title>회원가입</UserComponents.Title>
               <UserComponents.SubTitle>
                  회원가입 동의 및 개인 정보 보호 약관
               </UserComponents.SubTitle>
            </UserComponents.Header>
            <TermContainer>
               <TermHeader>
                  <TermTitle>전체동의</TermTitle>
                  <label>
                     <TermCheckbox
                        type="checkbox"
                        checked={allChecked}
                        onClick={() => {
                           setAllChecked(!allChecked);
                           setTerms((prev) =>
                              prev.map((term) => ({
                                 ...term,
                                 checked: !allChecked,
                              }))
                           );
                        }}
                     />
                     <TermCheckIcon
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="#aaa"
                        viewBox="0 0 25 25"
                     >
                        <g
                           id="그룹_2590"
                           data-name="그룹 2590"
                           transform="translate(-1 -1)"
                        >
                           <rect
                              id="사각형_1"
                              data-name="사각형 1"
                              width="25"
                              height="25"
                              transform="translate(1 1)"
                              fill="none"
                           />
                           <path
                              id="패스_4"
                              data-name="패스 4"
                              d="M0,0H25V25H0Z"
                              fill="none"
                           />
                           <path
                              id="패스_4195"
                              data-name="패스 4195"
                              d="M7.5,12.5l3,3,7-7"
                              transform="translate(1 1)"
                              fill="none"
                              stroke="#aaa"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                           />
                        </g>
                     </TermCheckIcon>
                  </label>
               </TermHeader>
            </TermContainer>
            {terms.map((term, index) => (
               <TermContainer>
                  <TermHeader key={index}>
                     <TermTitle>
                        {term.title} ({term.type})
                     </TermTitle>
                     <label>
                        <TermCheckbox
                           type="checkbox"
                           checked={term.checked}
                           onClick={() => {
                              setTerms((prev) => [
                                 ...prev.slice(0, index),
                                 {
                                    ...prev[index],
                                    checked: !prev[index].checked,
                                 },
                                 ...prev.slice(index + 1, prev.length),
                              ]);
                           }}
                        />
                        <TermCheckIcon
                           xmlns="http://www.w3.org/2000/svg"
                           width="25"
                           height="25"
                           fill="#aaa"
                           viewBox="0 0 25 25"
                        >
                           <g id="그룹_2590" data-name="그룹 2590">
                              <path
                                 id="패스_4195"
                                 data-name="패스 4195"
                                 d="M12.5,0A12.5,12.5,0,1,0,25,12.5,12.515,12.515,0,0,0,12.5,0Zm6.986,9.211L11.5,17.137a1.229,1.229,0,0,1-1.723.031L5.545,13.315a1.271,1.271,0,0,1-.094-1.754A1.239,1.239,0,0,1,7.206,11.5l3.352,3.07L17.7,7.425a1.263,1.263,0,0,1,1.786,1.786Z"
                              />
                           </g>
                        </TermCheckIcon>
                     </label>
                  </TermHeader>
                  <TermContent>{term.content}</TermContent>
               </TermContainer>
            ))}
            <NextButton
               to={allChecked ? "/sign-up/inputs" : ""}
               active={allChecked}
            >
               가입하기
            </NextButton>
         </UserComponents.Container>
      </ContentWrap>
   );
}

export default Agreements;
