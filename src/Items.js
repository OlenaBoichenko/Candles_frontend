import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useGetAllProductsQuery } from "./features/productsApi";
import { addToCart } from "./features/cartSlice";

import Modal from "./Components/Modal/Modal";

export const Items = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  const [modalActive, setModalActive] = useState();

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="info">An error occured</p>
      ) : (
        <>
          <h2 className="title">FRAGRANCES for HOME</h2>
          <div className="container_candles">
            {data.map((product) => (
              <div key={product._id} className="candle_block">
                <img
                  src={product.img}
                  alt="candle"
                  onClick={() => setModalActive(true)}
                />
                <h3>{product.name}</h3>
                <p>$ {product.price}</p>
                <button onClick={() => handleAddToCart(product)}>Order</button>
              </div>
            ))}
          </div>
          <Modal active={modalActive} setActive={setModalActive}>
            <p>
              A classic winter scent with alpine forest and snow falling on the
              woodland, enlivened by cool herbal notes of sage and geranium with
              notes of lemon, eucalyptus and wood.
            </p>
          </Modal>
        </>
      )}
    </div>
  );
};
