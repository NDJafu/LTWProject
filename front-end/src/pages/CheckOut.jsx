import { useCartContext } from "../context/CartContext";
import ButtonStretch from "../components/Buttons/ButtonStretch";
import OrderSummary from "../components/Cart/OrderSummary";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CheckOut = () => {
  const { cart, total_price, total_item, clearCart } = useCartContext();

  const navigate = useNavigate();

  function handlePlaceOrder() {
    axios
      .post("api/v1/orders", { items: cart })
      .then(({ data }) => {
        alert("Order has been placed! Thank you for shopping with us!");
        console.log(data);
        clearCart();
        navigate("/");
      })
      .catch(() => {
        alert("Please log in before placing any order!");
      });
  }

  console.log(cart);

  return (
    <div className="px-80 py-16 justify-center flex gap-16">
      <div className="w-2/3 h-screen">
        <div className="">
          <h1 className="font-bold text-3xl py-2">PAYMENT METHOD</h1>
          <p className="text-lg">All transactions are safe and secure</p>
          <div className="px-8 py-4 border border-black my-10">
            <h3 className="font-bold text-xl">CREDIT/DEBIT CARD</h3>
            <div className="w-1/2">
              <input
                type="text"
                className="border border-black p-4 my-4 w-full"
                placeholder="Card Number"
                required
              />
              <input
                type="text"
                className="border border-black p-4 my-4 w-full"
                placeholder="Name on card"
                required
              />
              <div className="gap-8 flex justify-between">
                <input
                  type="text"
                  className="border border-black p-4 my-4 w-full"
                  placeholder="MM / YY"
                  required
                />
                <input
                  type="text"
                  className="border border-black p-4 my-4 w-full"
                  placeholder="CVV"
                  required
                />
              </div>
              <p className="text-gray-400 no-wrap">Card expiry date</p>
            </div>
          </div>
        </div>
        <button className="invert w-3/5" onClick={() => handlePlaceOrder()}>
          <ButtonStretch text="PLACE ORDER" />
        </button>
      </div>
      <div className="w-1/3 h-screen">
        <OrderSummary amount={total_item} total={total_price} />
      </div>
    </div>
  );
};

export default CheckOut;
