import { Link } from "react-router-dom";

function CategoryCard() {
  return (
    <Link>
      <div className="bg-background rounded-md shadow-md overflow-hidden">
        <img
          src="/placeholder.svg"
          width={200}
          height={150}
          alt="Produce"
          className="w-full h-24 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="p-2">
          <h3 className="text-base font-semibold group-hover:text-primary transition-colors duration-300">
            Dairy
          </h3>
        </div>
      </div>
    </Link>
  );
}

export default CategoryCard;
