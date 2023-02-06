export type Color =
  | 'green'
  | 'blue'
  | 'orange'
  | 'purple'
  | 'red'
  | 'transparent';

export const colorDictionary: Record<Color, string> = {
  transparent: '',
  green: 'Green',
  blue: 'Blue',
  orange: 'Orange',
  purple: 'Purple',
  red: 'Red',
};

export const colors = Object.keys(colorDictionary);
