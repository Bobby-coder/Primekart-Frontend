import {
  HeartIcon,
  SearchIcon,
  ShoppingBasketIcon,
  ShoppingCartIcon,
} from "lucide-react";

import { Link } from "react-router-dom";
import { Input } from "./ui/input";
import { useSelector } from "react-redux";

function Header() {
  const { totalItems: wishlistCount } = useSelector((state) => state.wishlist);
  const { totalItems: cartCount } = useSelector((state) => state.cart);
  return (
    <header className="bg-primary text-primary-foreground py-4 px-6 flex flex-col gap-6 md:flex-row md:gap-0 md:px-8 lg:px-10">
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <ShoppingBasketIcon className="w-6 h-6" />
          <span className="text-lg font-semibold">Primekart</span>
        </Link>

        {/*Search*/}
        <div className="hidden relative md:flex flex-1 max-w-md ">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search for groceries..."
            className="w-full py-2 pr-3 pl-10 rounded-md focus:outline-none text-black"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6">
          {/*Wishlist Icon*/}
          <Link
            to="/wishlist"
            className="relative flex flex-col items-center text-primary-foreground hover:text-primary-foreground/80 transition-colors"
          >
            <div className="relative">
              <HeartIcon className="w-6 h-6" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </div>

            <span className="text-xs mt-1">Wishlist</span>
          </Link>

          {/*Cart Icon*/}
          <Link
            to="/cart"
            className="relative flex flex-col items-center text-primary-foreground hover:text-primary-foreground/80 transition-colors"
          >
            <div className="relative">
              <ShoppingCartIcon className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>

            <span className="text-xs mt-1">Cart</span>
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
