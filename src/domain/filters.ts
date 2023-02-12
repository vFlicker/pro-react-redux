export enum Color {
  Transparent = '',
  Green = 'green',
  Blue = 'blue',
  Orange = 'orange',
  Purple = 'purple',
  Red = 'red',
}

export enum Status {
  All = 'all',
  Active = 'active',
  Completed = 'completed',
}

export type Filters = {
  filterByColors: Color[];
  filterByStatus: Status;
};

export const colors = Object.values(Color);

export const changeFilterByColor = (colors: Color[], color: Color): Color[] => {
  const isIncludes = colors.includes(color);

  if (!isIncludes) return [...colors, color];

  return colors.filter((item) => item !== color);
};
