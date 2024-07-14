import { Card, CardContent, Skeleton } from "@mui/material";
import { memo } from "react";

const DetailsCardSkeleton: React.FC = () => {
  return (
    <Card className="sjf-details__card--outlined">
      <CardContent className="sjf-details__card-content">
        <div className="sjf-details__top-content">
          <Skeleton variant="circular" width={30} height={30} />
          <Skeleton
            variant="text"
            width="80%"
            height={24}
            style={{ marginLeft: 20 }}
          />
        </div>
        <div className="sjf-details__bottom-content">
          <Skeleton variant="text" width="60%" height={30} />
          <Skeleton variant="text" width="80%" height={24} />
          <Skeleton variant="text" width="40%" height={24} />
          <Skeleton variant="text" width="50%" height={24} />
        </div>
      </CardContent>
    </Card>
  );
};

export default memo(DetailsCardSkeleton);
