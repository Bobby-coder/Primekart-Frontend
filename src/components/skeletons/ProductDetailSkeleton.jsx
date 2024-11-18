import { Skeleton } from "@/components/ui/skeleton";

const ProductDetailSkeleton = () => {
  return (
    <div className="p-6 mx-auto flex flex-col gap-10 lg:flex-row lg:max-w-7xl">
      {/* Skeleton for Image Section */}
      <div className="flex-1">
        <Skeleton className="h-96 w-full" />
        <div className="flex gap-2 mt-4">
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <Skeleton key={i} className="h-24 w-24" />
            ))}
        </div>
      </div>

      {/* Skeleton for Details Section */}
      <div className="flex flex-col gap-8 flex-1">
        <div>
          {/* Skeleton for Title & Icons */}
          <div className="flex items-start gap-4">
            <div className="flex-1">
              <Skeleton className="h-8 w-3/4 mb-2" />
              <Skeleton className="h-5 w-1/2" />
            </div>
            <div className="ml-auto flex items-center gap-2">
              <Skeleton className="h-8 w-8" />
              <Skeleton className="h-8 w-8" />
            </div>
          </div>

          <hr className="my-8" />

          {/* Skeleton for Price, Discount & Rating */}
          <div className="flex flex-col gap-4">
            <Skeleton className="h-8 w-2/3" />
            <Skeleton className="h-5 w-1/3" />
          </div>

          <hr className="my-8" />

          {/* Skeleton for Category & Tags */}
          <div className="flex flex-col gap-3">
            <Skeleton className="h-6 w-1/4" />
            <div className="flex items-center gap-2">
              {Array(3)
                .fill(0)
                .map((_, i) => (
                  <Skeleton key={i} className="h-6 w-16" />
                ))}
            </div>
          </div>

          <hr className="my-8" />

          {/* Skeleton for Quantity Selector */}
          <div className="flex items-center gap-2 mb-4">
            <Skeleton className="h-6 w-16" />
            <Skeleton className="h-10 w-24" />
          </div>

          {/* Skeleton for Buttons */}
          <div className="flex gap-3 w-full">
            <Skeleton className="h-12 w-36" />
            <Skeleton className="h-12 w-36" />
          </div>
        </div>

        {/* Skeleton for Product Description */}
        <div className="flex flex-col gap-2">
          <Skeleton className="h-8 w-1/2" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>

        {/* Skeleton for Reviews Section */}
        <div className="flex flex-col gap-4">
          <Skeleton className="h-8 w-1/2" />
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <Skeleton key={i} className="h-20 w-full" />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailSkeleton;
