import classNames from "classnames";
import "./Button.css";

export function Button({ className, children, onClick }) {
  const styles = classNames(className, "flex", "button");

  return (
    <button className={styles} onClick={onClick}>
      {children}
    </button>
  );
}
