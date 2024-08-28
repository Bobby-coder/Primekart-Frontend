import { getOriginalPrice } from "@/utils/getOriginalPrice";
import { Button } from "../ui/button";
import QuantityInput from "./QuantityInput";
import { getAmountInINR } from "@/utils/getAmountInINR";
import { removeFromCart } from "@/store/features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { addToSavedItems } from "@/store/features/saveForLater/saveForLaterSlice";
import toast from "react-hot-toast";
import RemovedFromCart from "../customToasts/RemovedFromCart";

function CartItem({
  cart: { id, title, thumbnail, quantity, price, discountPercentage },
}) {
  const priceInINR = getAmountInINR(price);
  const originalPrice = getOriginalPrice(discountPercentage, priceInINR);
  const dispatch = useDispatch();

  // Handler to remove item from cart
  function handleRemoveFromCart() {
    dispatch(removeFromCart(id));
    //
    toast.custom((t) => (
      <RemovedFromCart t={t} thumbnail={thumbnail} title={title} />
    ));
  }

  // Handler to add item to saved items and remove from cart
  function handleSaveForLater() {
    // add to saved items
    dispatch(
      addToSavedItems({ id, title, thumbnail, price, discountPercentage })
    );
    // remove from cart
    dispatch(removeFromCart(id));
  }

  return (
    <div className="flex flex-col gap-6 p-4">
      <div className="flex items-center gap-4">
        {/*Image*/}
        <img
          alt="Product image"
          className="aspect-square rounded-md object-cover"
          height="80"
          src={thumbnail}
          width="80"
        />

        <div className="flex flex-col gap-3">
          {/*Name*/}
          <p className="font-semibold">{title}</p>
          {/*Price & Discount*/}
          <div className="flex items-center gap-1">
            <p className="line-through text-muted-foreground text-[14px]">
              Rs.{originalPrice * quantity}
            </p>
            <p className="text-lg font-bold">Rs.{priceInINR * quantity} </p>
            <p className="text-red-500 text-[14px]">
              ({discountPercentage}% OFF)
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-[6px] items-center">
        <QuantityInput quantity={quantity} id={id} />
        <Button
          variant="ghost"
          className="text-md font-semibold"
          onClick={handleSaveForLater}
        >
          SAVE FOR LATER
        </Button>
        <Button
          variant="ghost"
          className="text-md font-semibold"
          onClick={handleRemoveFromCart}
        >
          REMOVE
        </Button>
        <Button variant="ghost" className="text-md font-semibold">
          SEE MORE LIKE THESE
        </Button>
      </div>
    </div>
  );
}

export default CartItem;
