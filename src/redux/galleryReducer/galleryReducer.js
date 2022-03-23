import { types } from "./type";

const initialState = {
  imageStorage: {},
  loading: true,
};

export const galleryReducer = (state = initialState, { type, payload }) => {
  if (type === types.GET_IMAGES_SUCCESS) {
    return { ...state, imageStorage: payload, loading: false };
  }

  return state;
};
