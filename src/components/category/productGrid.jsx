import { useEffect, useState } from "react";
import { ScrollArea } from "../ui/scroll-area";
import ProductGridItem from "./productGridItem";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function ProductGrid() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const selectedCategory = useParams().name;
  const { sortBy, order } = useSelector((state) => state.sorting);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://dummyjson.com/products/category/${selectedCategory}?sortBy=${sortBy}&order=${order}`
      )
      .then((res) => {
        setLoading(false);
        setProducts(res.data.products);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }, [selectedCategory, sortBy, order]);

  return (
    <ScrollArea className="h-[calc(100vh-140px)]">
      <div className="grid grid-cols-2 gap-2 p-2 bg-[#f4f6fb] lg:grid-cols-5">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <div className="text-center">
            {error?.data?.message || "Something went wrong"}
          </div>
        ) : (
          <>
            {products.map((product) => (
              <ProductGridItem key={product.id} product={product} />
            ))}
          </>
        )}
      </div>
    </ScrollArea>
  );
}

export default ProductGrid;
