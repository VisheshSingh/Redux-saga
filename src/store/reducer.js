const initState = {
  age: 18
};

const reducer = (state = initState, action) => {
  const newState = { ...state };

  if (action.type === "ADD") {
    newState.age += action.value;
  }
  if (action.type === "SUBTRACT") {
    newState.age -= action.value;
  }
  return newState;
};

export default reducer;
