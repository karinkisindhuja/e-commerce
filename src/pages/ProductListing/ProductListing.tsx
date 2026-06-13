import { useEffect, useState } from "react";
import styles from "./ProductListing.module.scss";
import Navbar from "../../components/Navbar/Navbar";
import type { Product } from "../../types/product.ts";
import ProductCard from "../../components/ProductCard/ProductCard.tsx";
const ProductListing = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data);
      setProducts(data || []);
    } catch (error) {
      console.error("Error fetching products:", error);
      setError("Failed to fetch products.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className={styles.container}>
      <Navbar />

      <div className={styles.productsContainer}>
        {loading && <p>Loading products...</p>}
        {error && <p>{error}</p>}

        <div className={styles.productGrid}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProductListing;
