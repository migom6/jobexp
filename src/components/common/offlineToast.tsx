import toast from "react-hot-toast";
import Primary from "./buttons/Primary";

const offlineToast = () =>
  toast((t) => (
    <div className="flex flex-col gap-1 text-sm">
      <span className="self-center">📵 You appear offline</span>
      <span>Your changes will be synced once you are online</span>
      <div className="mt-2 w-16 self-end">
        <Primary onClick={() => toast.dismiss(t.id)}>Dismiss</Primary>
      </div>
    </div>
  ));

export default offlineToast;
