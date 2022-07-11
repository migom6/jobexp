/* eslint-disable import/no-anonymous-default-export */
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

const APP_NAME = "JobXP";
const APP_DESCRIPTION = "Job Experiences for glints";

export default class extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    return await Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="en" dir="ltr">
        <Head>
          <meta name="application-name" content={APP_NAME} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content={APP_NAME} />
          <meta name="description" content={APP_DESCRIPTION} />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#FFFFFF" />
          {/* TIP: set viewport head meta tag in _app.js, otherwise it will show a warning */}

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/apple-touch-icon.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/favicon.ico" />
          {/* <link
            rel="preload"
            href="/api/auth/me"
            as="fetch"
            crossOrigin="anonymous"
          /> */}
        </Head>
        <body className="loading">
          <div id="modal" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
