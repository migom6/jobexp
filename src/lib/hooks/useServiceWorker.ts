import { useEffect } from "react";
import toast from "react-hot-toast";
import { mutate } from "swr";

const swrKeys = [
  "/api/users",
  "/api/profile/jobExperiences",
  "/api/about",
  "/api/personalDetails",
  "/api/profileImageUrl",
];

const useServiceWorker = () => {
  useEffect(() => {
    navigator.serviceWorker.ready.then((registration) => {
      registration.active?.postMessage("replayRequests");
      navigator.serviceWorker.addEventListener("message", (event) => {
        if (event.data === "replayRequests") {
          toast.success("Replayed requests");
          swrKeys.forEach((key) => {
            mutate(key);
          });
        }
      });
    });
  }, []);
};

export default useServiceWorker;
