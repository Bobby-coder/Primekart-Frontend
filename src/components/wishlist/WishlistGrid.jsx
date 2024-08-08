import WishlistItem from "./WishlistItem";

function WishlistGrid() {
  const data = [
    {
      name: "Air Jordan 1 Low FlyEase",
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a94e182a-5a7a-476f-b68b-dad036220e9e/AIR+JORDAN+1+LOW+FLYEASE.png",
      price: 1200,
      discountPercentage: 18,
    },
    {
      name: "Air Jordan 1 Low FlyEase",
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a94e182a-5a7a-476f-b68b-dad036220e9e/AIR+JORDAN+1+LOW+FLYEASE.png",
      price: 1200,
      discountPercentage: 18,
    },
    {
      name: "Air Jordan 1 Low FlyEase",
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a94e182a-5a7a-476f-b68b-dad036220e9e/AIR+JORDAN+1+LOW+FLYEASE.png",
      price: 1200,
      discountPercentage: 18,
    },
    {
      name: "Air Jordan 1 Low FlyEase",
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a94e182a-5a7a-476f-b68b-dad036220e9e/AIR+JORDAN+1+LOW+FLYEASE.png",
      price: 1200,
      discountPercentage: 18,
    },
    {
      name: "Air Jordan 1 Low FlyEase",
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a94e182a-5a7a-476f-b68b-dad036220e9e/AIR+JORDAN+1+LOW+FLYEASE.png",
      price: 1200,
      discountPercentage: 18,
    },
    {
      name: "Air Jordan 1 Low FlyEase",
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a94e182a-5a7a-476f-b68b-dad036220e9e/AIR+JORDAN+1+LOW+FLYEASE.png",
      price: 1200,
      discountPercentage: 18,
    },
    {
      name: "Air Jordan 1 Low FlyEase",
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a94e182a-5a7a-476f-b68b-dad036220e9e/AIR+JORDAN+1+LOW+FLYEASE.png",
      price: 1200,
      discountPercentage: 18,
    },
    {
      name: "Air Jordan 1 Low FlyEase",
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a94e182a-5a7a-476f-b68b-dad036220e9e/AIR+JORDAN+1+LOW+FLYEASE.png",
      price: 1200,
      discountPercentage: 18,
    },
    {
      name: "Air Jordan 1 Low FlyEase",
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a94e182a-5a7a-476f-b68b-dad036220e9e/AIR+JORDAN+1+LOW+FLYEASE.png",
      price: 1200,
      discountPercentage: 18,
    },
    {
      name: "Air Jordan 1 Low FlyEase",
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a94e182a-5a7a-476f-b68b-dad036220e9e/AIR+JORDAN+1+LOW+FLYEASE.png",
      price: 1200,
      discountPercentage: 18,
    },
    {
      name: "Air Jordan 1 Low FlyEase",
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a94e182a-5a7a-476f-b68b-dad036220e9e/AIR+JORDAN+1+LOW+FLYEASE.png",
      price: 1200,
      discountPercentage: 18,
    },
    {
      name: "Air Jordan 1 Low FlyEase",
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a94e182a-5a7a-476f-b68b-dad036220e9e/AIR+JORDAN+1+LOW+FLYEASE.png",
      price: 1200,
      discountPercentage: 18,
    },
    {
      name: "Air Jordan 1 Low FlyEase",
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a94e182a-5a7a-476f-b68b-dad036220e9e/AIR+JORDAN+1+LOW+FLYEASE.png",
      price: 1200,
      discountPercentage: 18,
    },
    {
      name: "Air Jordan 1 Low FlyEase",
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a94e182a-5a7a-476f-b68b-dad036220e9e/AIR+JORDAN+1+LOW+FLYEASE.png",
      price: 1200,
      discountPercentage: 18,
    },
    {
      name: "Air Jordan 1 Low FlyEase",
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a94e182a-5a7a-476f-b68b-dad036220e9e/AIR+JORDAN+1+LOW+FLYEASE.png",
      price: 1200,
      discountPercentage: 18,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data &&
        data.length &&
        data.map(({ name, price, img, discountPercentage }) => {
          return (
            <WishlistItem
              key={crypto.randomUUID()}
              name={name}
              price={price}
              img={img}
              discountPercentage={discountPercentage}
            />
          );
        })}
    </div>
  );
}

export default WishlistGrid;
