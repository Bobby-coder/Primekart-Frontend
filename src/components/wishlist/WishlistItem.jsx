import { getOriginalPrice } from "@/utils/getOriginalPrice";
import { X } from "lucide-react";
import { Button } from "../ui/button";

function WishlistItem({ name, img, price, discountPercentage }) {
  const originalPrice = getOriginalPrice(discountPercentage, price);
  return (
    <div className="border relative">
      {/*Image*/}
      <img
        src={img}
        alt=""
        className="w-full h-48 object-cover"
        width="300"
        height="300"
      />

      {/*Remove Icon*/}
      <Button variant="ghost" className="absolute top-2 right-2 p-2">
        <X />
      </Button>

      <div className="p-4 flex flex-col gap-2">
        {/*Name*/}
        <h3 className="text-sm font-medium">{name}</h3>

        {/*Price & Discount*/}
        <p className="text-sm font-semibold">
          Rs.{price}{" "}
          <span className="line-through text-muted-foreground">
            Rs.{originalPrice}
          </span>
          <span className="text-red-500">({discountPercentage}% OFF)</span>
        </p>

        <Button variant="outline">MOVE TO BAG</Button>
      </div>
    </div>
  );
}

export default WishlistItem;
