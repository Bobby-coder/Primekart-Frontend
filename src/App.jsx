import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import WishlistPage from "./pages/WishlistPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CategoryNavbar from "./components/home/CategoryNavbar";

function App() {
  return (
    <>
      <Header />
      <CategoryNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:name/" element={<ProductsPage />} />
        <Route
          path="/category/:name/:productId"
          element={<ProductDetailPage />}
        />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
