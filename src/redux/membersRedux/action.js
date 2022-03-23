import { toast } from "react-toastify";
import { types } from "./type.js";

export const memberLoginAction = (data) => {
  return {
    type: types.MEMBER_LOGIN_SUCCESS,
    payload: data,
  };
};

export const memberLogoutAction = () => {
  return {
    type: types.MEMBER_LOGOUT_SUCCESS,
  };
};

export const memberDetailsAction = (data) => {
  return {
    type: types.MEMBER_DETAILS_SUCCESS,
    payload: data,
  };
};

export const allMembersDetailsAction = (data) => {
  return {
    type: types.ALL_MEMBERS_DETAILS,
    payload: data,
  };
};

// allMembersDetailsFunction
export const allMembersDetailsFunction = () => {
  return (dispatch) => {
    fetch(
      `https://jenishdemosocmember-default-rtdb.firebaseio.com/members.json`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        dispatch(allMembersDetailsAction(data));
      });
  };
};

// memberDetailsFunction
export const memberDetailsFunction = (localId) => {
  return (dispatch) => {
    fetch(
      `https://jenishdemosocmember-default-rtdb.firebaseio.com/members/${localId}.json`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((resp) => resp.json())
      .then((data) => {
        // if (data.localId) {
        console.log("Mera Data ID ", data.localId);
        dispatch(memberDetailsAction(data));
        // } else {
        //   toast.error("Sorry, No Access");
        // }
      });
  };
};

// memberLoginFunction
export const memberLoginFunction = (values) => {
  return (dispatch) => {
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDhl3gYN-odPF7eQs1elOTJaFZrEQ2HP34",
      {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((resp) => resp.json())
      .then((data) => {
        // console.log(data);
        if (data.localId) {
          localStorage.setItem("memberLoginStorage", "true");
          // localStorage.setItem("memberLocalId", data.localId);
          dispatch(memberLoginAction(data));
          dispatch(memberDetailsFunction(data.localId));
          // dispatch(memberDetailsFunction(data.localId));
        } else {
          // dispatch(memberLoginFail());
          // console.log("Fail to Pass Data to fireBase");
          toast.error("Invalid userName or Password");
        }
      })
      .catch((err) => {
        console.log("This User Can't logIn", err);
      });
  };
};
