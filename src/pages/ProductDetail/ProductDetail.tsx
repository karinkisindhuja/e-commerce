import { useContext, useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { CartContext } from "../../stores/CartContext";
import { productVariants } from "../../data/ProductVariants";
import Toast from "../../components/Toast/Toast";
import styles from "./ProductDetail.module.scss";
import { IoArrowBackSharp } from "react-icons/io5";

const ProductDetail = () => {
  const { id } = useParams();

  const { cartItems, addToCart, updateQuantity } = useContext(CartContext);

  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const [showToast, setShowToast] = useState(false);

  const [selectedImage, setSelectedImage] = useState("");

  const [selectedColor, setSelectedColor] = useState("");

  const [selectedSize, setSelectedSize] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();
  const colorFromUrl = searchParams.get("color");

  const sizeFromUrl = searchParams.get("size");
  const updateVariantUrl = (color: string, size: string) => {
    setSearchParams({
      color,
      size,
    });
  };

  const variants = productVariants[Number(id)] || [
    {
      color: "Black",
      size: "M",
      stock: 10,
    },
  ];

  const colors = [...new Set(variants.map((variant) => variant.color))];
  console.log("id", id);
  console.log("variants", variants);
  const availableSizes = variants.filter(
    (variant) => variant.color === selectedColor,
  );

  const selectedVariant = variants.find(
    (variant) =>
      variant.color === selectedColor && variant.size === selectedSize,
  );

  const isSoldOut = selectedVariant?.stock === 0;
 
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);

        const data = await response.json();

        setProduct(data);
        setSelectedImage(data.image);

        if (variants.length) {
          const initialColor = colorFromUrl || variants[0].color;

          const initialSize =
            sizeFromUrl ||
            variants.find((variant) => variant.color === initialColor)?.size ||
            "";

          setSelectedColor(initialColor);

          setSelectedSize(initialSize);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, colorFromUrl, sizeFromUrl]);

  const cartItem = cartItems.find((item: any) => item.id === product?.id);

  const quantityInCart = cartItem?.quantity || 0;

  const images = [product?.image, product?.image, product?.image];

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: 1,
      color: selectedColor,
      size: selectedSize,
    });

    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  if (loading) return <h2>Loading...</h2>;

  const originalPrice = (product.price * 1.2).toFixed(2);

  const discount = Math.round(
    ((Number(originalPrice) - product.price) / Number(originalPrice)) * 100,
  );

  return (
    <>
      {showToast && <Toast message="Added to cart!" />}
      <div className={styles.productDetail}>
        <Link to="/" className={styles.backLink}>
          <IoArrowBackSharp /> Home
        </Link>
        {/* LEFT */}
        <div className={styles.thumbnailSection}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="Image Thumbnail"
              className={
                selectedImage === image
                  ? styles.activeThumbnail
                  : styles.thumbnail
              }
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>

        {/* CENTER */}
        <div className={styles.imageSection}>
          <img src={selectedImage} alt={product.title} />
        </div>

        {/* RIGHT */}
        <div className={styles.infoSection}>
          <p className={styles.brand}>{product.category}</p>

          <h2>{product.title}</h2>

          <div className={styles.ratingRow}>
            ⭐⭐⭐⭐⭐
            <span>{product.rating?.rate}</span>
            <span>({product.rating?.count} Reviews)</span>
          </div>

          <div className={styles.priceContainer}>
            <span className={styles.salePrice}>₹ {product.price}</span>

            <span className={styles.originalPrice}>₹ {originalPrice}</span>

            <span className={styles.discountBadge}>{discount}% OFF</span>
          </div>

          <p className={styles.description}>{product.description}</p>
          <div className={styles.optionsContainer}>
            {/* COLORS */}

            <div>
              <h4>Colors</h4>

              <div className={styles.colorContainer}>
                {colors.map((color) => (
                  <button
                    key={color}
                    style={{
                      backgroundColor: color.toLowerCase(),
                    }}
                    className={
                      selectedColor === color
                        ? styles.selectedColor
                        : styles.colorCircle
                    }
                    onClick={() => {
                      const firstSize = variants.find(
                        (variant) => variant.color === color,
                      );

                      if (!firstSize) return;

                      setSelectedColor(color);
                      setSelectedSize(firstSize.size);

                      updateVariantUrl(color, firstSize.size);
                    }}
                  />
                ))}
              </div>
            </div>

            {/* SIZES */}

            <div>
              <h4>Sizes</h4>

              <div className={styles.sizeContainer}>
                {availableSizes.map((size) => (
                  <button
                    key={size.size}
                    disabled={size.stock === 0}
                    className={`${styles.sizeButton}
            ${size.size === selectedSize ? styles.selectedSize : ""}
            ${size.stock > 0 && size.stock <= 2 ? styles.lowStock : ""}
            ${size.stock === 0 ? styles.soldOut : ""}`}
                    onClick={() => {
                      setSelectedSize(size.size);

                      updateVariantUrl(selectedColor, size.size);
                    }}
                  >
                    {size.size}
                  </button>
                ))}
              </div>

              {selectedVariant &&
                selectedVariant.stock > 0 &&
                selectedVariant.stock <= 2 && (
                  <p className={styles.stockWarning}>
                    Only {selectedVariant.stock}
                    left in stock
                  </p>
                )}
            </div>
          </div>

          {/* QUANTITY */}

          <div className={styles.quantityPicker}>
            <button
              disabled={quantityInCart <= 0}
              onClick={() => updateQuantity(product.id, quantityInCart - 1)}
            >
              -
            </button>

            <span>{quantityInCart}</span>

            <button
              onClick={() =>
                quantityInCart === 0
                  ? handleAddToCart()
                  : updateQuantity(product.id, quantityInCart + 1)
              }
            >
              +
            </button>
          </div>

          <button
            className={styles.addButton}
            disabled={isSoldOut}
            onClick={handleAddToCart}
          >
            {isSoldOut ? "Sold Out" : "Add To Cart"}
          </button>
        </div>
      </div>
  
    </>
  );
};

export default ProductDetail;
