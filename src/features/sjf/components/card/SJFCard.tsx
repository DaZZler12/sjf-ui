import "./SJFCard.scss";
import React, { memo } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { Box } from "@mui/system";
interface SJFCardProps {
  iconUrl: string;
  title: string;
  onViewDetails: () => void;
}

const SJFCard: React.FC<SJFCardProps> = ({ iconUrl, title, onViewDetails }) => {
  return (
    <Card className="sjfcard">
      <CardContent>
        <Box display="flex" alignItems="center" gap={2}>
          <Avatar
            alt="Status Icon"
            src={iconUrl}
            variant="circular"
            sx={{ width: 30, height: 30 }}
          />
          <Typography variant="h5" component="div">
            {title}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={onViewDetails}>
          View Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default memo(SJFCard);
