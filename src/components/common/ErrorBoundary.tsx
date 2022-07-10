import Error from "components/error";
import { FetchError } from "lib/fetchJson";
import Router from "next/router";
import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

interface State {
  error: FetchError | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    error: null,
  };

  public static getDerivedStateFromError(error: FetchError): State {
    // Update state so the next render will show the fallback UI.
    return { error };
  }

  public componentDidCatch(error: FetchError, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.error === null) return this.props.children;
    if (this.state.error.response.status === 401) {
      Router.replace("/login");
      return null;
    }
    if (this.state.error.response.status === 500) {
      return <Error />;
    }
    if (this.state.error.response.status === 404) {
      Router.replace("/404");
      return null;
    }
    return <div>offline</div>;
  }
}

export default ErrorBoundary;
