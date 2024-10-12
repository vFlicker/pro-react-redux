export const withChildFunction = (fn) => (Wrapped) => {
  return (props) => <Wrapped {...props}>{fn}</Wrapped>;
};
