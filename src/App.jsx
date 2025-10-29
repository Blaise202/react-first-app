import "./App.css";
import Button from "./Button.jsx";
import ButtonSection from "./ButtonSection.jsx";
import Textbox from "./Textbox.jsx";
import { TextBlock } from "./TextBlock.jsx";
import { StoreItem } from "./StoreItem.jsx";
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
