import "./Button.css";

export function Button({ children, onClick }) {
  return (
    <button className="flex button" onClick={onClick}>
      {children}
    </button>
  );
}
