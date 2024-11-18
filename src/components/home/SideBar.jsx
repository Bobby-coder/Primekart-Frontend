import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CircleUserRound, Menu } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategories } from "@/store/features/category/categorySlice";
import CategoryListItem from "./CategoryListItem";

function SideBar() {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.category);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCategories());
    }
  }, [dispatch, status]);

  return (
    <Sheet>
      <SheetTrigger className="flex gap-1 items-center mr-3 md:mr-8">
        <Menu />
        All
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <ScrollArea className="h-dvh relative">
          {/* Header */}
          <div className="h-[50px] p-4 bg-primary flex gap-2 items-center text-white absolute top-0 right-0 w-full">
            <CircleUserRound />
            <p>Hello, Guest</p>
          </div>

          {/* All categories list */}
          <div className="p-4 flex flex-col gap-3 mt-[50px]">
            <h1 className="font-bold text-lg">Shop by Category</h1>
            {items.map(({ name, slug }) => {
              return (
                <CategoryListItem
                  key={crypto.randomUUID()}
                  name={name}
                  slug={slug}
                />
              );
            })}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

export default SideBar;
