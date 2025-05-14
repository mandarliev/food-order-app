const Button = ({ children, textOnly, className, ...props }) => {
  const cssClasses = textOnly
    ? `text-button ${className}`
    : `button ${className}`;
  return <button className={cssClasses}>{children}</button>;
};

export default Button;
