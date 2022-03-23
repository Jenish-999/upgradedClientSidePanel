import { types } from "./type";

export const getImgAction = (imgData) => {
  return {
    type: types.GET_IMAGES_SUCCESS,
    payload: imgData,
  };
};

export const getImgFunction = () => {
  return (dispatch) => {
    fetch("https://jenishdemosoc-default-rtdb.firebaseio.com/gallery.json", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((result) => {
        console.log("Image Data", result);
        dispatch(getImgAction(result));
      })
      .catch((err) => {
        console.log("Image Data Error : ", err);
      });
  };
};
