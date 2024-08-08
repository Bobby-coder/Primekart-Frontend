import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";
import { getFormattedTimeAndDate } from "@/utils/getFormattedTimeAndDate";

const ReviewDetails = ({ rating, comment, date, reviewerName }) => {
  let helpfulCount = 18;
  let verifiedPurchase = true;

  // createdAt date & time in beautiful format
  const [formattedDate, formattedTime] = getFormattedTimeAndDate(date);
  const formattedDateTime = `${formattedDate} ${formattedTime}`;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <img src="" alt="user-image" />
        <span>{reviewerName}</span>
      </div>

      <div className="flex gap-2 items-center">
        <div className="flex gap-1 items-center">
          {Array.from({ length: rating }).map(() => (
            <StarIcon key={crypto.randomUUID()} />
          ))}
        </div>
        {/*title*/}
        <p>{comment}</p>
      </div>

      <p>Reviewed on {formattedDateTime}</p>

      {verifiedPurchase && (
        <div>
          <Badge variant="secondary" className="inline ">
            Verified Purchase
          </Badge>
        </div>
      )}

      {/*description*/}
      {/*<p>{description}</p>*/}

      {helpfulCount > 0 && <p>{helpfulCount} people found this helpful</p>}

      <div className="flex items-center gap-3">
        <Button variant="outline">Helpful</Button>
      </div>
    </div>
  );
};

export default ReviewDetails;

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="black"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
