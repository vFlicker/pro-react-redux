export const isNotEmpty = (value) => {
  return value.trim() !== '';
};

export const hasMinLength = (value, minLength) => {
  return value.length >= minLength;
};

export const isUrl = (value) => {
  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
};
