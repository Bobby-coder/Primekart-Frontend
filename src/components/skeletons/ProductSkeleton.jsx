import { Skeleton } from "@/components/ui/skeleton";

const ProductSkeleton = () => {
  return (
    <div
      className={`flex flex-col items-center py-[0.75rem] bg-white border border-solid border-gray-200 relative`}
    >
      <Skeleton className="h-52 w-[90%]" />

      <Skeleton className="h-8 w-[90%] mt-2" />
    </div>
  );
};

export default ProductSkeleton;
