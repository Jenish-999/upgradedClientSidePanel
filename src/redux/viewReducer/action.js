import { types } from "./type";

export const viewDataAction = (result) => {
  return {
    type: types.VIEW_DATA_SUCCESS,
    payload: result,
  };
};

// viewDataFunction
export const viewDataFunction = () => {
  return (dispatch) => {
    fetch(`https://membersocevents-default-rtdb.firebaseio.com/events.json`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((result) => {
        if (result) {
          // console.log(result);
          dispatch(viewDataAction(result));
        }
      })
      .catch((err) => {
        console.log("Error : ", err);
      });
  };
};
