import { useState } from "react";

// Write your Color component here

const Color = ({ color, setSelectedColor }) => {
  return <div className={color} onClick={() => setSelectedColor(color)}></div>;
};

const App = () => {
  const [selectedColor, setSelectedColor] = useState("");
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color="violet" setSelectedColor={setSelectedColor} />
        <Color color="blue" setSelectedColor={setSelectedColor} />
        <Color color="orange" setSelectedColor={setSelectedColor} />
      </div>
    </div>
  );
};

export default App;

// notes:
// useState takes an initial state and returns a function that returns the value of the state on each commit.
// selectedColor: is the picker component which will pass values down to its child Color components
// setSelectedColor: is the function.
