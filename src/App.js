import React, { useState } from "react";
import Setup from "./Components/Menu";

function App() {
  const [all, setAll] = useState(true);
  const [breakfast, setBreakfast] = useState(false);
  const [lunch, setLunch] = useState(false);
  const [dinner, setDinner] = useState(false);
  return (
    <div className="container">
      <Setup />
    </div>
  );
}
export default App;
