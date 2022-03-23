import { types } from "./type";

// memberLoginStorage
const getMemberLoginStorage = () => {
  let memberLoginStorage = localStorage.getItem("memberLoginStorage");
  return memberLoginStorage;
};

// storageSpace for MembersData
const getMemberDetails = () => {
  let memberData = localStorage.getItem("memberData");

  if (memberData) {
    return JSON.parse(memberData);
  } else {
    return {};
  }
};

// Initial State
const initialState = {
  isMemberLogin: getMemberLoginStorage(),
  memberData: getMemberDetails(),
  loading: true,
  fullMemberDetails: {},
  allMembersDetails: {},
};

// Reducer
export const memberReducer = (state = initialState, { type, payload }) => {
  if (type === types.MEMBER_LOGIN_SUCCESS) {
    localStorage.setItem("memberData", JSON.stringify(payload));

    return {
      ...state,
      isMemberLogin: true,
      loading: false,
      memberData: payload,
    };
  }
  if (type === types.MEMBER_LOGOUT_SUCCESS) {
    localStorage.removeItem("memberData");
    return {
      ...state,
      isMemberLogin: localStorage.removeItem("memberLoginStorage"),
      memberData: {},
    };
  }
  if (type === types.MEMBER_DETAILS_SUCCESS) {
    return { ...state, fullMemberDetails: payload, loading: false };
  }
  if (type === types.ALL_MEMBERS_DETAILS) {
    return { ...state, allMembersDetails: payload, loading: false };
  }

  return state;
};
