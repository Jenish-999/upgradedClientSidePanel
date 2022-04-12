import { toast } from "react-toastify";
import { inquiryTypes } from "./types";

export const messageSendAction = () => {
  return {
    type: inquiryTypes.INQUIRY_MESSAGE_SUCCESS,
  };
};

// messageSendFunction
export const messageSendFunction = (values) => {
  return (dispatch) => {
    const resp = fetch(
      "https://jenishsocinquiry-default-rtdb.firebaseio.com/inquiry.json",
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
        if (data.name) {
          // console.log("Data Inquery : ", data);
          toast.success("Response Recorded");
        }
      })
      .catch((err) => {
        // console.log("ERROR : ", err);
        toast.error("Sorry, try later");
      });
  };
};
