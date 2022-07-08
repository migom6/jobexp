import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import fetchJson from "lib/fetchJson";
import { ErrorBoundary } from "react-error-boundary";
import Error from "components/error";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
      />

      <ErrorBoundary fallback={<Error />}>
        <SWRConfig
          value={{
            suspense: true,
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
            errorRetryCount: 0,
            fetcher: fetchJson,
            onError: (err) => {
              console.error(err);
            },
          }}
        >
          <Component {...pageProps} />
        </SWRConfig>
      </ErrorBoundary>
    </>
  );
}

export default MyApp;
