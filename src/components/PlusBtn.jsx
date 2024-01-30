import { useDispatch } from "react-redux";

const PlusBtn = () => {
  const dispatch = useDispatch();

  return <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>;
};

export default PlusBtn;
