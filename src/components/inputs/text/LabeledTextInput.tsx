import { TextInput } from "components/inputs/text/Text";
import { InputHTMLAttributes } from "react";
import styled from "styled-components";

const InputWrap = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: center;
   width: 100%;
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

const NoticeText = styled.span`
   ${({ theme }) => theme.font.detail1}
`;

// export type MessageType = FieldError | "success" | null;

export interface LabeledTextInputProps
   extends InputHTMLAttributes<HTMLInputElement> {
   label: string;
   option?: {
      detail?: {
         message: string;
         color: string;
      };
      border?: {
         color: string;
      };
   };
}

function LabeledTextInput({ label, option, ...props }: LabeledTextInputProps) {
   return (
      <InputWrap>
         <InputLabel>
            <InputLabelText>{label}</InputLabelText>
            <NoticeText style={{ color: option?.detail?.color }}>
               {option?.detail?.message}
            </NoticeText>
         </InputLabel>
         <TextInput
            {...props}
            style={{
               outlineColor: option?.border?.color,
            }}
         />
      </InputWrap>
   );
}

export default LabeledTextInput;
