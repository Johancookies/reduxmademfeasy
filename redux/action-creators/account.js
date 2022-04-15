export const addMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "add",
      payload: amount,
    });
  };
};

export const deleteMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "delete",
      payload: amount,
    });
  };
};
