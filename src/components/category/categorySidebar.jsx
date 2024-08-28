import { useDispatch, useSelector } from "react-redux";
import { ScrollArea } from "../ui/scroll-area";
import CategorySidebarItem from "./categorySidebarItem";
import { useEffect } from "react";
import { fetchCategories } from "@/store/features/category/categorySlice";
import { categoryImages } from "@/utils/categoryImages";

function CategorySidebar() {
  const dispatch = useDispatch();
  let { items, status, error } = useSelector((state) => state.category);

  // dispatch category thunk to fetch categories
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCategories());
    }
  }, [dispatch, status]);

  // add image to each category
  items = items.map((currItem, i) => {
    return {
      ...currItem,
      thumbnail: `https://cdn.dummyjson.com/products/images/${categoryImages[i]}/thumbnail.png`,
    };
  });

  return (
    <ScrollArea className="h-[calc(100vh-80px)] w-[30%] border-r lg:flex lg:flex-col lg:gap-2 lg:w-64">
      {status === "loading" ? (
        <p>Loading...</p>
      ) : status === "failed" ? (
        <div className="text-center">
          {error?.data?.message || "Something went wrong"}
        </div>
      ) : (
        <>
          {items.map(({ name, slug, thumbnail }) => {
            return (
              <CategorySidebarItem
                key={crypto.randomUUID()}
                name={name}
                slug={slug}
                thumbnail={thumbnail}
              />
            );
          })}
        </>
      )}
    </ScrollArea>
  );
}

export default CategorySidebar;
