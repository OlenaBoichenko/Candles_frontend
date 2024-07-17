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
          <h2>FRAGRANCES for HOME</h2>
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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Provident, autem ullam. Iusto illum ratione explicabo consequuntur
              alias, libero quam magni amet quis et corporis culpa sint ipsa
              vero deleniti earum? Ex reiciendis voluptate totam necessitatibus
              dolore libero velit incidllam, in voluptatem hic, nisi blanditiis
              voluptates ipsum autem nam!
            </p>
          </Modal>
        </>
      )}
    </div>
  );
};

// export const Header = () => {
//     // const [isOpen, setOpen] = useState();

//     return <Router>
//         {/* <header className="header"> */}

//             {/* <nav className={`header_nav ${isOpen ? "active" : ""}`} > */}
//                 <nav>
//                     <div className="logo">
//                         <Link to='/'>
//                 <img src={`${logo}`} className='header_logo' alt="logo" />
//                 </Link>
//                 </div>
//                 <Link to='/' className="nav_link">Home</Link>
//                 <Link to='/catalog' className="nav_link">Catalog</Link>
//                 <Link to='/about' className="nav_link">About</Link>
//                 <Link to='/contacts' className="nav_link">Contacts</Link>
//                 <div >
//                 <Link to='/cart' className="nav_bag">
//                 <svg xmlns="http://www.w3.org/2000/svg"
//                 width="35"
//                 height="35"
//                 fill="#fff"
//                 className=""
//                 viewBox="0 0 16 16">
//                 <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2M5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0z"/></svg>
//                 <span className="bag_quantity">
//                     <span>3</span>
//                 </span>
//                 </Link></div>

//                 </nav>
//                 <Routes>
//                     <Route path='/' element={<Candels />} />
//                     <Route path='/catalog' element={<Catalog />} />
//                     <Route path='/about' element={<About />} />
//                     <Route path='/contacts' element={<Contacts />} />
//                     <Route path='/cart' element={<Cart />} />
//                 </Routes>
//                 {/* <ul className="header_nav-list">
//                     <li className="header_nav-item">Home</li>
//                     <li className="header_nav-item">Catalog</li>
//                     <li className="header_nav-item">About us</li>
//                     <li className="header_nav-item">Contacts</li>
//                     <li className="header_nav-item">Log In</li>
//                     <li className="header_nav-item">Cart</li>
//                 </ul> */}
//             {/* </nav> */}
//             {/* <button className="header_menu-button" onClick={() => setOpen(!isOpen)}>{burger}
//             </button> */}
//         {/* </header> */}

//     </Router>
// }
