import styles from "./Navbar.module.scss";
import { CartContext } from "../../stores/CartContext";
import { useContext, useState, useEffect } from "react";
import CartDrawer from "./CartDrawer";
import { FaShoppingCart, FaShopify } from "react-icons/fa";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const [isCartOpen, setIsCartOpen] = useState(false);
  // console.log(cartItems,"cartItems in navbar");

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isCartOpen]);
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo_section}>
          <FaShopify size={32}/>
          <h2>My Store</h2>
          </div>

        <button
          className={styles.cart}
          onClick={() => setIsCartOpen(!isCartOpen)}
        >
          <FaShoppingCart size={24}/>
          <span className={styles.cart_count}>{cartItems.length}</span>
        </button>
      </nav>
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};
export default Navbar;
