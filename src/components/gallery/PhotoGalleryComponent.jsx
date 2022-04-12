import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImgFunction } from "../../redux/galleryReducer/action";
import Styled from "styled-components";

const PhotoGalleryComponent = () => {
  const imageStorage = useSelector((state) => state.gallery.imageStorage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getImgFunction());
  }, []);
  // console.log("MAIN SCREEN IMAGE DATA ", imageStorage);

  return (
    <Wrapper>
      <div className="container">
        <div className="row">
          <div
            className="uk-child-width-1-4@m row"
            // uk-grid
            uk-lightbox="animation: scale"
          >
            {imageStorage && imageStorage !== "" ? (
              Object.keys(imageStorage).map((id, indx) => {
                return (
                  <div className="my-2 col-md-6" key={id}>
                    <a
                      className="uk-inline gallery-box"
                      href={imageStorage[id].imgUrl}
                      data-caption="Happiness is homemade"
                    >
                      <img src={imageStorage[id].imgUrl} alt />
                    </a>
                  </div>
                );
              })
            ) : (
              <h1>Not Photos Avaiables</h1>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = Styled.div`
.gallery-box{
  width : 100%;
  height: 300px;

  img{
    width : 100%;
    height : 100%;
    object-fit : cover;
  }
}

`;

export default PhotoGalleryComponent;
