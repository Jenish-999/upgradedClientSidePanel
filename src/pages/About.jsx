import React from "react";
import Wrapper from "../commonComponets/Wrapper";
import HeadingDisplay from "../components/HeadingDisplay";
import Styled from "styled-components";
import FirstSection from "../components/About/FirstSection";
import SecondSection from "../components/About/SecondSection";

const About = () => {
  return (
    <>
      <Wrapper>
        <HeadingDisplay
          subject={"About Digital Society"}
          desp={
            "Green park luxuria steping ahead to integrate with digital world"
          }
        />
        <WeAreBlock>
          <FirstSection />
          <SecondSection />
        </WeAreBlock>
      </Wrapper>
    </>
  );
};

export const WeAreBlock = Styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
flex-wrap: nowrap;
width: 100%;
height: 900px;
margin-bottom: 10px;
`;

export const AboutUsSection = Styled.div`
background: #b91616c9;
width: 100%;
height: 50%;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
align-items: center;
justify-content: center;
position: relative;
@media screen and (max-width : 729px){   
  width: 100%;
  height: 70%;
}

`;

export const AboutUsImage = Styled.div`
position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 53%;
  overflow: hidden;
    @media screen and (max-width : 729px){   
      width: 100%;
      height: 0;
}
`;

export const AboutUsInfo = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-evenly;
  width: 40%;
  height: 80%;
  margin-right: 850px;
  margin-left: 12px;
  z-index: 2;

      h2{
        color: white;
        font-size: 30pt;
        text-align: right;
      }

      p{
        color: white;
        font-size: 12pt;
        text-align: right;
      }

      a{
        background-color: white;
        color: #0c4c91;
        width: 150px;
        text-align: center;
        padding: 10px 0px 10px 0px;
        font-size: 10pt;
        text-decoration: none;
        border-radius: 5px;
        box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
        transition: .2s ease-in;
      }

      a:hover{
        background: #A6907D;
        color: white;
        box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
        // transform: translateY(10px);
      
      }

      @media screen and (max-width : 729px){   
        margin-right: 0px;
        margin-left: 0px;
        width:auto; 
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        h2{
          color: white;
          font-size: 20pt;
          text-align: right;
        }
  
        p{
          color: white;
          font-size: 10pt;
          text-align: center;

        }
  
       
  }
`;

export const HistorySection = Styled.div`
width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  position: relative;
  @media screen and (max-width : 729px){   
    height: 100%;
}

`;

export const HistoryImage = Styled.div`
position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 53%;
  overflow: hidden;
  
  @media screen and (max-width : 729px){   
    width: 100%;
    height:0;
}




`;

export const HistoryInfo = Styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-evenly;
width: 40%;
height: 80%;
margin-left: 850px;
margin-right: 12px;
z-index: 2;

      h2{
        color: #0c4c91;
        font-size: 30pt;
        text-align: left;
      }

      p{
        color: #0c4c91;
        font-size: 12pt;
        text-align: left;
      }

      a{
        background-color: #0c4c91;
        color: white;
        width: 150px;
        text-align: center;
        padding: 10px 0px 10px 0px;
        font-size: 10pt;
        text-decoration: none;
        border-radius: 5px;
        box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
        transition: .2s ease-in;
      }

      a:hover{
        background: #101212;
        color: white;
        box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
        // transform: translateX(10px);
      }

      @media screen and (max-width : 729px){   
        margin-right: 0px;
        margin-left: 0px;
        width:auto; 
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        h2{
          font-size: 30pt;
          text-align: center;
        }
  
        p{
          text-align: center;
        }
  }


`;

export default About;
