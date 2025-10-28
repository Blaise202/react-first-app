import { useState } from "react";

function Button({ color }) {
  const [count, setCount] = useState(0);
  return (
    <button
      onClick={() => setCount(count + 1)}
      style={{ backgroundColor: color }}
    >
      {count}
    </button>
  );
}

export default Button;
