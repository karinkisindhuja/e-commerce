import { useContext , useState} from "react";
import { CartContext } from "../../stores/CartContext";
import styles from "./CartDrawer.module.scss";
import { FiTrash2 } from "react-icons/fi";
import Toast from "../../components/Toast/Toast";


interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
  const { cartItems, removeCartItem, updateQuantity } = useContext(CartContext);
  const [showToast, setShowToast] = useState(false);

  const subtotal = cartItems.reduce(
    (total: number, item: any) => total + item.price * item.quantity,
    0,
  );

  const shipping = cartItems.length > 0 ? 10 : 0;
  const total = subtotal + shipping;

  const handleCheckout = () => {
  onClose();
  setShowToast(true);

  setTimeout(() => {
    setShowToast(false);
  }, 3000);
};

  return (
    <>
      {isOpen && <div className={styles.overlay} onClick={onClose} />}

      <aside className={`${styles.drawer} ${isOpen ? styles.open : ""}`}>
        <div className={styles.header}>
          <h2>Shopping Cart</h2>

          <button className={styles.closeBtn} onClick={onClose}>
            ✕
          </button>
        </div>

        <div className={styles.content}>
          {cartItems.length === 0 ? (
            <div className={styles.empty}>Your cart is empty</div>
          ) : (
            cartItems.map((item: any) => (
              <div key={item.id} className={styles.cartItem}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={styles.image}
                />

                <div className={styles.details}>
                  <button
                    className={styles.removeBtn}
                    onClick={() => removeCartItem(item.id)}
                  >
                    <FiTrash2 />
                  </button>

                  <h4>{item.title}</h4>

                  <p className={styles.price}>${item.price.toFixed(2)}</p>

                  <div className={styles.quantityControls}>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className={styles.footer}>
            <div className={styles.summary}>
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className={styles.summary}>
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>

            <div className={styles.total}>
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button className={styles.checkoutBtn} onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        )}
      </aside>
      {showToast && <Toast message="Order placed successfully!" />}
    </>
  );
};

export default CartDrawer;
