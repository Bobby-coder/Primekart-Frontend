import { addToWishlist } from "@/store/features/wishlist/wishlistSlice";
import { HeartIcon } from "lucide-react";
import { useDrop } from "react-dnd";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AddedToWishlist from "../customToasts/AddedToWishlist";

const WishlistIcon = () => {
  const { totalItems: wishlistCount } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  // dispatch add to wishlist action with dropped item
  const [, drop] = useDrop({
    accept: "PRODUCT",
    drop: (item) => {
      dispatch(addToWishlist(item));
      toast.custom((t) => (
        <AddedToWishlist t={t} title={item.title} thumbnail={item.thumbnail} />
      ));
    },
  });

  return (
    <Link
      ref={drop}
      to="/wishlist"
      className="relative flex flex-col items-center text-primary-foreground hover:text-primary-foreground/80 transition-colors"
    >
      <div className="relative">
        <HeartIcon className="w-6 h-6" />
        {wishlistCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            {wishlistCount}
          </span>
        )}
      </div>

      <span className="text-xs mt-1">Wishlist</span>
    </Link>
  );
};

export default WishlistIcon;
