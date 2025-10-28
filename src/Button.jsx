import { useState, useEffect } from "react";

function Button() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [filter, setFilter] = useState("None");

  useEffect(() => {
    const colors = [
      "red",
      "blue",
      "black",
      "cyan",
      "green",
      "purple",
      "white",
      "grey",
    ];
    console.log("count has changed");
    document.body.style.backgroundColor = colors[Math.round(Math.random() * 7)];
    // setFilter(filter + "Yo");
    // console.log(filter);
  }, [count, filter]);

  useEffect(() => {
    console.log("we ain't changing nothing");
    // setCount2(count2 + 1);
  }, [count2]);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <button onClick={() => setCount2(count2 + 1)}>{count2}</button>
    </>
  );
}

export default Button;
