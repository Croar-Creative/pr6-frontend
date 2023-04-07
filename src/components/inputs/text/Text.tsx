import styled from "styled-components";

export const TextInput = styled.input`
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
