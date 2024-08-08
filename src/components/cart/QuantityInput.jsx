import { Minus, Plus } from "lucide-react";
import { Button } from "../ui/button";

function QuantityInput({ quantity }) {
  return (
    <div className="flex items-center space-x-2">
      <Button variant="outline" className="rounded-full w-8 h-8 p-0">
        <Minus size={16} strokeWidth={1.25} />
      </Button>
      <input
        className="flex h-10 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-12 text-center border rounded-md"
        type="number"
        value={quantity}
      />
      <Button variant="outline" className="rounded-full w-8 h-8 p-0">
        <Plus size={16} strokeWidth={1.25} />
      </Button>
    </div>
  );
}

export default QuantityInput;
