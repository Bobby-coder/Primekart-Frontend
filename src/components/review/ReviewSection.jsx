import ReviewHeader from "./ReviewHeader";
import ReviewList from "./ReviewList";

function ReviewSection() {
  return (
    <div className="flex flex-col gap-3">
      <ReviewHeader />
      <ReviewList />
    </div>
  );
}

export default ReviewSection;
