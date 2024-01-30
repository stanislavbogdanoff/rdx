import { useSelector } from "react-redux";

const Display = () => {
  const counter = useSelector((state) => state.counter);

  return <h2>The current value: {counter}</h2>;
};

export default Display;
