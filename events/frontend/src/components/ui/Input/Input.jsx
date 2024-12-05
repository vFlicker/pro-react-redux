import classes from './Input.module.css';

export function Input({ label, id, error, type, ...props }) {
  const Tag = type === 'textarea' ? 'textarea' : 'input';

  return (
    <div className={`${classes.control} ${classes.noMargin}`}>
      <label htmlFor={id}>{label}</label>
      <Tag id={id} type={type} {...props} />
      <div className={classes.controlError}>{error && <p>{error}</p>}</div>
    </div>
  );
}
