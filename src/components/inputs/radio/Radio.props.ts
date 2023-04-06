export type RadioElementType = {
   id: string;
   label: string;
}[];

export interface RadioProps {
   groupName: string;
   elements: RadioElementType;
   setSelectValue: React.Dispatch<React.SetStateAction<string>>;
}
