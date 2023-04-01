import SafeArea from "assets/styles/SafeArea";
import styled from "styled-components";

const Container = styled.div`
   width: 100%;
   ${({ theme }) => theme.mediaQueries.desktop} {
      min-height: calc(100vh - 290px);
   }
   ${({ theme }) => theme.mediaQueries.mobile} {
      min-height: calc(100vh - 307px);
   }
   display: flex;
   justify-content: flex-start;
   align-items: center;
   flex-direction: column;
`;

function ContentWrap({ children }: { children: React.ReactNode }) {
   return (
      <Container>
         <SafeArea>{children}</SafeArea>
      </Container>
   );
}

export default ContentWrap;
