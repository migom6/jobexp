import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import fetchJson from "lib/fetchJson";
import { Toaster } from "react-hot-toast";

import ErrorBoundary from "components/common/ErrorBoundary";
import useServiceWorker from "lib/hooks/useServiceWorker";

function MyApp({ Component, pageProps }: AppProps) {
  useServiceWorker();
  return (
    <>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
      />
      <ErrorBoundary>
        <SWRConfig
          value={{
            suspense: true,
            shouldRetryOnError: false,
            fetcher: fetchJson,
          }}
        >
          <Component {...pageProps} />
          <Toaster />
        </SWRConfig>
      </ErrorBoundary>
    </>
  );
}

export default MyApp;
