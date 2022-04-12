import { types } from "./type";

// Actions
export const getMaintenanceAction = (result) => {
  return {
    type: types.MAINTENANCE_DATA,
    payload: result,
  };
};
// Functions
export const getMaintenanceFunction = (id) => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  return (dispatch) => {
    fetch(
      `https://jenishdemosocmember-default-rtdb.firebaseio.com/maintenance/${year}/${id}.json`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((resp) => resp.json())
      .then((result) => {
        // console.log("Hello Mainteance Data : ", result);
        dispatch(getMaintenanceAction(result));
      });
  };
};
