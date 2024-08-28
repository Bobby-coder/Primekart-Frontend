import ReviewDetails from "./ReviewDetails";

const ReviewList = ({ reviews }) => {
  return (
    <div className="flex flex-col gap-8">
      {reviews &&
        reviews.map(({ rating, comment, date, reviewerName }) => {
          return (
            <ReviewDetails
              key={crypto.randomUUID()}
              rating={rating}
              comment={comment}
              date={date}
              reviewerName={reviewerName}
            />
          );
        })}
    </div>
  );
};

export default ReviewList;
