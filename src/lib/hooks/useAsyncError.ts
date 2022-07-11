import { FetchError } from "lib/fetchJson";
import { useCallback, useState } from "react";

const useAsyncError = () => {
  const [_, setError] = useState();
  return useCallback(
    (e: FetchError) => {
      setError(() => {
        throw e;
      });
    },
    [setError]
  );
};
export default useAsyncError;
