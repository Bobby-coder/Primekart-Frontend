import { addToCart } from "@/store/features/cart/cartSlice";
import { ShoppingCartIcon } from "lucide-react";
import { useDrop } from "react-dnd";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AddedToCartToast from "../customToasts/AddedToCartToast";

const CartIcon = () => {
  const { totalItems: cartCount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // dispatch add to cart action with dropped item
  const [, drop] = useDrop({
    accept: "PRODUCT",
    drop: (item) => {
      dispatch(addToCart(item));
      toast.custom((t) => (
        <AddedToCartToast t={t} title={item.title} thumbnail={item.thumbnail} />
      ));
    },
  });

  return (
    <Link
      ref={drop}
      to="/cart"
      className="relative flex flex-col items-center text-primary-foreground hover:text-primary-foreground/80 transition-colors"
    >
      <div className="relative">
        <ShoppingCartIcon className="w-6 h-6" />
        {cartCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </div>

      <span className="text-xs mt-1">Cart</span>
    </Link>
  );
};

export default CartIcon;
