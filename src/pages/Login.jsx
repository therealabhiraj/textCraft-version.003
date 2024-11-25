// App.jsx

import React, { useState } from "react";  // Import React and useState
import * as Components from "../components/Componentsh";  // Import all styled components from Components.jsx
import "./styles1.css";  // Import the global styles
// import styled from "styled-components";



function Login() {
  const [signIn, toggle] = useState(true);  // State to toggle between sign in and sign up

  return (<>
    <div className="hidden sm:flex justify-center bg-slate-400  items-center h-screen  ">
    <Components.Container>
      {/* Sign Up Form */}
      
      <Components.SignUpContainer signingIn={signIn}>
        <Components.Form>
          <Components.Title>Create Account</Components.Title>
          <Components.Input type="text" placeholder="Name" />
          <Components.Input type="email" placeholder="Email" />
          <Components.Input type="password" placeholder="Password" />
          <Components.Button>Sign Up</Components.Button>
        </Components.Form>
      </Components.SignUpContainer>

      {/* Sign In Form */}
      <Components.SignInContainer signingIn={signIn}>
        <Components.Form>
          <Components.Title>Sign in</Components.Title>
          <Components.Input type="email" placeholder="Email" />
          <Components.Input type="password" placeholder="Password" />
          <Components.Anchor href="/">Back to home ..</Components.Anchor>
          <Components.Button>Sign In</Components.Button>
        </Components.Form>
      </Components.SignInContainer>

      {/* Overlay for toggling between sign up and sign in */}
      <Components.OverlayContainer signingIn={signIn}>
        <Components.Overlay signingIn={signIn}>
          <Components.LeftOverlayPanel signingIn={signIn}>
            <Components.Title>Welcome Back!</Components.Title>
            <Components.Paragraphsm>
              To keep connected with us please login with your personal info.
            </Components.Paragraphsm>
            <Components.GhostButton onClick={() => toggle(true)}>
              Sign In
            </Components.GhostButton>
          </Components.LeftOverlayPanel>

          <Components.RightOverlayPanel signingIn={signIn}>
            <Components.Title>Hello, Friend!</Components.Title>
            <Components.Paragraphsm>
              Enter your personal details and start your journey with us.
            </Components.Paragraphsm>
            <Components.GhostButton onClick={() => toggle(false)}>
              Sign Up
            </Components.GhostButton>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>

    </Components.Container></div>

{/* for smaller devicessm */}
    <div className="sm:hidden border flex justify-center items-center  h-screen w-screen py-1/2">

    <Components.Containersm>
      {/* Sign Up Form */}
      <Components.SignUpContainer signingIn={signIn}>
        <Components.Formsm>
          <Components.Titlesm>Create Account</Components.Titlesm>
          <Components.Inputsm type="text" placeholder="Name" />
          <Components.Inputsm type="email" placeholder="Email" />
          <Components.Inputsm type="password" placeholder="Password" />
          <Components.Buttonsm>Sign Up</Components.Buttonsm>
        </Components.Formsm>
      </Components.SignUpContainer>

      {/* Sign In Form */}
      <Components.SignInContainer signingIn={signIn}>
        <Components.Formsm>
          <Components.Titlesm>Sign in</Components.Titlesm>
          <Components.Inputsm type="email" placeholder="Email" />
          <Components.Inputsm type="password" placeholder="Password" />
          <Components.Anchor href="#">Forgot your password?</Components.Anchor>
          <Components.Buttonsm>Sign In</Components.Buttonsm>
        </Components.Formsm>
      </Components.SignInContainer>

      {/* Overlay for toggling between sign up and sign in */}
      <Components.OverlayContainer signingIn={signIn}>
        <Components.Overlay signingIn={signIn}>
          <Components.LeftOverlayPanelsm signingIn={signIn}>
            <Components.Titlesm>Welcome Back!</Components.Titlesm>
            <Components.Paragraph>
              To keep connected with us please login with your personal info.
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(true)}>
              Sign In
            </Components.GhostButton>
          </Components.LeftOverlayPanelsm>

          <Components.RightOverlayPanelsm signingIn={signIn}>
            <Components.Titlesm>Hello, Friend!</Components.Titlesm>
            <Components.Paragraph>
              Enter your personal details and start your journey with us.
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(false)}>
              Sign Up
            </Components.GhostButton>
          </Components.RightOverlayPanelsm>
        </Components.Overlay>
      </Components.OverlayContainer>

    </Components.Containersm>

    </div></>
  );
}

export default Login;
