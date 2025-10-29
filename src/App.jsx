import "./App.css";
import Button from "./components/Button.jsx";
import ButtonSection from "./components/ButtonSection.jsx";
import Textbox from "./components/Textbox.jsx";
import { TextBlock } from "./components/TextBlock.jsx";
import { StoreItem } from "./components/StoreItem.jsx";
import { useState } from "react";

function App() {
  const item1 = { title: "Gloves", description: "Footbal Gloves", price: 100 };
  const item2 = { title: "Ball", description: "Footbal Ball", price: 1000 };

  function HandleShow({ show }) {
    if (show) {
      return <StoreItem item={item1} />;
    }
  }

  const [showItem, setShowItem] = useState(false);

  return (
    <>
      <Button
        show={showItem}
        setShow={setShowItem}
      />
      <HandleShow show={showItem} />
      {showItem && <StoreItem item={item2} />}
    </>
  );
}

export default App;
