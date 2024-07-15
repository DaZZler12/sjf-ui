export const getNotificationColorFromType = (type: string): string => {
  switch (type) {
    case "success":
      return "green";
    case "error":
      return "red";
    case "info":
      return "blue";
    case "warning":
      return "yellow";
    default:
      return "green";
  }
};
