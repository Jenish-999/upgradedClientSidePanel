import React from "react";
import { HistoryImage, HistoryInfo, HistorySection } from "../../pages/About";

const SecondSection = () => {
  return (
    <>
      {/* Main Socity second Section Area Start */}
      <HistorySection>
        <HistoryImage>
          <img
            src="https://www.superdraft.com.au/wp-content/uploads/2018/03/How-to-Build-a-Reception-Design-that-Leverages-your-Company%E2%80%99s-Image-1.jpg"
            width={951}
            height={471}
            alt="Building Pic"
          />
        </HistoryImage>
        <HistoryInfo>
          <h2>Transmission..</h2>
          <p>
            In 2018, technology companies, Desktop Doctors &amp; Digital Upgrade
            found a new place to call home, at 816 N. 9th Ave. Since the
            takeover of the 118-year-old building (formally Stippler Tool &amp;
            Supply and Crown Chair Company), there have been many renovations
            completed to preserve this local piece of Evansville, IN history.
          </p>
          <a href="/" title="History Button">
            HISTORY
          </a>
        </HistoryInfo>
      </HistorySection>
      {/* Main Socity second Section Area End */}
    </>
  );
};

export default SecondSection;
