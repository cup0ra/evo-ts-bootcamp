export interface IState {
  search: string;
  dataImages: IImage[];
}
export interface IImage {
  height: number;
  width: number;
  alt: string;
  url: string;
}
export type HandleChange = (event: React.ChangeEvent<HTMLInputElement>) => void;
export type HandleSubmit = (event: React.FormEvent<HTMLFormElement>) => void;
