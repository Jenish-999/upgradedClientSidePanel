import { types } from "./type";

const initialState = {
  allNoticeStorage: {},
  loading: true,
  singleNoticeStorage: {},
};

export const noticeReducer = (state = initialState, { type, payload }) => {
  if (type === types.NOTICE_DISPLAY_SUCCESS) {
    return { ...state, allNoticeStorage: payload, loading: false };
  }

  return state;
};
