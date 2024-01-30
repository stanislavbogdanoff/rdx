import PlusBtn from "./PlusBtn";
import { useDispatch } from "react-redux";

const Buttons = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <PlusBtn />
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "RESET" })}>CE</button>
    </div>
  );
};

export default Buttons;
