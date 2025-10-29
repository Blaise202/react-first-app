import { useState } from "react";

function Textbox() {
  const [text, setText] = useState("");
  function handleEvent(e) {
    setText(e.target.value);
    console.log("The text has changed");
    console.log(e);
  }
  return (
    <>
      <input onChange={(e) => handleEvent(e)} />
      <p>{text}</p>
    </>
  );
}

export default Textbox;
