import { useState } from "react";
import { MyComponent } from "./MyComponent/MyComponent";

function App() {
  const [count, setCount] = useState({ counter: 0, a: "a" });

  const onCounterIncrease = (counter: number) => {
    count.counter = counter;
    setCount({ ...count });
  };

  return (
    <>
      <MyComponent
        postfixText="Some postfix text"
        onCounterIncrease={onCounterIncrease}
      />
      <div>My text</div>
      <div>Child counter: {count.counter}</div>
    </>
  );
}

export default App;
