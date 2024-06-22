import { useState } from "react";
import "./App.css";
import EditableText from "./components/EditableText";

function App() {
  const [text, setText] = useState("Lorem ipsum dolor sit amet consectetur");

  return (
    <>
      <EditableText value={text} onEdit={(value) => setText(value)} />
    </>
  );
}

export default App;
