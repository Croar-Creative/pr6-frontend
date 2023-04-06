import { TextInput } from "components/inputs/text/Text";
import { HTMLInputTypeAttribute } from "react";
import styled, { css, keyframes } from "styled-components";

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

const NoticText = styled.span<{ type: MessageType | undefined }>`
   ${({ theme }) => theme.font.detail1}
   ${({ theme, type }) =>
      type === "success"
         ? {
              color: theme.color.green01,
           }
         : type === "error"
         ? {
              color: theme.color.red01,
           }
         : ""}
`;

export type MessageType = "error" | "success" | null;

interface LabeledTextInputProps {
   label: string;
   message?: string;
   messageType?: MessageType;
   inputType: HTMLInputTypeAttribute;
   placeholder?: string;
   value: string;
   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function LabeledTextInput({
   label,
   message,
   messageType,
   inputType,
   placeholder,
   value,
   onChange,
}: LabeledTextInputProps) {
   return (
      <InputWrap>
         <InputLabel>
            <InputLabelText>{label}</InputLabelText>
            <NoticText type={messageType}>{message || ""}</NoticText>
         </InputLabel>
         <TextInput
            type={inputType}
            placeholder={placeholder}
            messageType={messageType}
            value={value}
            onChange={onChange}
         />
      </InputWrap>
   );
}

export default LabeledTextInput;
