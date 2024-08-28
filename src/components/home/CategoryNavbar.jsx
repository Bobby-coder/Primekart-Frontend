import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import SideBar from "./SideBar";
import { convertNameToSlug } from "@/utils/convertNameToSlug";

function CategoryNavbar() {
  const navigate = useNavigate();
  const categories = [
    "Beauty",
    "Fragrances",
    "Furniture",
    "Groceries",
    "Home Decoration",
    "Kitchen Accessories",
    "Laptops",
    "Mens Shirts",
    "Mens Shoes",
    "Mens Watches",
    "Mobile Accessories",
  ];

  // handler to navigate to category page
  function handleNavigate(category) {
    const categorySlug = convertNameToSlug(category);
    navigate(`/category/${categorySlug}`);
  }

  return (
    <div className="w-full px-6 md:px-8 lg:px-10 flex bg-[#232F3E] text-white ">
      <SideBar />
      {categories.map((category) => (
        <Button
          key={crypto.randomUUID()}
          variant="link"
          className="p-0 text-white mr-8"
          onClick={() => {
            handleNavigate(category);
          }}
        >
          {category}
        </Button>
      ))}
    </div>
  );
}

export default CategoryNavbar;
