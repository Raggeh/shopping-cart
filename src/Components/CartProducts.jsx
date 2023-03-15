import useShop from "../ShopContext";

const CartProducts = (props) => {
  const { products, removefromCart, total } = useShop();

  return (
    <div className="cart-products">
      <h2> Cart Products </h2>
      {products.map((product) => (
        <div className="cart-product">
          <div className="cart-title-img">
            <img src={product.urlImage} alt="" />
            <span> {product.name} </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartProducts;
