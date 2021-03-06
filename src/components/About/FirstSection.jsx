import React, { useEffect } from "react";
import { AboutUsImage, AboutUsInfo, AboutUsSection } from "../../pages/About";
import AOS from "aos";
const FirstSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      {/* Main Socity first Section Area Start */}
      <AboutUsSection>
        <AboutUsImage>
          <img
            src="https://is1-2.housingcdn.com/4f2250e8/e1b48483897882973877bdaa3f906b7a/v6/fs/bs_indian_oil_heights-vaidpura-noida-ieghs_indian_oil_employees_greentech_housing_society.jpg"
            // width={808}
            height={458}
            alt="Lobby Image"
          />
        </AboutUsImage>
        <AboutUsInfo
          data-aos="fade-out"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <h2>We are Digital Upgrade</h2>
          <p>
            Digital Upgrade, located in{" "}
            <span className="text-dark">GREEN PARK LUXURIA</span>, IN, makes it
            easy for businesses to create and manage their digital presence and
            logistics, meaning we can make your business more efficient and
            profitable! We believe in our community and want to help our local
            business economy grow and expand. We believe in our clients, and
            want to assist in their digital success. The D-UP team grades
            ourselves on outcomes, not on sales.
          </p>
          <a
            href="/"
            title="About Us Button"
            data-aos="fade-right"
            data-aos-offset="250"
            data-aos-easing="ease-in-sine"
          >
            SOCIETY
          </a>
        </AboutUsInfo>
      </AboutUsSection>
      {/* Main Socity first Section Area End */}
    </>
  );
};

export default FirstSection;
