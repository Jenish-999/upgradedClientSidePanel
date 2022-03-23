import React from "react";
import Wrapper from "../commonComponets/Wrapper";
import PhotoGalleryComponent from "../components/gallery/PhotoGalleryComponent";
import HeadingDisplay from "../components/HeadingDisplay";

const Gallery = () => {
  return (
    <>
      <Wrapper>
        <HeadingDisplay
          subject={"Access Photogravure"}
          desp={"All sweet memories resides here"}
        />
        <PhotoGalleryComponent />
      </Wrapper>
    </>
  );
};

export default Gallery;
