import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import fetchJson from "lib/fetchJson";
import { ErrorBoundary } from "react-error-boundary";
import Error from "components/error";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary fallback={<Error />}>
      <SWRConfig
        value={{
          fetcher: fetchJson,
          onError: (err) => {
            console.error(err);
          },
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    </ErrorBoundary>
  );
}

export default MyApp;
