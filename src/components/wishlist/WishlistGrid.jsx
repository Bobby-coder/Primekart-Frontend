import { useSelector } from "react-redux";
import WishlistItem from "./WishlistItem";

function WishlistGrid() {
  // Extract wishlist from store
  const { items } = useSelector((state) => state.wishlist);
  console.log({category:items})

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {items.map(
        ({ id, title, price, thumbnail, discountPercentage, category }) => {
          return (
            <WishlistItem
              id={id}
              key={id}
              title={title}
              price={price}
              thumbnail={thumbnail}
              discountPercentage={discountPercentage}
              category={category}
            />
          );
        }
      )}
    </div>
  );
}

export default WishlistGrid;
