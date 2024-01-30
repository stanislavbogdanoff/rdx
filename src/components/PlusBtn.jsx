const PlusBtn = ({ handleChangeState, counterProps }) => {
  return <button onClick={() => handleChangeState(counterProps + 1)}>+</button>;
};

export default PlusBtn;
