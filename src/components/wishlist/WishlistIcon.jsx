import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWishlist,
  removeFromWishlist,
} from "@/store/features/wishlist/wishlistSlice";
import { HeartIcon } from "lucide-react";
import toast from "react-hot-toast";
import RemovedFromWishlist from "../customToasts/RemovedFromWishList";
import AddedToWishlist from "../customToasts/AddedToWishlist";

function WishlistIcon({ productId, product, position }) {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.items);
  const [isWished, setIsWished] = useState(
    // check if item is present in wishlist or not
    wishlist.some((item) => item.id === productId)
  );

  // Handler to toggle item in wishlist
  const handleWishlistToggle = () => {
    if (isWished) {
      dispatch(removeFromWishlist(productId));
      // display successfully removed toast
      toast.custom((t) => (
        <RemovedFromWishlist
          t={t}
          thumbnail={product.thumbnail}
          title={product.title}
        />
      ));
    } else {
      dispatch(addToWishlist(product));
      // display successfully added toast
      toast.custom((t) => (
        <AddedToWishlist
          t={t}
          thumbnail={product.thumbnail}
          title={product.title}
        />
      ));
    }
    setIsWished(!isWished);
  };

  return (
    <button
      onClick={handleWishlistToggle}
      className={`${position} p-2 rounded-full transition-colors duration-200 ${
        isWished ? "text-red-500" : "text-gray-400 hover:text-red-500"
      }`}
    >
      <HeartIcon
        className={`w-6 h-6 transition-transform duration-200`}
        fill={isWished ? "currentColor" : "none"}
      />
      <span className="sr-only">Add to Wishlist</span>
    </button>
  );
}

export default WishlistIcon;
