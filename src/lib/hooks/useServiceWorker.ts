import { useEffect } from "react";
import toast from "react-hot-toast";

const useServiceWorker = () => {
  useEffect(() => {
    navigator.serviceWorker.ready.then((registration) => {
      registration.active?.postMessage("replayRequests");
      navigator.serviceWorker.addEventListener("message", (event) => {
        if (event.data === "replayedRequests") {
          toast.success("Replayed offline requests");
        }
      });
    });
  }, []);
};

export default useServiceWorker;
