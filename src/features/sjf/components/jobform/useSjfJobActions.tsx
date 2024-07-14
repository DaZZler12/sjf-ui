// custom hook to handle sjf job create form actions

import { useCallback, useEffect, useMemo } from "react";
import { useCreateMutation } from "../../../apis/sjfApis";

const useSjfJobActions = () => {
  const [submitSJFJob, createResponse] = useCreateMutation();

  useEffect(() => {
    if (createResponse?.isSuccess) {
      console.log("Job created successfully, the data: ", createResponse);
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
