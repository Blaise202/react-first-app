import { useState } from "react";

function Textbox() {
  const [text, setText] = useState("");
  return (
    <>
      <input onChange={(e) => setText(e.target.value)} />
      <p>{text}</p>
    </>
  );
}

export default Textbox;
