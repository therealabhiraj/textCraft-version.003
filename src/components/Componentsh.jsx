
import styled from "styled-components";

export const Container = styled.div`
    background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 678px;
  max-width: 100%;
  min-height: 500px;
`;


export const Containersm = styled.div`
  background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    position: relative;
    overflow: hidden;
    width: 96%;
    max-width: 100%;
    height: 342px;
`;


export const SignUpContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
  ${(props) =>
    props.signingIn !== true
      ? `
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
    `
      : null}
`;

export const SignInContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  z-index: 2;
  ${(props) => (props.signingIn !== true ? `transform: translateX(100%);` : null)}
`;

export const Form = styled.form`
  background-color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
  
`;


export const Formsm = styled.form`
  background-color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 19px;
  height: 86%;
  text-align: center;
  
`;

export const title = styled.h1`
  font-weight: bold;
  margin: 0;
`;

export const Input = styled.input`
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
`;


export const Inputsm = styled.input`
  background-color: #eee;
border: none;
padding: 8px 10px;
margin: 8px 0;
width: 100%;
`;



export const Button = styled.button`
  border-radius: 20px;
  border: 1px solid #bdc3c7;
  background-color: 
#2c3e50;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  &:active {
    transform: scale(0.95);
  }
  &:focus {
    outline: none;
  }
`;



export const Buttonsm = styled.button`
  border-radius: 20px;
  border: 1px solid #bdc3c7;
  background:
#2c3e50;
  color: #ffffff;
  font-size: 10px;
  font-weight: bold;
  padding: 13px 36px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  &:active {
    transform: scale(0.95);
  }
  &:focus {
    outline: none;
  }
`;

export const GhostButton = styled(Button)`
  background-color: transparent;
  border-color: #ffffff;
`;

export const Anchor = styled.a`
  color: #0d95e8;
  font-size: 14px;
  text-decoration: underline;
  margin: 15px 0;
`;

export const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
  ${(props) => (props.signingIn !== true ? `transform: translateX(-100%);` : null)}
`;

export const Overlay = styled.div`

background: #bdc3c7;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #2c3e50, #bdc3c7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */



//   background: #ff416c;
//   background: -webkit-linear-gradient(to right, #ff4b2b, #ff416c);
//   background: linear-gradient(to right, #ff4b2b, #ff416c);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  ${(props) => (props.signingIn !== true ? `transform: translateX(50%);` : null)}
`;

export const OverlayPanel = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
`;


export const OverlayPanelsm = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 8px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
`;

export const LeftOverlayPanel = styled(OverlayPanel)`
  transform: translateX(-20%);
  ${(props) => (props.signingIn !== true ? `transform: translateX(0);` : null)}
`;

export const RightOverlayPanel = styled(OverlayPanel)`
  right: 0;
  transform: translateX(0);
  ${(props) => (props.signingIn !== true ? `transform: translateX(20%);` : null)}
`;



export const LeftOverlayPanelsm = styled(OverlayPanelsm)`
  transform: translateX(-20%);
  ${(props) => (props.signingIn !== true ? `transform: translateX(0);` : null)}
`;

export const RightOverlayPanelsm = styled(OverlayPanelsm)`
  right: 0;
  transform: translateX(0);
  ${(props) => (props.signingIn !== true ? `transform: translateX(20%);` : null)}
`;

export const Paragraph = styled.p`
  font-size: 13px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0;
`;


export const Paragraphsm = styled.p`
  font-size: 14px;
    font-weight: 100;
    line-height: 17px;
    letter-spacing: 0.5px;
    margin: 15px 0;
`;



export const Title = styled.h1`
  font-size: 22px;
  margin-bottom: 15px;
  text-transform: uppercase;
  font-weight: bold;
`;


export const Titlesm = styled.h1`
    font-size: 15px;
    margin-top: 43px;
    margin-bottom: 8px;
    text-transform: uppercase;
    font-weight: bold;
`;

// Components.jsx

