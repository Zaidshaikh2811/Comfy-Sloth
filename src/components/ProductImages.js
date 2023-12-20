import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { single_product_url as url } from "../utils/constants";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import { useProductsContext } from "../context/products_context";

const ProductImages = ({ images = [{ url: "" }] }) => {
  const { single_products: product } = useProductsContext();
  const { id } = useParams();
  const [main, setMain] = useState({});

  const single = async (url) => {
    try {
      const response = await axios.get(url);
      const singleProducts = response.data;
      setMain(singleProducts.images[0]);
    } catch (error) {
      console.log("ERROR");
    }
  };

  useEffect(() => {
    single(`${url}${id}`);
  }, []);

  return (
    <Wrapper>
      <img className="image main" src={main.url} alt="Main Image" />
      <div className="gallery">
        {images.map((image, index) => {
          return (
            <img
              key={index}
              src={image.url}
              alt={image.filename}
              onClick={() => setMain(images[index])}
              className={`${image.url === main.url ? "active" : null}`}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .main {
    height: 600px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    box-shadow: 0px 0px 0px 2px var(--clr-primary-5);
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`;

export default ProductImages;
