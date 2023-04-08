import styled from "styled-components";

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

const LoginComponents = {
   Container,
   Header,
   Title,
   SubTitle,
   InnerContainer,
};

export default LoginComponents;
