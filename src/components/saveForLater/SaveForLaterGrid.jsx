import { useSelector } from "react-redux";
import { Separator } from "../ui/separator";
import SaveForLaterItem from "./SaveForLaterItem";

function SaveForLaterGrid() {
  const { items, totalItems } = useSelector((state) => state.saveForLater);

  return (
    <div className="border w-[68%]">
      <div className="border-b p-4">
        <h2 className="font-semibold text-lg">Saved Items ({totalItems})</h2>
      </div>
      <div className="p-4">
        <div className="grid gap-4">
          {items.map((savedItem) => {
            return (
              <div key={savedItem.id}>
                <SaveForLaterItem savedItem={savedItem} />
                <Separator />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SaveForLaterGrid;
