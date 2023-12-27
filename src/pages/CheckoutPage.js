import React from "react";
import styled from "styled-components";
import { PageHero, StripeCheckout } from "../components";
import { useCartContext } from "../context/cart_context";
// extra imports
import { Link } from "react-router-dom";
const CheckoutPage = () => {
  const { cart } = useCartContext();
  return (
    <main>
      <PageHero title="checkout"></PageHero>
      <Wrapper className="page">
        {
          // if the cart is empty show a message saying so. Otherwise display the checkout form
          cart.length < 1 ? (
            <div className="empty">
              <h2>Your Cart is Empty</h2>
              <Link to="/products" className="btn">
                Fill It
              </Link>
            </div>
          ) : (
            <StripeCheckout></StripeCheckout>
          )
        }
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.div`
  display: flex;
  align-items: center;

  justify-content: center;
  .empty {
    text-align: center;
  }
`;
export default CheckoutPage;
