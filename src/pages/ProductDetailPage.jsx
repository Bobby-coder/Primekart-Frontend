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
import { Share } from "lucide-react";
import ReviewSection from "@/components/review/ReviewSection";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ImageSection from "@/components/ImageSection";
import RatingsInfo from "@/components/review/RatingsInfo";
import { getOriginalPrice } from "@/utils/getOriginalPrice";
import WishlistIcon from "@/components/wishlist/WishlistIcon";
import { slugIntoName } from "@/utils/getNameFromSlug";

function ProductDetailPage() {
  const [productData, setProductData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://dummyjson.com/products/${productId}`)
      .then((res) => {
        setProductData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }, [productId]);

  // Calculate total rating by adding all ratings
  const totalRatings = productData?.reviews?.reduce(
    (acc, currReview) => acc + currReview.rating,
    0
  );

  // calculate original price
  const originalPrice = getOriginalPrice(
    productData?.discountPercentage,
    productData?.price
  );

  // Capitalized brand name
  const capitalizedCategory = slugIntoName(productData?.category);

  function handleAddToCart() {}
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <p>{error.data.message || "Something went wrong"}</p>
      ) : (
        <div className="p-6 mx-auto flex flex-col gap-10 lg:flex-row lg:max-w-7xl">
          {/*images*/}
          <ImageSection images={productData?.images} />

          {/*details*/}
          <div className="flex flex-col gap-8">
            <div>
              {/*title & Icons*/}
              <div className="flex flex-wrap items-start gap-4">
                {/*Name & brand*/}
                <div>
                  <h2 className="text-2xl font-extrabold text-gray-800 mb-2">
                    {productData.title}
                  </h2>
                  <p>{productData.brand}</p>
                </div>

                {/*Icons*/}
                <div className="ml-auto flex flex-wrap gap-4">
                  {/*Wishlist Icon*/}
                  <WishlistIcon
                    productId={Number(productId)}
                    product={{
                      id: productData.id,
                      title: productData.title,
                      thumbnail: productData.thumbnail,
                      price: productData.price,
                      discountPercentage: productData.discountPercentage,
                      category: productData.category,
                    }}
                  />
                  {/*Share Icon*/}
                  <button className="px-2.5 py-1.5 bg-gray-100 text-xs text-gray-800 rounded-md flex items-center">
                    <Share />
                  </button>
                </div>
              </div>

              <hr className="my-8" />

              <div className="flex flex-col flex-wrap gap-4 items-start">
                {/*Price & discount*/}
                <p className="text-3xl font-semibold">
                  ₹{productData?.price}{" "}
                  <span className="line-through text-muted-foreground text-xl">
                    ₹{originalPrice}
                  </span>
                  <span className="text-red-500 text-sm ml-2">
                    {productData?.discountPercentage}% off
                  </span>
                </p>

                {/*Rating*/}
                <RatingsInfo
                  avgRating={productData?.rating}
                  totalRatings={totalRatings}
                  totalReviews={productData?.reviews?.length}
                />
              </div>

              <hr className="my-8" />

              {/*Category & Tags*/}
              <div className="flex flex-col gap-3">
                <p>Category: {capitalizedCategory}</p>
                {/*Tags*/}
                <div className="flex items-center gap-2">
                  {productData.tags?.map((tag) => (
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
                      { length: productData.stock },
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
                <p>{productData.description}</p>
              </div>
            </div>

            {/*reviews */}
            <ReviewSection
              reviews={productData.reviews}
              avgRating={productData?.rating}
              totalRatings={totalRatings}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetailPage;
