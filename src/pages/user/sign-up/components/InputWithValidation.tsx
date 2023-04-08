import LabeledTextInput, {
   LabeledTextInputProps,
} from "components/inputs/text/LabeledTextInput";
import { SignUpProps } from "../Inputs";
import { useState, InputHTMLAttributes } from "react";

interface InputWithValidationProps
   extends InputHTMLAttributes<HTMLInputElement> {
   label: string;
   input: SignUpProps;
   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

   regExp?: RegExp;
   required?: boolean;
   minLength?: number;
   maxLength?: number;
   length?: number;
   equals?: string;
}

const InputWithValidation = () => {
   // const validateAll = () => {
   //    switch (type) {
   //       case "email":
   //          validateEmail();
   //          break;
   //       case "password":
   //          validatePassword();
   //          break;
   //       case "passwordCheck":
   //          validatePasswordCheck();
   //          break;
   //       case "name":
   //          validateName();
   //          break;
   //       case "phoneNumber":
   //          validatePhoneNumber();
   //          break;
   //       case "authCode":
   //          validateAuthCode();
   //          break;
   //       case "custom":
   //          validateCustom();
   //          break;
   //    }
   //    required && validateRequired();
   //    (minLength || maxLength || length) && validateLength();
   // };

   return <div>s</div>;
};

export default InputWithValidation;
