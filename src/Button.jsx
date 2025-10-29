function Button({ show, setShow }) {
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Button" : "Show Button"}
      </button>
    </>
  );
}

export default Button;
