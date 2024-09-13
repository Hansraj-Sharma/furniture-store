import React, { useContext } from "react";
import Section from "../../components/section";
import SProduct from "../../components/sProduct";
import { useParams, useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { CartContext } from "../../context/cartProvider";

const SingleProduct = () => {
  const { cart, addToCart } = useContext(CartContext);
  let { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});

  const getPopularProduct = useCallback(
    async (productId) => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const json = await response.json();
        setProduct(json);
      } catch (error) {
        console.error("Failed to fetch product:", error);
        navigate("/");
      }
    },
    [navigate]
  );

  useEffect(() => {
    getPopularProduct(id);
  }, [getPopularProduct, id]);
  return (
    <Section py={48}>
      <SProduct
        item={product}
        id={product.id}
        img={product.image}
        name={product.title}
        price={product.price}
        addToCart={addToCart}
        cart={cart}
      />
    </Section>
  );
};

export default SingleProduct;
