import { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#FFFFFF");
  function changeColor(event) {
    setColor(event.target.value);
  }
  return (
    <>
      <div className="centerd-div">
        <h1>Color Picker</h1>
        <div className="color-display" style={{ backgroundColor: color }}>
          <h3>Selected Color: {color}</h3>
        </div>
        <div className="inp">
          <label>Select a color: </label>
          <input type="color" value={color} onChange={changeColor}></input>
        </div>
      </div>
    </>
  );
}
export default ColorPicker;
