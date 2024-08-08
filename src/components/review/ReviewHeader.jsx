import { Button } from "../ui/button";

const ReviewHeader = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between items-center">
      <h1 className="text-2xl font-semibold">Ratings & Reviews</h1>
      <div className="flex flex-wrap gap-1">
        <Button className="px-2.5 py-1.5 bg-pink-100 text-xs text-pink-600 rounded-md flex items-center">
          <StarIcon className="w-5 h-5 fill-current" />
          <span>4.8</span>
        </Button>
        <Button variant="link" className="text-gray-500">
          16,223 ratings and 2,148 reviews
        </Button>
      </div>
    </div>
  );
};

export default ReviewHeader;

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
