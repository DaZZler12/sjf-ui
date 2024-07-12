import CompletionIcon from "../../../assets/img/sjf/ComnpletionIcon.svg";
import PendingIcon from "../../../assets/gif/sjf/Pending.svg";
import RunningIcon from "../../../assets/gif/sjf/Running.svg";
import { Status } from "./Status";

export const getStatusIcons = (status: string) => {
  switch (status) {
    case Status.running:
      return RunningIcon;
    case Status.completed:
      return CompletionIcon;
    default:
      return PendingIcon;
  }
};
