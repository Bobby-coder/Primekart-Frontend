import { ScrollArea } from "../ui/scroll-area";
import CategorySidebarItem from "./categorySidebarItem";

function CategorySidebar() {
  let isLoading = false;
  let error = false;
  let data = {
    subcategories: [
      {
        name: "Toothpaste",
        url: "https://www.baskethunt.com/wp-content/uploads/2021/02/colgate-strong-teeth-dental-cream-toothpaste-100-g-1-20201222.jpg",
        id: 989,
      },
      {
        name: "Toothpaste",
        url: "https://www.baskethunt.com/wp-content/uploads/2021/02/colgate-strong-teeth-dental-cream-toothpaste-100-g-1-20201222.jpg",
        id: 989,
      },
      {
        name: "Toothpaste",
        url: "https://www.baskethunt.com/wp-content/uploads/2021/02/colgate-strong-teeth-dental-cream-toothpaste-100-g-1-20201222.jpg",
        id: 989,
      },
      {
        name: "Toothpaste",
        url: "https://www.baskethunt.com/wp-content/uploads/2021/02/colgate-strong-teeth-dental-cream-toothpaste-100-g-1-20201222.jpg",
        id: 989,
      },
      {
        name: "Toothpaste",
        url: "https://www.baskethunt.com/wp-content/uploads/2021/02/colgate-strong-teeth-dental-cream-toothpaste-100-g-1-20201222.jpg",
        id: 989,
      },
      {
        name: "Toothpaste",
        url: "https://www.baskethunt.com/wp-content/uploads/2021/02/colgate-strong-teeth-dental-cream-toothpaste-100-g-1-20201222.jpg",
        id: 989,
      },
      {
        name: "Toothpaste",
        url: "https://www.baskethunt.com/wp-content/uploads/2021/02/colgate-strong-teeth-dental-cream-toothpaste-100-g-1-20201222.jpg",
        id: 989,
      },
      {
        name: "Toothpaste",
        url: "https://www.baskethunt.com/wp-content/uploads/2021/02/colgate-strong-teeth-dental-cream-toothpaste-100-g-1-20201222.jpg",
        id: 989,
      },
      {
        name: "Toothpaste",
        url: "https://www.baskethunt.com/wp-content/uploads/2021/02/colgate-strong-teeth-dental-cream-toothpaste-100-g-1-20201222.jpg",
        id: 989,
      },
      {
        name: "Toothpaste",
        url: "https://www.baskethunt.com/wp-content/uploads/2021/02/colgate-strong-teeth-dental-cream-toothpaste-100-g-1-20201222.jpg",
        id: 989,
      },
      {
        name: "Toothpaste",
        url: "https://www.baskethunt.com/wp-content/uploads/2021/02/colgate-strong-teeth-dental-cream-toothpaste-100-g-1-20201222.jpg",
        id: 989,
      },
      {
        name: "Toothpaste",
        url: "https://www.baskethunt.com/wp-content/uploads/2021/02/colgate-strong-teeth-dental-cream-toothpaste-100-g-1-20201222.jpg",
        id: 989,
      },
      {
        name: "Toothpaste",
        url: "https://www.baskethunt.com/wp-content/uploads/2021/02/colgate-strong-teeth-dental-cream-toothpaste-100-g-1-20201222.jpg",
        id: 989,
      },
      {
        name: "Toothpaste",
        url: "https://www.baskethunt.com/wp-content/uploads/2021/02/colgate-strong-teeth-dental-cream-toothpaste-100-g-1-20201222.jpg",
        id: 989,
      },
      {
        name: "Toothpaste",
        url: "https://www.baskethunt.com/wp-content/uploads/2021/02/colgate-strong-teeth-dental-cream-toothpaste-100-g-1-20201222.jpg",
        id: 989,
      },
      {
        name: "Toothpaste",
        url: "https://www.baskethunt.com/wp-content/uploads/2021/02/colgate-strong-teeth-dental-cream-toothpaste-100-g-1-20201222.jpg",
        id: 989,
      },
      {
        name: "Toothpaste",
        url: "https://www.baskethunt.com/wp-content/uploads/2021/02/colgate-strong-teeth-dental-cream-toothpaste-100-g-1-20201222.jpg",
        id: 989,
      },
      {
        name: "Toothpaste",
        url: "https://www.baskethunt.com/wp-content/uploads/2021/02/colgate-strong-teeth-dental-cream-toothpaste-100-g-1-20201222.jpg",
        id: 989,
      },
      {
        name: "Toothpaste",
        url: "https://www.baskethunt.com/wp-content/uploads/2021/02/colgate-strong-teeth-dental-cream-toothpaste-100-g-1-20201222.jpg",
        id: 989,
      },
      {
        name: "Toothpaste",
        url: "https://www.baskethunt.com/wp-content/uploads/2021/02/colgate-strong-teeth-dental-cream-toothpaste-100-g-1-20201222.jpg",
        id: 989,
      },
      {
        name: "Toothpaste",
        url: "https://www.baskethunt.com/wp-content/uploads/2021/02/colgate-strong-teeth-dental-cream-toothpaste-100-g-1-20201222.jpg",
        id: 989,
      },
    ],
  };
  return (
    <ScrollArea className="h-[100vh] w-[20%] border-r lg:flex lg:flex-col lg:gap-2 lg:w-64">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <div className="text-center">
          {error?.data?.message || "Something went wrong"}
        </div>
      ) : (
        <>
          {data?.subcategories.map(({ _id, name, url }) => (
            <CategorySidebarItem
              key={crypto.randomUUID()}
              name={name}
              url={url}
              id={_id}
            />
          ))}
        </>
      )}
    </ScrollArea>
  );
}

export default CategorySidebar;
