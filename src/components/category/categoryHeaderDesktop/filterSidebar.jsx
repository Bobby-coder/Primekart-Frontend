import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "../../ui/separator";
import SidebarFilterItem from "./sidebarFilterItem";

const FilterSidebar = () => {
  let data = [
    { brand: "Colgate" },
    { brand: "Colgate2" },
    { brand: "Colgate3" },
    { brand: "Colgate4" },
    { brand: "Colgate5" },
    { brand: "Colgate6" },
    { brand: "Colgate7" },
  ];
  let brandList = data.map(({ brand }) => brand);
  // brandlist will contain dupicate names also
  brandList = [...new Set(brandList)];
  return (
    <Sheet>
      <SheetTrigger className="text-[#666] text-xs font-medium">
        Filters
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="mb-4 text-2xl">Refine by</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-3">
          {/*brand*/}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold">BRAND</h3>
            <div className="space-y-1">
              {brandList &&
                brandList.map((name) => {
                  return (
                    <SidebarFilterItem name={name} key={crypto.randomUUID()} />
                  );
                })}
            </div>
          </div>
          <Separator />
          {/*reviews*/}
          {/*discound*/}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default FilterSidebar;
