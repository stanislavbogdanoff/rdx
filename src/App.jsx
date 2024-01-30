import "./App.css";
import Display from "./components/Display";
import Buttons from "./components/Buttons";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function App() {
  const status = useSelector((state) => state.status);
  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  useEffect(() => {
    if (counter < 0) {
      dispatch({ type: "NEG" });
    } else {
      dispatch({ type: "POS" });
    }
  }, [counter]);

  return (
    <>
      <h1>State Management in React</h1>
      <Display />
      <Buttons />
      <div>Counter value is {status}</div>
    </>
  );
}

export default App;
