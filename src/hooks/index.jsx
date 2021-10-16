import { useState } from "react";

export function useCounter(initial = 0) {
  const [count, setCount] = useState(initial);

  return [count, () => setCount(count + 1)];
  // [_, increment]
}

// const [a, setA] = React.useState(0);

// setA(1);

// setA(() => 1);
