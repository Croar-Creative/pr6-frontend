import { TextInput } from "components/inputs/text/Text";
import { HTMLInputTypeAttribute } from "react";
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

const NoticeText = styled.span<{ hasError: boolean }>`
   ${({ theme }) => theme.font.detail1}
   ${({ theme, hasError }) =>
      hasError
         ? `color: ${theme.color.red01};`
         : `color: ${theme.color.green01};`}
`;

// export type MessageType = FieldError | "success" | null;

interface LabeledTextInputProps {
   label: string;
   inputType: HTMLInputTypeAttribute;
   error?: string;
   placeholder?: string;
   name: string;
   value: any;
   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
   onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

function LabeledTextInput({
   label,
   inputType,
   error,
   ...props
}: LabeledTextInputProps) {
   return (
      <InputWrap>
         <InputLabel>
            <InputLabelText>{label}</InputLabelText>
            <NoticeText hasError={!!error}>{error}</NoticeText>
         </InputLabel>
         <TextInput type={inputType} {...props} />
      </InputWrap>
   );
}

export default LabeledTextInput;
