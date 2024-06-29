// import { useState } from "react";
import EditableText from "./components/EditableText";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [text, setText] = useLocalStorage(
    "text",
    "Lorem ipsum dolor sit amet consectetur"
  );

  return (
    <>
      <EditableText value={text} onEdit={(value) => setText(value)} />
    </>
  );
}

export default App;
