import { Items } from "../../Items";
import { MenuButton } from "../Button/MenuButton";
import { Footer } from "../Footer/Footer";

export const Catalog = () => {
  return (
    <div>
      <MenuButton />
      <Items />
      <Footer />
    </div>
  );
};
