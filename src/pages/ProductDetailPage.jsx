import { Label } from "@/components/ui/label";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { Share } from "lucide-react";
import { Heart } from "lucide-react";
import ReviewSection from "@/components/review/ReviewSection";
import { getOriginalPrice } from "@/utils/getOriginalPrice";

function ProductDetailPage() {
  const product = {
    id: 1,
    title: "Essence Mascara Lash Princess",
    description:
      "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
    category: "beauty",
    price: 9.99,
    discountPercentage: 7.17,
    rating: 4.94,
    stock: 5,
    tags: ["beauty", "mascara"],
    brand: "Essence",
    sku: "RCH45Q1A",
    weight: 2,
    dimensions: {
      width: 23.17,
      height: 14.43,
      depth: 28.01,
    },
    warrantyInformation: "1 month warranty",
    shippingInformation: "Ships in 1 month",
    availabilityStatus: "Low Stock",
    reviews: [
      {
        rating: 2,
        comment: "Very unhappy with my purchase!",
        date: "2024-05-23T08:56:21.618Z",
        reviewerName: "John Doe",
        reviewerEmail: "john.doe@x.dummyjson.com",
      },
      {
        rating: 2,
        comment: "Not as described!",
        date: "2024-05-23T08:56:21.618Z",
        reviewerName: "Nolan Gonzalez",
        reviewerEmail: "nolan.gonzalez@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Very satisfied!",
        date: "2024-05-23T08:56:21.618Z",
        reviewerName: "Scarlett Wright",
        reviewerEmail: "scarlett.wright@x.dummyjson.com",
      },
    ],
    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 24,
    meta: {
      createdAt: "2024-05-23T08:56:21.618Z",
      updatedAt: "2024-05-23T08:56:21.618Z",
      barcode: "9164035109868",
      qrCode: "https://assets.dummyjson.com/public/qr-code.png",
    },
    images: [
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
  };

  const totalRatings = product.reviews.reduce(
    (acc, currReview) => acc + currReview.rating,
    0
  );

  const originalPrice = getOriginalPrice(
    product.discountPercentage,
    product.price
  );

  const capitalizedCategory = `${product.category[0].toUpperCase()}${product.category.slice(
    1
  )}`;

  function handleAddToCart() {}
  return (
    <>
      <div className="p-6 mx-auto flex flex-col gap-10 lg:flex-row lg:max-w-7xl">
        {/*images*/}
        <div className="flex gap-2">
          {/*image sidebar*/}
          <div className="flex flex-col gap-2">
            <img
              src="https://readymadeui.com/images/product6.webp"
              alt="Product1"
              className="w-[68px] cursor-pointer rounded-xl outline"
            />
            <img
              src="https://readymadeui.com/images/product8.webp"
              alt="Product2"
              className="w-[68px] cursor-pointer rounded-xl"
            />
          </div>

          {/*main image*/}
          <div className="flex flex-col gap-3 lg:w-[440px] lg:h-[440px]">
            <img
              src="https://readymadeui.com/images/product6.webp"
              alt="Product"
              className="lg:w-11/12 w-full h-full rounded-xl object-cover object-top"
            />
          </div>
        </div>

        {/*details*/}
        <div className="flex flex-col gap-8">
          <div>
            {/*title & Icons*/}
            <div className="flex flex-wrap items-start gap-4">
              {/*Name & brand*/}
              <div>
                <h2 className="text-2xl font-extrabold text-gray-800 mb-2">
                  {product.title}
                </h2>
                <p>{product.brand}</p>
              </div>

              {/*Icons*/}
              <div className="ml-auto flex flex-wrap gap-4">
                <Button className="p-2 bg-pink-100 text-pink-600 rounded-full">
                  <Heart />
                </Button>
                <button className="px-2.5 py-1.5 bg-gray-100 text-xs text-gray-800 rounded-md flex items-center">
                  <Share />
                </button>
              </div>
            </div>

            <hr className="my-8" />

            <div className="flex flex-col flex-wrap gap-4 items-start">
              {/*Price & discount*/}
              <div className="flex gap-4 flex-wrap">
                <p className="text-gray-800 text-3xl font-bold">
                  ₹{product.price}
                </p>
                <p className="text-gray-400 text-xl mt-1">
                  <strike>{originalPrice}</strike>{" "}
                  <span className="text-sm ml-1">
                    {product.discountPercentage}% off
                  </span>
                </p>
              </div>

              {/*Rating*/}
              <div className="flex flex-wrap">
                <Button className="px-2.5 py-1.5 bg-pink-100 text-xs text-pink-600 rounded-md flex items-center gap-1">
                  <Star className="w-5 h-5 fill-current" />
                  <span>{product.rating.toFixed(1)}</span>
                </Button>

                {/*Total Ratings & reviews*/}
                {totalRatings && (
                  <Button variant="link" className="text-gray-500">
                    {totalRatings} ratings and {product.reviews.length} reviews
                  </Button>
                )}
              </div>
            </div>

            <hr className="my-8" />

            {/*Category & Tags*/}
            <div className="flex flex-col gap-3">
              <p>Category: {capitalizedCategory}</p>
              {/*Tags*/}
              <div className="flex items-center gap-2">
                {product.tags.map((tag) => (
                  <Badge key={crypto.randomUUID()} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <hr className="my-8" />

            {/*Quantity*/}
            <div className="flex items-center gap-2 mb-4">
              <Label className="text-base">Quantity</Label>
              <Select defaultValue={1} onValueChange>
                <SelectTrigger className="w-24">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from(
                    { length: product.stock },
                    (_, index) => index + 1
                  ).map((num) => (
                    <SelectItem key={crypto.randomUUID()} value={num}>
                      {num}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/*Checkout buttons*/}
            <div className="flex gap-3 w-full items-center">
              <Button size="lg" className="">
                Buy now
              </Button>
              <Button size="lg" className="" onClick={handleAddToCart}>
                Add to cart
              </Button>
            </div>
          </div>

          {/*description */}
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold">Product description</h3>
            <div className="text-sm leading-loose">
              <p>{product.description}</p>
            </div>
          </div>

          {/*reviews */}
          <ReviewSection />
        </div>
      </div>
    </>
  );
}

export default ProductDetailPage;
