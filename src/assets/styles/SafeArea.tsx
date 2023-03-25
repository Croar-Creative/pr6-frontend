import styled from "styled-components";

const SafeArea = styled.div`
   max-width: 1428px;
   ${({ theme }) => theme.mediaQueries.mobile} {
      max-width: 346px;
   }
   width: 100%;
`;

export default SafeArea;
