// cusotm hook to handle all the actions in the list page

import { useCallback, useEffect, useMemo, useState } from "react";
import { useDeleteMutation } from "../../../apis/sjfApis";
import { useNotification } from "../../../../notificationprovider/NotificationProvider";

const useSjfListAction = () => {
  const [setSjfjobDelete, deleteResponse] = useDeleteMutation();
  const [deleteItem, setDeleteItem] = useState<string | null>(null);
  const { setNotification } = useNotification() as {
    setNotification: (notification: any) => void;
  };

  useEffect(() => {
    if (deleteResponse?.isSuccess) {
      // Add success notification here
      setDeleteItem(null);
      setNotification({
        open: true,
        message: "Job deleted successfully",
        type: "success",
      });
    } else if (deleteResponse?.isError) {
      // Add error notification here
      setDeleteItem(null);
      setNotification({
        open: true,
        message: "Error deleting job",
        type: "error",
      });
    }
  }, [deleteResponse]);

  const handleDelete = useCallback(
    (id: string) => {
      setDeleteItem(id);
      setSjfjobDelete(id);
    },
    [setSjfjobDelete]
  );

  const isDeleting = useCallback(
    (id: string) => {
      return deleteItem === id;
    },
    [deleteItem]
  );

  return useMemo(
    () => ({ handleDelete, isDeleting }),
    [handleDelete, isDeleting]
  );
};

export default useSjfListAction;
