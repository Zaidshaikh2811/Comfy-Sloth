import React from "react";
import styled from "styled-components";
import { PageHero, StripeCheckout } from "../components";
// extra imports

const CheckoutPage = () => {
  return (
    <main>
      <PageHero title="checkout"></PageHero>
      <Wrapper className="page"></Wrapper>
    </main>
  );
};
const Wrapper = styled.div``;
export default CheckoutPage;
