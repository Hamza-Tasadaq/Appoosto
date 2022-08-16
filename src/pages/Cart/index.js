import { useSelector } from "react-redux";
import { Cart as ProductCart, Payment } from "../../components";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);

  return (
    <>
      <ProductCart />
      {cart.length > 0 && <Payment />}
    </>
  );
};

export default Cart;
