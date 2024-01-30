const statusReducer = (state = "", action) => {
  switch (action.type) {
    case "NEG":
      return (state = "Negative");
    case "POS":
      return (state = "Positive");
    default:
      return state;
  }
};

export default statusReducer;
