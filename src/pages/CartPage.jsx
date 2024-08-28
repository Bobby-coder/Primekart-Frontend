import CartItemList from "@/components/cart/cartItemList";
import SaveForLaterGrid from "@/components/saveForLater/SaveForLaterGrid";

function CartPage() {
  return (
    <div className="flex flex-col gap-3 mx-auto lg:max-w-[980px] xl:max-w-[1220px] my-6">
      <CartItemList />
      <SaveForLaterGrid />
    </div>
  );
}

export default CartPage;
