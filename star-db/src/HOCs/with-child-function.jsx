export const withChildFunction = (fn) => (Wrapped) => {
  return function WithChildrenProp(props) {
    return <Wrapped {...props}>{fn}</Wrapped>;
  };
};
