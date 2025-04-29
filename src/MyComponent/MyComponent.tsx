import { useState } from "react";
import styles from "./MyComponent.module.css";

export function MyComponent({
  postfixText,
  onCounterIncrease,
}: {
  postfixText?: string;
  onCounterIncrease: (clickCounter: number) => void;
}) {
  const [value, setValue] = useState(0);

  return (
    <>
      <div className={styles["my-comp-title"]}>
        {value} Sample text {postfixText}
      </div>
      <button
        onClick={() => {
          const newValue = value + 1;
          setValue(newValue);

          onCounterIncrease(newValue);
        }}
      >
        Increase
      </button>
    </>
  );
}
