import React from "react";
import "/node_modules/video-react/dist/video-react.css"; // import css

import Wrapper from "../commonComponets/Wrapper";
import BannerComponent from "../components/Home/BannerComponent";
import OwlCarousel from "../components/Home/OwlCarousel";
import ProfileEvents from "../components/Home/ProfileEvents";
import NoticeComponent from "../components/Home/NoticeComponent";
import SocFactsComponent from "../components/Home/SocFactsComponent";

const Home = () => {
  return (
    <>
      <Wrapper>
        <div>
          <BannerComponent />
          <OwlCarousel />
          <ProfileEvents />
          <NoticeComponent />
          <SocFactsComponent />
        </div>
      </Wrapper>
    </>
  );
};

export default Home;
