import {
  HeartIcon,
  SearchIcon,
  ShoppingBasketIcon,
  ShoppingCartIcon,
} from "lucide-react";

import { Link } from "react-router-dom";
import { Input } from "./ui/input";

function Header() {
  return (
    <header className="bg-primary text-primary-foreground py-4 px-6 flex flex-col  gap-6 md:flex-row md:gap-0 md:px-8 lg:px-10">
      <div className="flex items-center justify-between w-full">
        <Link to="/" className="flex items-center gap-2">
          <ShoppingBasketIcon className="w-6 h-6" />
          <span className="text-lg font-semibold">Primekart</span>
        </Link>

        <div className="hidden relative md:flex flex-1 max-w-md ">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search for groceries..."
            className="w-full py-2 pr-3 pl-10 rounded-md focus:outline-none text-black"
          />
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/wishlist"
            className="text-primary-foreground hover:text-primary-foreground/80 transition-colors"
          >
            <HeartIcon className="w-6 h-6" />
            <span className="sr-only">Wishlist</span>
          </Link>

          <Link
            to="/cart"
            className="text-primary-foreground hover:text-primary-foreground/80 transition-colors"
          >
            <ShoppingCartIcon className="w-6 h-6" />
            <span className="sr-only">Cart</span>
          </Link>
        </div>
      </div>

      <div className="relative md:hidden">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search for groceries..."
          className="w-full py-2 pr-3 pl-10 rounded-md focus:outline-none text-black"
        />
      </div>
    </header>
  );
}

export default Header;
