import { Separator } from "../ui/separator";
import CartItem from "./cartItem";
import OrderDetails from "./OrderDetails";
import { useSelector } from "react-redux";

function CartItemList() {
  const { items } = useSelector((state) => state.cart);

  return (
    <div className="flex justify-between">
      <div className="border w-[68%]">
        <div className="border-b p-4">
          <h2 className="font-semibold text-lg">Shopping Cart</h2>
        </div>
        <div className="p-4">
          <div className="grid gap-4">
            {items.map((cart) => {
              return (
                <div key={cart.id}>
                  <CartItem cart={cart} />
                  <Separator />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <OrderDetails />
    </div>
  );
}

export default CartItemList;
