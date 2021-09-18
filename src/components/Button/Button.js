import "./Button.css";

const Button = ({ setCurrentPlayer, children }) => {
  return <button onClick={setCurrentPlayer}>{children}</button>;
};

export default Button;
