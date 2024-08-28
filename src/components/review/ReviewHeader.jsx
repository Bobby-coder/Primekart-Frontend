import RatingsInfo from "./RatingsInfo";

const ReviewHeader = ({ avgRating, totalReviews, totalRatings }) => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
      <h1 className="text-lg sm:text-2xl font-semibold">Ratings & Reviews</h1>
      <RatingsInfo
        avgRating={avgRating}
        totalReviews={totalReviews}
        totalRatings={totalRatings}
      />
    </div>
  );
};

export default ReviewHeader;
