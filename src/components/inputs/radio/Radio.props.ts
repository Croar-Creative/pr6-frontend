import { ChangeEvent } from "react";
export type RadioElementType = {
   id: string;
   label: string;
}[];

export interface RadioProps {
   groupName: string;
   elements: RadioElementType;
   onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
