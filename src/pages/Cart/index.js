import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Cart as ProductCart, Checkout, Payment } from "../../components";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);

  return (
    <>
      {cart.length > 0 ? (
        <>
          <ProductCart />
          {/* <Payment /> */}
          <Checkout />
        </>
      ) : (
        <div className="w-screen h-screen max-h-full bg-black p-10 flex flex-col justify-between items-center">
          <div className="text-White text-center space-y-4">
            <img src="./assets/empty.png" alt="empty" />
            <h1 className="font-bold text-base">Your cart is empty!</h1>

            <p className="max-w-[255px] font-medium">
              Visit order page to create your order
            </p>
          </div>

          <Link
            className="text-White bg-Vivid-Red-Tangelo rounded-xl py-4 px-10"
            to="/menu"
          >
            visit order page
          </Link>
        </div>
      )}
    </>
  );
};

export default Cart;
