import { Button } from "../ui/button";

function ProductGridItem({ id, name, url, size, price }) {
  return (
    <div className="flex flex-col items-center pb-[0.75rem] bg-white border border-solid border-gray-200 cursor-pointer">
      <div className="overflow-hidden">
        <img src={url} alt="product-image" className="object-fill w-full" />
      </div>

      <div className="flex flex-col gap-1 px-[0.75rem]">
        <div className="overflow-hidden text-gray-800 font-semibold text-sm w-full h-9 mb-1 leading-[18px] whitespace-normal line-clamp-2">
          {name}
        </div>
        <p className="text-xs mb-[1px]">{size}</p>
        <div className="flex justify-between items-center">
          <p className="text-gray-800 font-semibold text-xs">{price}</p>
          <Button
            variant="outline"
            className="cursor-pointer w-16 h-8 border border-solid border-green-500 text-green-500 font-semibold text-sm bg-green-50 rounded-md"
          >
            ADD
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductGridItem;
