export type Color =
  | 'green'
  | 'blue'
  | 'orange'
  | 'purple'
  | 'red'
  | 'transparent';

export type Status = 'all' | 'active' | 'completed';

export const FilterByColor: Record<Color, string> = {
  transparent: '',
  green: 'Green',
  blue: 'Blue',
  orange: 'Orange',
  purple: 'Purple',
  red: 'Red',
};

export const colors = Object.keys(FilterByColor);

export const FilterByStatus: Record<Status, string> = {
  all: 'All',
  active: 'Active',
  completed: 'Completed',
};

export const statuses = Object.keys(FilterByStatus);
