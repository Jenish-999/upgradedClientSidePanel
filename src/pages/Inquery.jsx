import React from "react";
import Wrapper from "../commonComponets/Wrapper";
import HeadingDisplay from "../components/HeadingDisplay";
import ContactComponent from "../components/Inquery/ContactComponent";

const Inquery = () => {
  return (
    <>
      <Wrapper>
        <HeadingDisplay
          subject={"Inquiry or Contact us"}
          desp={
            "Green park luxuria offers facility to make free inquiry and solve it."
          }
        />
        <ContactComponent />
      </Wrapper>
    </>
  );
};

export default Inquery;
