// cusotm hook to handle all the actions in the list page

import { useCallback, useEffect, useMemo, useState } from "react";
import { useDeleteMutation } from "../../../apis/sjfApis";

const useSjfListAction = () => {
  const [setSjfjobDelete, deleteResponse] = useDeleteMutation();
  const [deleteItem, setDeleteItem] = useState<string | null>(null);

  console.log("Delete response:", deleteResponse);
  useEffect(() => {
    if (deleteResponse?.isSuccess) {
      // Add success notification here
      setDeleteItem(null);
    } else if (deleteResponse?.isError) {
      // Add error notification here
      setDeleteItem(null);
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
