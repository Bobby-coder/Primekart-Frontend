import WishlistGrid from "@/components/wishlist/WishlistGrid";

function WishlistPage() {
  return (
    <div className="mx-auto flex flex-col lg:max-w-[980px] xl:max-w-[1220px]">
      <h2 className="text-xl font-bold mb-4">
        My <span className="text-primary">Wishlist</span> 6 items
      </h2>
      <WishlistGrid />
    </div>
  );
}

export default WishlistPage;
