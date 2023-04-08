import styled from "styled-components";

const RadioGroup = styled.div`
   display: flex;
   gap: 21px;
`;

const RadioLabel = styled.label`
   ${({ theme }) => theme.font.body3}
   display: flex;
   align-items: center;
   justify-content: flex-start;
   cursor: pointer;
`;

const CustomRadio = styled.span`
   display: block;
   position: relative;
   width: 20px;
   height: 20px;
   border-radius: 50%;
   border: 1px solid ${({ theme }) => theme.color.gray03};
   margin-right: 10px;

   span {
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.color.gray03};
   }
`;

const StyledRadio = styled.input.attrs({ type: "radio" })`
   display: none;
   :checked + ${CustomRadio} {
      transform: scale(1);
      content: "";
      border-radius: 50%;
      background-color: ${({ theme }) => theme.color.white01};
      border: 2px solid ${({ theme }) => theme.color.yellow01};
      span {
         background-color: ${({ theme }) => theme.color.yellow01};
      }
   }
`;

const RadioComponents = {
   RadioGroup,
   RadioLabel,
   CustomRadio,
   StyledRadio,
};

export default RadioComponents;
