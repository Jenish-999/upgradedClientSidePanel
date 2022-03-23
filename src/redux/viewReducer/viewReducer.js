import { types } from "./type";

const initialState = {
  viewDataStorage: {},
};

export const viewReducer = (state = initialState, { type, payload }) => {
  if (type === types.VIEW_DATA_SUCCESS) {
    return { ...state, viewDataStorage: payload };
  }

  return state;
};
