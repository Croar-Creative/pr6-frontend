import { RadioProps } from "./Radio.props";
import RadioComponents from "./Radio.styled";

function Radio({ groupName, elements, onChange }: RadioProps) {
   return (
      <RadioComponents.RadioGroup>
         {elements.map((el, i) => {
            return (
               <RadioComponents.RadioLabel key={el.id}>
                  <RadioComponents.StyledRadio
                     name={groupName}
                     value={el.id}
                     onChange={onChange}
                     defaultChecked={i === 0}
                  />
                  <RadioComponents.CustomRadio>
                     <span />
                  </RadioComponents.CustomRadio>
                  {el.label}
               </RadioComponents.RadioLabel>
            );
         })}
      </RadioComponents.RadioGroup>
   );
}

export default Radio;
