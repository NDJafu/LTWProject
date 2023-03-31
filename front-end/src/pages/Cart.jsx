import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import CartItem from "../components/Cart/CartItem";
import ButtonStretch from "../components/Buttons/ButtonStretch";
import OrderSummary from "../components/Cart/OrderSummary";

const Cart = () => {
  // Version 1.0
  // const [items, setItems] = useState("");
  // const [cart, setCart] = useState(localStorage.getItem("itemList"));
  // function loadCart() {
  //   axios.get("/api/getCart/" + cart).then((data) => {
  //     setItems(data);
  //     console.log(data.data);
  //   });
  // }

  // useEffect(() => {
  //   loadCart();
  // }, [cart]);

  // function handleRemove(value) {
  //   const dataArray = localStorage.getItem("itemList").split(",");
  //   const filteredDataArray = dataArray.filter((item) => item !== value);
  //   const updatedData = filteredDataArray.join(",");
  //   localStorage.setItem("itemList", updatedData);
  //   updatedData != "" ? setCart(updatedData) : setItems("");
  // }

  // function totalPrice() {
  //   const total = items.data?.reduce((total, object) => {
  //     return total + object["price"];
  //   }, 0);
  //   return "$" + (total !== undefined ? total : 0);
  // }

  //Version 2.0
  const { cart, total_price, total_item } = useCartContext();

  console.log(cart);

  return (
    <div className="px-80 py-16 justify-center flex gap-16">
      <div className="w-2/3 h-screen">
        <div className="">
          <h1 className="font-bold text-4xl py-2">YOUR BAG</h1>
          <p className="py-3">
            TOTAL: ({total_item} items) <b>${total_price}</b>
          </p>
          <p>
            Items in your bag are not reserved — check out now to make them
            yours.
          </p>
          {cart &&
            cart?.map((curElem) => <CartItem key={curElem.id} {...curElem} />)}
        </div>
      </div>
      <div className="w-1/3 h-screen">
        <Link to="/check-out" className="w-full invert relative">
          <ButtonStretch text="CHECK OUT" />
        </Link>
        <OrderSummary amount={total_item} total={total_price} />
      </div>
    </div>
  );
};

export default Cart;
