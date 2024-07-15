import React, { createContext, useContext, useState } from "react";
import NotificationSnackbar from "./NotificationSnackbar";

interface Notification {
  open: boolean;
  message: string;
  type: "success" | "error" | "info" | "warning";
}

interface NotificationContextType {
  setNotification: (notification: Notification) => void;
}
interface NotificationProviderProps {
  children: React.ReactNode;
}

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined
);

export const useNotification = () => useContext(NotificationContext);

export const NotificationProvider: React.FC<NotificationProviderProps> = ({
  children,
}) => {
  const [notification, setNotification] = useState<Notification>({
    open: false,
    message: "",
    type: "success",
  });

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setNotification({ ...notification, open: false });
  };

  return (
    <NotificationContext.Provider value={{ setNotification }}>
      {children}
      <NotificationSnackbar
        open={notification?.open}
        handleClose={handleClose}
        message={notification?.message}
        type={notification?.type as "success" | "error" | "info" | "warning"}
      />
    </NotificationContext.Provider>
  );
};
