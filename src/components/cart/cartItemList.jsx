import { getTotalDiscount } from "@/utils/getTotalDiscount";
import { Separator } from "../ui/separator";
import CartItem from "./cartItem";
import OrderDetails from "./OrderDetails";

function CartItemList() {
  const cartProducts = [
    {
      name: "Air Jordan 1 Low FlyEase",
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a94e182a-5a7a-476f-b68b-dad036220e9e/AIR+JORDAN+1+LOW+FLYEASE.png",
      price: 1200,
      discountPercentage: 18,
      quantity: 9,
    },
    {
      name: "Air Jordan 1 Low FlyEase",
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a94e182a-5a7a-476f-b68b-dad036220e9e/AIR+JORDAN+1+LOW+FLYEASE.png",
      price: 1200,
      discountPercentage: 18,
      quantity: 9,
    },
    {
      name: "Air Jordan 1 Low FlyEase",
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a94e182a-5a7a-476f-b68b-dad036220e9e/AIR+JORDAN+1+LOW+FLYEASE.png",
      price: 1200,
      discountPercentage: 18,
      quantity: 9,
    },
  ];

  const totalDiscount = getTotalDiscount(cartProducts);

  const totalAmount = cartProducts.reduce((acc, { price }) => acc + price, 0);

  const totalItems = cartProducts.length;

  return (
    <div className="flex justify-between">
      <div className="border w-[68%]">
        <div className="border-b p-4">
          <h2 className="font-semibold text-lg">Shopping Cart</h2>
        </div>
        <div className="p-4">
          <div className="grid gap-4">
            {cartProducts.map(
              ({ name, price, img, discountPercentage, quantity }) => {
                return (
                  <>
                    <CartItem
                      name={name}
                      src={img}
                      discountPercentage={discountPercentage}
                      quantity={quantity}
                      key={crypto.randomUUID()}
                      price={price}
                    />
                    <Separator />
                  </>
                );
              }
            )}
          </div>
        </div>
      </div>

      <OrderDetails
        totalDiscount={totalDiscount}
        totalAmount={totalAmount}
        totalItems={totalItems}
      />
    </div>
  );
}

export default CartItemList;
