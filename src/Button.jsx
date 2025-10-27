function Button({ func, msg, color, text }) {
  return (
    <button
      onClick={() => func(msg)}
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
}

export default Button;
