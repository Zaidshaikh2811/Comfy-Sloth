import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
// import { Outlet } from "react-router-dom";
// import { loadStripe } from "@stripe/stripe-js";

const AuthWrapper = ({ children }) => {
  const { isLoading, error } = useAuth0();
  if (isLoading) {
    return (
      <Wrapper>
        <h1>Loading...</h1>
      </Wrapper>
    );
  }
  if (error) {
    return (
      <Wrapper>
        <h1>Error...</h1>
      </Wrapper>
    );
  }
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  width:100vw,
  place-items: center;
`;

export default AuthWrapper;
