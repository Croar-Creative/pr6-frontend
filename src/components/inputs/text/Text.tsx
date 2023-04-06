import { MessageType } from "pages/user/sign-up/components/LabeledTextInput";
import styled from "styled-components";

export const TextInput = styled.input<{ messageType: MessageType | undefined }>`
   width: 100%;
   height: 44px;
   border-radius: 10px;
   border: none;
   background-color: ${({ theme }) => theme.color.gray03};
   padding: 0 16px;
   :focus {
      outline: 2px solid ${({ theme }) => theme.color.yellow01};
   }

   ${({ theme, messageType }) =>
      messageType === "error"
         ? `border: 2px solid ${theme.color.red01};`
         : messageType === "success"
         ? `border: 2px solid ${theme.color.green01};`
         : ""}
`;
