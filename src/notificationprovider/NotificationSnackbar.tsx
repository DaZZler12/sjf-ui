import React from "react";
import { Snackbar, IconButton, Alert, Slide } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import { getNotificationColorFromType } from "./utils";

interface NotificationSnackbarProps {
  open: boolean;
  handleClose: (
    event: React.SyntheticEvent<any, Event> | Event,
    reason?: string
  ) => void;
  message?: string;
  type?: "success" | "error" | "info" | "warning";
}

const NotificationSnackbar: React.FC<NotificationSnackbarProps> = ({
  open,
  handleClose,
  message,
  type,
}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={(event, reason) => handleClose(event, reason)}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      TransitionComponent={(props) => <Slide {...props} direction="down" />}
    >
      <Alert
        onClose={handleClose}
        severity={type}
        icon={type === "success" ? <CheckCircleIcon /> : <ErrorIcon />}
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={handleClose}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        sx={{
          width: "100%",
          "& .MuiAlert-icon": {
            color: getNotificationColorFromType(type as string),
          },
          "& .MuiAlert-message": {
            color: getNotificationColorFromType(type as string),
          },
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default NotificationSnackbar;
