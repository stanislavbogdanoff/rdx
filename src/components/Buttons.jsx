import PlusBtn from "./PlusBtn";

const Buttons = ({ handleChangeState, counterProps }) => {
  return (
    <div>
      <PlusBtn
        handleChangeState={handleChangeState}
        counterProps={counterProps}
      />
      <button onClick={() => handleChangeState(counterProps - 1)}>-</button>
    </div>
  );
};

export default Buttons;
