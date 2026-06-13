import type { Product } from "../../types/product";
import styles from "./productCard.module.scss";
import { CartContext } from "../../stores/CartContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { title, description, price } = product;
  const navigate = useNavigate();

  const { addToCart } = useContext(CartContext);
  const handleProductClick = () => {
    navigate(`/products/${product.id}`);
  };
  return (
    <div className={styles.card}>
      <img
        className={styles.image}
        src={product.image}
        alt={product.title}
        onClick={handleProductClick}
      />
      

      <div className={styles.content}>
        <h3 className={styles.title} onClick={handleProductClick}>
          {title}
        </h3>

        <div className={styles.footer}>
          <span className={styles.price}>${price.toFixed(2)}</span>

          <button className={styles.button} onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
