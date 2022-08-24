import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import DashboardHeaderPhone from "./DashboardHeaderPhone";
import { removeItem, updateCount } from "../app/Slices/Cart";
import StatusTab from "./StatusTab";
import CartCard from "./CartCard";

const Cart = ({ selectedType = "" }) => {
  const { cart } = useSelector((state) => state.cart);

  const [activeTab, setActiveTab] = useState({
    status: true,
    cart: false,
  });

  const dispatch = useDispatch();

  const updateCounter = (type = "", id = "1", count = "", price = "") => {
    if (type === "+") {
      const newPrice = price + price / count;
      const newCount = count + 1;
      dispatch(updateCount({ id, newCount, newPrice }));
    } else if (type === "-") {
      if (count > 1) {
        const newPrice = price - price / count;
        const newCount = count - 1;
        dispatch(updateCount({ id, newCount, newPrice }));
      }
    }
  };
  const removeHandler = (id = "1") => {
    dispatch(removeItem(id));
  };

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setActiveTab({
        cart: true,
        status: false,
      });
    } else {
      setActiveTab({
        cart: false,
        status: true,
      });
    }
  }, [setActiveTab]);

  return (
    <div className="mr-2">
      <div>
        <DashboardHeaderPhone
          selectedType={selectedType}
          prevHref="/menu"
          heading={"Cart"}
        />
      </div>

      <div className="hidden md:flex bg-Vivid-Red-Tangelo bg-opacity-20 rounded-lg my-4 items-center p-2">
        <button
          onClick={() => {
            setActiveTab({
              status: true,
              cart: false,
            });
          }}
          className={`${
            activeTab.status
              ? "bg-Vivid-Red-Tangelo text-White"
              : "bg-transparent text-Vivid-Red-Tangelo"
          } flex-1 rounded-lg font-bold text-lg py-3 text-center duration-300`}
        >
          Status
        </button>
        <button
          onClick={() => {
            setActiveTab({
              status: false,
              cart: true,
            });
          }}
          className={`${
            activeTab.cart
              ? "bg-Vivid-Red-Tangelo text-White"
              : "bg-transparent text-Vivid-Red-Tangelo"
          } flex-1 rounded-lg font-bold text-lg py-3 text-center duration-300`}
        >
          Cart
        </button>
      </div>
      <div className="px-4 md:px-0 my-4">
        {activeTab.cart && (
          <>
            {cart.length > 0 ? (
              cart.map(({ id, imgSrc, title, desc, price, count }, index) => (
                <CartCard
                  id={id}
                  key={index}
                  imgSrc={imgSrc}
                  title={title}
                  desc={desc}
                  price={price}
                  count={count}
                  updateCounter={updateCounter}
                  removeHandler={removeHandler}
                />
              ))
            ) : (
              <div className="text-center font-semibold text-lg ">
                Your Cart Is Empty
              </div>
            )}
          </>
        )}
        <div className="hidden md:block">
          {activeTab.status && (
            <>
              <StatusTab />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
