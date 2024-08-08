import ReviewDetails from "./ReviewDetails";

const ReviewList = () => {
  const reviews = [
    {
      rating: 2,
      comment: "Very unhappy with my purchase!",
      date: "2024-05-23T08:56:21.618Z",
      reviewerName: "John Doe",
      reviewerEmail: "john.doe@x.dummyjson.com",
    },
    {
      rating: 2,
      comment: "Not as described!",
      date: "2024-05-23T08:56:21.618Z",
      reviewerName: "Nolan Gonzalez",
      reviewerEmail: "nolan.gonzalez@x.dummyjson.com",
    },
    {
      rating: 5,
      comment: "Very satisfied!",
      date: "2024-05-23T08:56:21.618Z",
      reviewerName: "Scarlett Wright",
      reviewerEmail: "scarlett.wright@x.dummyjson.com",
    },
  ];

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
