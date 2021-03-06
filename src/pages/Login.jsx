import React from "react";
import Styled from "styled-components";
import ParticleComponent from "../components/Login/ParticleComponent";
import LoginComponent from "../components/Login/LoginComponent";

const Login = () => {
  return (
    <>
      <ParticleComponent />
      <LoginComponent />
    </>
  );
};

export const Container = Styled.div`
display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

`;

export const Screen = Styled.div`
background: linear-gradient(90deg, #5d54a428, #7c78b82f);
  position: relative;
  height: 600px;
  width: 360px;
  box-shadow: 0px 0px 24px #5c5696;
`;

export const Screen_Content = Styled.div`
z-index: 1;
  position: relative;
  height: 100%;
`;

export const Screen_Background = Styled.div`
position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  -webkit-clip-path: inset(0 0 0 0);
  clip-path: inset(0 0 0 0);
`;

export const Screen__Background__Shape = Styled.span`
transform: rotate(45deg);
position: absolute;

.screen__background__shape1 {
  height: 520px;
  width: 520px;
  background: #fff;
  top: -50px;
  right: 120px;
  border-radius: 0 72px 0 0;
}

.screen__background__shape2 {
  height: 220px;
  width: 220px;
  background: #6c63ac;
  top: -172px;
  right: 0;
  border-radius: 32px;
}

.screen__background__shape3 {
  height: 540px;
  width: 190px;
  background: linear-gradient(270deg, #5d54a4, #6a679e);
  top: -24px;
  right: 0;
  border-radius: 32px;
}


`;

// const Screen__Background__Shape1 = Styled.span`
// height: 520px;
//   width: 520px;
//   background: #fff;
//   top: -50px;
//   right: 120px;
//   border-radius: 0 72px 0 0;
// `;

// const Screen__Background__Shape2 = Styled.span`
// height: 220px;
//   width: 220px;
//   background: #6c63ac;
//   top: -172px;
//   right: 0;
//   border-radius: 32px;
// `;

// const Screen__Background__Shape3 = Styled.div`
// height: 540px;
// width: 190px;
// background: linear-gradient(270deg, #5d54a4, #6a679e);
// top: -24px;
// right: 0;
// border-radius: 32px;
// `;

// const Screen__Background__Shape4 = Styled.div`
// height: 400px;
// width: 200px;
// background: #7e7bb9;
// top: 420px;
// right: 50px;
// border-radius: 60px;
// `;

export const Logincls = Styled.form`
width: 320px;
  padding: 30px;
  padding-top: 156px;
`;

export const Login__Field = Styled.div`
padding: 20px 0px;
position: relative;
`;

export const Login_Icon = Styled.i`
position: absolute;
top: 30px;
color: #7875b5;
`;

export const Login_Input = Styled.input`
border: none;
  border-bottom: 2px solid #d1d1d4;
  background: none;
  padding: 10px;
  font-size: 14px;
  padding-left: 24px;
  font-weight: 300;
  width: 75%;
  transition: 0.2s;

    :active{
      outline: none;
  border-bottom-color: #6a679e;
    }

    :focus{
      outline: none;
  border-bottom-color: #6a679e;
    }

    :hover{
      outline: none;
  border-bottom-color: #6a679e;
    }

`;

export const Login_Submit = Styled.button`
background: #fff;
  font-size: 14px;
  margin-top: 30px;
  padding: 16px 20px;
  border-radius: 26px;
  border: 1px solid #d4d3e8;
  text-transform: uppercase;
  font-weight: 700;
  display: flex;
  align-items: center;
  width: 100%;
  color: #4c489d;
  box-shadow: 0px 2px 2px #5c5696;
  cursor: pointer;
  transition: 0.2s;

  :active{
    border-color: #6a679e;
  outline: none;
  }

  :focus{
    border-color: #6a679e;
    outline: none;
  }

  :hover{
    border-color: #6a679e;
    outline: none;
  }


`;

export const Button_Icon = Styled.i`
font-size: 24px;
margin-left: auto;
color: #7875b5;
}
`;

export const Social_Login = Styled.div`
position: absolute;
  height: 140px;
  width: 160px;
  text-align: center;
  bottom: 0px;
  right: 0px;
  color: #fff;
`;

export const Social_Icon = Styled.div`
display: flex;
  align-items: center;
  justify-content: center;
`;

export const Social_Login_Icon = Styled.a`
padding: 20px 10px;
color: #fff;
text-decoration: none;
text-shadow: 0px 0px 8px #7875b5;

  :hover{
    transform: scale(1.5);
  }
`;

export default Login;
