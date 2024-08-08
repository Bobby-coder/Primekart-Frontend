import CategoryHeaderDesktop from "@/components/category/categoryHeaderDesktop/categoryHeaderDesktop";
import CategorySidebar from "@/components/category/categorySidebar";
import ProductGrid from "@/components/category/productGrid";

function ProductsPage() {
  return (
    <div className="mx-auto flex lg:max-w-[980px] xl:max-w-[1220px]">
      <CategorySidebar />
      <div className="w-full border-r border-solid border-[#eeeeee]">
        <CategoryHeaderDesktop />
        <ProductGrid />
      </div>
    </div>
  );
}

export default ProductsPage;
