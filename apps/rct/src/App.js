//shared component
// import { Buttons } from "ui";
import "./App.css";
//import as commonJS module
let mathOps = require("@AccentureVFInnovation/helperfunction");

function App() {
  //log the data
  console.log(mathOps.subtract(6, 3));
  return (
    <div className="App">
      <h1>React Js</h1>
      {/* <Buttons /> */}
    </div>
  );
}

export default App;
