import "./App.css";
import Display from "./components/Display";
import Buttons from "./components/Buttons";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setIsEven, setIsOdd } from "./redux/slices/isEvenSlice";

function App() {
  const status = useSelector((state) => state.status);
  const counter = useSelector((state) => state.counter);
  const isEven = useSelector((state) => state.isEven);

  const dispatch = useDispatch();

  useEffect(() => {
    if (counter < 0) {
      dispatch({ type: "NEG" });
    } else {
      dispatch({ type: "POS" });
    }
  }, [counter]);

  useEffect(() => {
    if (counter % 2 === 0) {
      dispatch(setIsEven());
    } else {
      dispatch(setIsOdd());
    }
  }, [counter]);

  console.log(isEven);

  return (
    <>
      <h1>State Management in React</h1>
      <Display />
      <Buttons />
      <div>Counter value is {status}</div>
      <div>{isEven.isEven ? <h3>Even</h3> : <h3>Odd</h3>}</div>
    </>
  );
}

export default App;
