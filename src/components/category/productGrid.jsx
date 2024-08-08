import { ScrollArea } from "../ui/scroll-area";
import ProductGridItem from "./productGridItem";

function ProductGrid() {
  const data = {};
  let isLoading = false;
  let error = false;

  let sortFunction;
  /* if (sortType === "priceAscending") {
    sortFunction = (a, b) => a.price - b.price;
  }

  if (sortType === "priceDscending") {
    sortFunction = (a, b) => b.price - a.price;
  }

  // We can omit comparator function while sorting any string in ascending order because if we comparator function is omitted Array.prototype.sort() by default performes sorting on lexicographical order, it means it compares the ascii codes, so a string gets sorted in alphabetical order.
  if (sortType === "nameAscending") {
    sortFunction = (a, b) => a.name.localeCompare(b.name);
    //sortFunction = null
  } */

  function handleFilter(brandName, minPrice, maxPrice, sortFunction) {
    let filteredProducts = data?.products || [];

    // Filter by brand name
    if (brandName && brandName.length > 0) {
      filteredProducts = filteredProducts.filter((product) => {
        return brandName.includes(product.brand);
      });
    }

    // Filter by price range
    if (minPrice && maxPrice) {
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= minPrice && product.price <= maxPrice
      );
    }

    // Sort the filtered products
    if (sortFunction) {
      return filteredProducts?.slice().sort(sortFunction);
    }

    // return filteredProducts;
    return [
      {
        id: 989,
        name: "colgate",
        size: 18,
        price: 78,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVgIeFDSxX555fP0KFZvh9BMAiDwdEUZkMhA&s",
      },
      {
        id: 989,
        name: "colgate",
        size: 18,
        price: 78,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVgIeFDSxX555fP0KFZvh9BMAiDwdEUZkMhA&s",
      },
      {
        id: 989,
        name: "colgate",
        size: 18,
        price: 78,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVgIeFDSxX555fP0KFZvh9BMAiDwdEUZkMhA&s",
      },
      {
        id: 989,
        name: "colgate",
        size: 18,
        price: 78,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVgIeFDSxX555fP0KFZvh9BMAiDwdEUZkMhA&s",
      },
      {
        id: 989,
        name: "colgate",
        size: 18,
        price: 78,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVgIeFDSxX555fP0KFZvh9BMAiDwdEUZkMhA&s",
      },
      {
        id: 989,
        name: "colgate",
        size: 18,
        price: 78,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVgIeFDSxX555fP0KFZvh9BMAiDwdEUZkMhA&s",
      },
      {
        id: 989,
        name: "colgate",
        size: 18,
        price: 78,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVgIeFDSxX555fP0KFZvh9BMAiDwdEUZkMhA&s",
      },
      {
        id: 989,
        name: "colgate",
        size: 18,
        price: 78,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVgIeFDSxX555fP0KFZvh9BMAiDwdEUZkMhA&s",
      },
      {
        id: 989,
        name: "colgate",
        size: 18,
        price: 78,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVgIeFDSxX555fP0KFZvh9BMAiDwdEUZkMhA&s",
      },
      {
        id: 989,
        name: "colgate",
        size: 18,
        price: 78,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVgIeFDSxX555fP0KFZvh9BMAiDwdEUZkMhA&s",
      },
      {
        id: 989,
        name: "colgate",
        size: 18,
        price: 78,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVgIeFDSxX555fP0KFZvh9BMAiDwdEUZkMhA&s",
      },
      {
        id: 989,
        name: "colgate",
        size: 18,
        price: 78,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVgIeFDSxX555fP0KFZvh9BMAiDwdEUZkMhA&s",
      },
      {
        id: 989,
        name: "colgate",
        size: 18,
        price: 78,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVgIeFDSxX555fP0KFZvh9BMAiDwdEUZkMhA&s",
      },
      {
        id: 989,
        name: "colgate",
        size: 18,
        price: 78,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVgIeFDSxX555fP0KFZvh9BMAiDwdEUZkMhA&s",
      },
      {
        id: 989,
        name: "colgate",
        size: 18,
        price: 78,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVgIeFDSxX555fP0KFZvh9BMAiDwdEUZkMhA&s",
      },
      {
        id: 989,
        name: "colgate",
        size: 18,
        price: 78,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVgIeFDSxX555fP0KFZvh9BMAiDwdEUZkMhA&s",
      },
      {
        id: 989,
        name: "colgate",
        size: 18,
        price: 78,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVgIeFDSxX555fP0KFZvh9BMAiDwdEUZkMhA&s",
      },
      {
        id: 989,
        name: "colgate",
        size: 18,
        price: 78,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVgIeFDSxX555fP0KFZvh9BMAiDwdEUZkMhA&s",
      },
      {
        id: 989,
        name: "colgate",
        size: 18,
        price: 78,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVgIeFDSxX555fP0KFZvh9BMAiDwdEUZkMhA&s",
      },
      {
        id: 989,
        name: "colgate",
        size: 18,
        price: 78,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVgIeFDSxX555fP0KFZvh9BMAiDwdEUZkMhA&s",
      },
      {
        id: 989,
        name: "colgate",
        size: 18,
        price: 78,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVgIeFDSxX555fP0KFZvh9BMAiDwdEUZkMhA&s",
      },
      {
        id: 989,
        name: "colgate",
        size: 18,
        price: 78,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVgIeFDSxX555fP0KFZvh9BMAiDwdEUZkMhA&s",
      },
      {
        id: 989,
        name: "colgate",
        size: 18,
        price: 78,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVgIeFDSxX555fP0KFZvh9BMAiDwdEUZkMhA&s",
      },
      {
        id: 989,
        name: "colgate",
        size: 18,
        price: 78,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVgIeFDSxX555fP0KFZvh9BMAiDwdEUZkMhA&s",
      },
    ];
  }

  return (
    <ScrollArea className="h-[90vh]">
      <div className="grid grid-cols-2 gap-2 p-2 bg-[#f4f6fb] lg:grid-cols-5">
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <div className="text-center">
            {error?.data?.message || "Something went wrong"}
          </div>
        ) : (
          <>
            {handleFilter().map(({ _id, name, size, price, url }) => (
              <ProductGridItem
                key={crypto.randomUUID()}
                id={_id}
                name={name}
                size={size}
                price={price}
                url={url}
              />
            ))}
          </>
        )}
      </div>
    </ScrollArea>
  );
}

export default ProductGrid;
// grid grid-cols-2 gap-2 p-2 bg-[#f4f6fb] lg:grid-cols-5
