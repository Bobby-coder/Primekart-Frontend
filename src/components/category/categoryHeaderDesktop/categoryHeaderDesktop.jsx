import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Separator } from "../../ui/separator";
import FilterSidebar from "./filterSidebar";

const CategoryHeaderDesktop = () => {
  return (
    <div className="hidden justify-between items-center p-3 border-b border-solid border-[#eeeeee] lg:flex">
      <p className="t text-base font-bold">Buy Milk Online</p>
      <div className="flex gap-3 items-center">
        {/*filter sidbar*/}
        <FilterSidebar />

        <Separator orientation="vertical" />

        {/*sort dropdown*/}
        <div className="flex gap-2 items-center">
          <Label htmlFor="sort" className="text-[#666] text-xs font-medium">
            Sort By
          </Label>
          <Select id="sort">
            <SelectTrigger className="w-[180px] text-xs font-bold">
              <SelectValue placeholder="Relevance" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem
                  value="relevance"
                  className="text-[#666] text-xs font-medium"
                >
                  Relevance
                </SelectItem>
                <SelectItem
                  value="priceAscending"
                  className="text-[#666] text-xs font-medium"
                >
                  Price (Low to high)
                </SelectItem>
                <SelectItem
                  value="priceDscending"
                  className="text-[#666] text-xs font-medium"
                >
                  Price (High to low)
                </SelectItem>
                <SelectItem
                  value="nameAscending"
                  className="text-[#666] text-xs font-medium"
                >
                  Name (A to Z)
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default CategoryHeaderDesktop;
