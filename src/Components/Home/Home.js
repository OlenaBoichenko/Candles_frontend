import { useNavigate } from "react-router";
import { Fade } from "react-awesome-reveal";
import { Items } from "../../Items";

import brand from "../../images/brand.png";
import aleksandra from "../../images/aleksandra.png";
import christian from "../../images/christian.png";
import courtney from "../../images/courtney.png";
import vinicius from "../../images/vinicius.png";

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
      <div>
        <div className="brand">
          <h2>Our Brand</h2>
        </div>
        <div className="brand_image">
          <Fade cascade damping={1} direction="left">
            <img src={brand} alt="candle" />
          </Fade>
          <Fade cascade damping={1} direction="right" className="brand_des">
            <div className="brand_des">
              <p>
                Scented candles are a simple and beautiful way to fill the space
                around you with aroma. A pleasant smell, calming combustion and
                stunningly beautiful jars and glasses that complement the
                interior: this is why we love aroma candles.
              </p>
              <p>
                Our candles are the perfect addition to your decor, adding
                elegance and coziness to any room. Choose a candle that suits
                your condition.
              </p>
              <button onClick={() => goToCatalog()}>Your Choice</button>
            </div>
          </Fade>
        </div>
        <div className="brand">
          <h2>Our Team</h2>
        </div>
        <div className="team">
          <Fade cascade damping={0.7}>
            <div className="face">
            <img src={aleksandra} alt="face" />
            <p>Aleksandra - CEO</p>
            </div>
            <div className="face">
            <img src={christian} alt="face" />
            <p>Christian - designer</p>
            </div>
            <div className="face">
            <img src={courtney} alt="face" />
            <p>Courtney - creator</p>
            </div>
            <div className="face">
            <img src={vinicius} alt="face" />
            <p>Vinicius - inspirer</p>
            </div>
          </Fade>
        </div>
      </div>

      <Items />

      <button onClick={() => goToCatalog()}>Would you like to see more</button>
    </div>
  );
};
