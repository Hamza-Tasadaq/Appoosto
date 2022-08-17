import { useSelector, useDispatch } from "react-redux";
import DashboardHeaderPhone from "./DashboardHeaderPhone";
import { removeItem, updateCount } from "../app/Slices/Cart";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);

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
  return (
    <div>
      <DashboardHeaderPhone prevHref="/menu" heading={"Cart"} />
      <div className="px-4 md:px-0 my-4">
        {cart.length > 0 ? (
          cart.map(({ id, imgSrc, title, desc, price, count }, index) => (
            <div
              key={index}
              className="bg-White my-2 shadow-xl rounded-lg py-2 px-3 flex"
            >
              <div className="flex-1 mr-4">
                <div className="pb-5 mb-5 flex flex-row md:flex-col lg:flex-row  border-opacity-20	 border-b border-Spanish-Gray">
                  <img
                    className="rounded-lg object-cover w-[76px] h-[76px]"
                    src={`./assets/${imgSrc}.png`}
                    alt="mashroom"
                  />
                  <div className="ml-3 md:ml-0 lg:ml-3">
                    <div className="font-bold text-sm md:text-base">
                      <h2>{title}</h2>
                    </div>
                    <p className="font-medium text-xs mt-2">{desc}</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img src="./assets/coca-leaves.svg" alt="coca-leaves" />
                      <span className="ml-2 font-semibold text-xs">
                        Vegetarian, Vegan
                      </span>
                    </div>
                    <div className="flex space-x-2">
                      <img
                        src="./assets/chilli-pepper.svg"
                        alt="chilli-pepper"
                      />
                      <img
                        src="./assets/chilli-pepper.svg"
                        alt="chilli-pepper"
                      />
                      <img
                        src="./assets/chilli-pepper.svg"
                        alt="chilli-pepper"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between my-3">
                    <div className="flex items-center space-x-1">
                      <img src="./assets/peanut.svg" alt="peanut" />
                      <div className="bg-Spanish-Gray opacity-70 w-px h-2" />
                      <img src="./assets/grains.svg" alt="grains" />
                      <div className="bg-Spanish-Gray opacity-70 w-px h-2" />
                      <img src="./assets/mollusc.svg" alt="mollusc" />
                      <div className="bg-Spanish-Gray opacity-70 w-px h-2" />
                      <img src="./assets/pine-cone.svg" alt="pine-cone" />
                    </div>
                    <img src="./assets/snowflakes.svg" alt="snowflakes" />
                  </div>
                </div>

                <div className="text-Black font-semibold text-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="opacity-30">Without:</h3>
                    <h3>Tomato</h3>
                  </div>
                  <div className="flex items-center justify-between">
                    <h3 className="opacity-30">Extra:</h3>
                    <h3>Extra mozzarella</h3>
                  </div>
                  <div className="flex items-center justify-between">
                    <h3 className="opacity-30">Variant:</h3>
                    <h3>Small</h3>
                  </div>
                  <div className="flex items-center justify-between">
                    <h3 className="opacity-30">Notes:</h3>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-2 items-center">
                <h2 className="text-Vivid-Red-Tangelo font-semibold text-base">
                  €{price}
                </h2>
                <div
                  onClick={() => removeHandler(id)}
                  className="bg-Flash-White border border-Chinese-Silver rounded-lg w-10 h-10 flex items-center justify-center"
                >
                  <img src="./assets/bin.svg" alt="bin" />
                </div>

                <div className="bg-Vivid-Red-Tangelo flex flex-col text-White w-10 items-center text-base rounded-lg py-3 h-24 justify-between">
                  <img
                    onClick={() => {
                      updateCounter("+", id, count, price);
                    }}
                    className="cursor-pointer"
                    src="./assets/plus.svg"
                    alt="plus"
                  />
                  <span>{count}</span>
                  <img
                    onClick={() => {
                      updateCounter("-", id, count, price);
                    }}
                    className="cursor-pointer"
                    src="./assets/minus.svg"
                    alt="minus"
                  />
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center font-semibold text-lg ">
            Your Cart Is Empty
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
