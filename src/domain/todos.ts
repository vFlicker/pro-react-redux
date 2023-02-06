import { Color } from './filter';

export type Todo = {
  id: string;
  title: string;
  isChecked: boolean;
  color: Color | null;
};
