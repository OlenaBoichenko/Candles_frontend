import { useNavigate } from "react-router";
import { Items } from "../../Items";

export const Home = () => {
  const navigate = useNavigate();

  const goToCatalog = () => {
    navigate("/catalog");
    window.scrollTo(0, 0);
  };


  return (
    <div>
      <div className="back">
        <div className="container">
          <h1>SCENTED CANDELS</h1>
          <h3>Handmade with fragrances from France</h3>
        </div>
      </div>
      <div className="choose_btn">
        <button onClick={() => goToCatalog()}>CHOOSE a CANDLE</button>
      </div>
      <h2>FRAGRANCES for HOME</h2>
      <Items />

      <button onClick={() => goToCatalog()}>Would you like to see more</button>
    </div>
  );
};
