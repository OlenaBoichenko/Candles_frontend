import about from "../../images/about.jpg";

export const About = () => {
  return (
    <div className="container_about">
      <h1>About Us</h1>
      <div className="about">
        <div className="about_img">
          <img src={about} alt="candle" />
        </div>
        <div>
          <h3>We are people who care</h3>
          <ul>
            <li>
              - so that you come home from work and feel like you are in a cozy
              home, where there is no work stress, deadlines or rush
            </li>
            <li>
              - so that when you light candles in the morning, you meditate and
              do yoga, setting yourself up for a new cool day
            </li>
            <li>
              - to give candles and say thank you and love to those who are
              close, who are nearby or far away, but are waiting for a warm cozy
              hug with you
            </li>
            <li>
              - so that a pajama party, a romantic evening, and a date with
              yourself will have a special aroma, so that later you can light it
              up and return to your memory in moments of happiness
            </li>
            <li>
              - so that you receive a quality product, delivery, communication
              with us and it is as comfortable as what you buy
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
