import "./SJFCard.scss";
import React, { memo } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { Box } from "@mui/system";
import { IconButton } from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";
import { Status } from "../../utils/Status";
interface SJFCardProps {
  key: string;
  iconUrl: string;
  status: string;
  title: string;
  onViewDetails: () => void;
  onDelete: () => void;
  disabled?: boolean;
}

const SJFCard: React.FC<SJFCardProps> = ({
  key,
  iconUrl,
  status,
  title,
  onViewDetails,
  onDelete,
  disabled,
}) => {
  return (
    <Card className="sjfcard" key={key}>
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
        <Button size="small" onClick={onViewDetails} disabled={disabled}>
          {"View Details"}
        </Button>
        <IconButton
          onClick={onDelete}
          disabled={disabled || status != Status.completed}
        >
          <DeleteOutline />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default memo(SJFCard);
