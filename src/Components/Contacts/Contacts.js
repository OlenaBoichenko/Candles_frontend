import { useJsApiLoader } from "@react-google-maps/api";
import Map from "./Map";
import { Footer } from "../Footer/Footer";
import { MenuButton } from "../Button/MenuButton";

const API_KEY = process.env.REACT_APP_API_KEY;

const defaultCenter = {
  lat: 41.88,
  lng: -87.62,
};

export const Contacts = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
  });
  return (
    <div>
      <MenuButton />
      <div className="container_contacts">
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you! Whether you have questions about our
          aromatic candles, need assistance with an order, or simply want to
          share your experience with our products, feel free to reach out.
        </p>
        <div className="email">
          <h3>Email:</h3>
          <p>
            For general inquiries and customer support, please email us at{" "}
            <span>support@candelshome.netlify.app</span>
          </p>
        </div>
        <div className="phone">
          <h3>Phone:</h3>
          <p>
            You can also call us at +1 123 456-7890. <br></br>Our customer
            service team is available Monday to Friday, from 9 AM to 5 PM.
          </p>
        </div>
        <div className="map">
          {isLoaded ? <Map center={defaultCenter} /> : <h4>Loading...</h4>}
          <div className="mail">
            <h3>Mailing Address:</h3>
            <ul>
              <li>Candles Home</li>
              <li>123 Aromatic Lane</li>
              <li>Candle City, CA 98765</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
