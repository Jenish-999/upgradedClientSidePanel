import { types } from "./type";

export const allNoticeDisplayAction = (result) => {
  return {
    type: types.NOTICE_DISPLAY_SUCCESS,
    payload: result,
  };
};

// all notice display function
export const allNoticeDisplayFunction = () => {
  return (dispatch) => {
    fetch(
      `https://jenishdemosocmember-default-rtdb.firebaseio.com/noticeDisplay.json`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((resp) => resp.json())
      .then((result) => {
        console.log("All Notice : ", result);
        dispatch(allNoticeDisplayAction(result));
      });
  };
};
