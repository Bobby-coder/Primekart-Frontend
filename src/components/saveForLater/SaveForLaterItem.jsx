import { getOriginalPrice } from "@/utils/getOriginalPrice";
import { Button } from "../ui/button";

function SaveForLaterItem({ name, img, price, discountPercentage }) {
  const originalPrice = getOriginalPrice(discountPercentage, price);
  return (
    <div className="flex flex-col gap-6 p-4">
      <div className="flex items-center gap-4">
        {/*Image*/}
        <img
          alt="Product image"
          className="aspect-square rounded-md object-cover"
          height="80"
          src={img}
          width="80"
        />

        <div className="flex flex-col gap-3">
          {/*Name*/}
          <p className="font-semibold">{name}</p>
          {/*Price & Discount*/}
          <div className="flex items-center gap-1">
            <p className="line-through text-muted-foreground text-[14px]">
              Rs.{originalPrice}
            </p>
            <p className="text-lg font-bold">Rs.{price} </p>
            <p className="text-red-500 text-[14px]">
              ({discountPercentage}% OFF)
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-[6px] items-center">
        <Button variant="ghost" className="text-md font-semibold">
          MOVE TO CART
        </Button>
        <Button variant="ghost" className="text-md font-semibold">
          REMOVE
        </Button>
      </div>
    </div>
  );
}

export default SaveForLaterItem;
