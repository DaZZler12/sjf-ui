import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Tooltip,
  Typography,
} from "@mui/material";
import "./SjfDetails.scss";
import SubHeader from "../../components/subheader/SubHeader";
import React from "react";
import useSjfDetailsData from "./useSjfDetailsData";
import { getStatusIcons } from "../../utils/getStatusIcons";
import { InfoOutlined } from "@mui/icons-material";
import DetailsCardSkeleton from "../../components/card/DetailsCardSkeleton";

const SjfDetails: React.FC = () => {
  const { data, isLoading, error, transformedDuration } = useSjfDetailsData();

  return (
    <div className="sjf-details">
      <div className="sjf-details__content">
        <div className="sjf-details__subheader">
          <SubHeader
            rightSideData={[
              <Tooltip
                title="Getting SJF Job info Using WebSocket"
                placement="bottom"
                arrow
              >
                <Avatar
                  alt="Job"
                  variant="circular"
                  sx={{ width: 30, height: 30 }}
                >
                  <InfoOutlined />
                </Avatar>
              </Tooltip>,
            ]}
          />
        </div>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={10}>
            {isLoading ? (
              <DetailsCardSkeleton />
            ) : (
              <Card className="sjf-details__card--outlined">
                <CardContent className="sjf-details__card-content">
                  <div className="sjf-details__top-content">
                    <Avatar
                      alt="Status Icon"
                      src={getStatusIcons(data?.jobinfo?.status)}
                      variant="circular"
                      sx={{ width: 30, height: 30 }}
                    />
                    {/* <AccessTimeIcon color="action" /> */}
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      className="sjf-details__duration"
                    >
                      {`Duration: ${transformedDuration(data?.jobinfo?.duration)}`}
                    </Typography>
                  </div>
                  <div className="sjf-details__bottom-content">
                    <Typography variant="h5" className="sjf-details__job-name">
                      {data?.jobinfo?.name}
                    </Typography>
                    <Typography>{"Sample Description of the job"}</Typography>
                    <Typography>{"CreatedBy: User Name"}</Typography>
                    <Typography>{"CreatedTime: Date and Time"}</Typography>
                    {/* Add other metadata here */}
                  </div>
                </CardContent>
              </Card>
            )}
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default SjfDetails;
