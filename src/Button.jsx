function Button() {
  let number = Math.random() * 10;
  let display = "";
  if (number < 5) {
    display = "small number";
  } else {
    display = "large number";
  }
  return (
    <button>
      Test Me {Math.floor(number)} - {display}
    </button>
  );
}

export default Button;
