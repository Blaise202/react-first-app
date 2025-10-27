import "./App.css";
import Button from "./Button.jsx";
import ButtonSection from "./ButtonSection.jsx";

function App() {
  function notify(msg) {
    alert(msg);
  }
  return (
    <>
      <Button
        text={"Sample Text"}
        color={"Red"}
        func={notify}
        msg={"You clicked btn 1"}
      />
      <Button
        text={"I'm Button 2!"}
        color={"Purple"}
      />
      <Button
        text={"Notify"}
        color={"Green"}
        func={notify}
        msg={"Hello! You called me"}
      />
    </>
  );
}

export default App;
