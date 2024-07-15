// custom hook to handle sjf job create form actions

import { useCallback, useEffect, useMemo } from "react";
import { useCreateMutation } from "../../../apis/sjfApis";
import { useNotification } from "../../../../notificationprovider/NotificationProvider";

const useSjfJobActions = () => {
  const { setNotification } = useNotification() as {
    setNotification: (notification: any) => void;
  };

  const [submitSJFJob, createResponse] = useCreateMutation();

  useEffect(() => {
    if (createResponse?.isSuccess) {
      setNotification({
        open: true,
        message: "SJF Job created successfully",
        type: "success",
      });
    } else if (createResponse?.isError) {
      setNotification({
        open: true,
        message: "Error while creating SJF Job",
        type: "error",
      });
    }
  }, [createResponse]);

  const handleCreateSjfJob = useCallback(
    (values: any) => {
      const payload = {
        name: values?.name,
        duration: parseFloat(values?.duration),
      };
      submitSJFJob(payload);
    },
    [submitSJFJob]
  );

  return useMemo(() => ({ handleCreateSjfJob }), [handleCreateSjfJob]);
};

export default useSjfJobActions;
