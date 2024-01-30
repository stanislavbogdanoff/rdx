import { useSelector } from "react-redux";

const Display = () => {
  const counter = useSelector((state) => state);

  return <h2>The current value: {counter}</h2>;
};

export default Display;
