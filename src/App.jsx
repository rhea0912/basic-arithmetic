import { useRef, useState } from "react";
import InputField from "./shared/InputField";
import Button from "./shared/Button";
import "./App.css";

function App() {
  const value1Ref = useRef(null);
  const value2Ref = useRef(null);

  const [ops, setOps] = useState({
    color: "gray",
    operation: "",
  });
  const [result, setResult] = useState("");

  const btnAdd = () => {
    if (value1Ref.current.value == "" || value2Ref.current.value == "") return;

    let value1 = parseInt(value1Ref.current.value);
    let value2 = parseInt(value2Ref.current.value);

    const newObj = { color: "rgb(146,207,152)", operation: "SUM" };
    setOps(newObj);
    setResult(value1 + value2);

    value1Ref.current.value = "";
    value2Ref.current.value = "";
  };

  const btnMinus = () => {
    if (value1Ref.current.value == "" || value2Ref.current.value == "") return;

    let value1 = parseInt(value1Ref.current.value);
    let value2 = parseInt(value2Ref.current.value);

    setOps({ color: "rgb(255,153,153, .6)", operation: "DIFFERENCE" });
    setResult(value1 - value2);

    value1Ref.current.value = "";
    value2Ref.current.value = "";
  };
  const btnTimes = () => {
    if (value1Ref.current.value == "" || value2Ref.current.value == "") return;
    let value1 = parseInt(value1Ref.current.value);
    let value2 = parseInt(value2Ref.current.value);

    setOps({ color: "rgb(255,220,153)", operation: "PRODUCT" });
    setResult(value1 * value2);

    value1Ref.current.value = "";
    value2Ref.current.value = "";
  };
  const btnDivide = () => {
    if (value1Ref.current.value == "" || value2Ref.current.value == "") return;
    let value1 = parseInt(value1Ref.current.value);
    let value2 = parseInt(value2Ref.current.value);

    setOps({ color: "rgb(240,153,231)", operation: "QOUTIENT" });
    setResult(value1 / value2);

    value1Ref.current.value = "";
    value2Ref.current.value = "";
  };

  const btnClear = () => {
    setResult("");
    setOps({color:"gray", operation: ""})
  };
  return (
    <div className="header">
      <div className="center">
        <h1>Basic-Arithmetic</h1>
        <div className="input-container">
          <InputField placeholder="Value 1" inputRef={value1Ref} />
          <InputField placeholder="Value 2" inputRef={value2Ref} />
        </div>
        <div className="operations">
          <Button buttonClick={btnAdd} className="btn-add" label="Add" />
          <Button buttonClick={btnMinus} className="btn-minus" label="Minus" />
          <Button buttonClick={btnTimes} className="btn-times" label="Times" />
          <Button
            buttonClick={btnDivide}
            className="btn-divide"
            label="Divide"
          />
        </div>
        <div className="result-con">
          <div className="ops-result" style={{ backgroundColor: ops.color }}>
            {ops.operation}
          </div>
          <div className="result">{result}</div>
        </div>
        <div className="btn-clear-wrapper">
          <Button label="Clear" className="btn-clear" buttonClick={btnClear} />
        </div>
      </div>
    </div>
  );
}

export default App;
