import { app } from "@/config/app";
import { Head, Html, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="fr">
      <Head>
        <link
          rel="shortcut icon"
          href="./icons/favicon.png"
          type="image/x-icon"
        />

        {/* Les balises métas  */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />

        {/* Twitter  */}
        <meta name="twitter:title" content={app.xTitle} />
        <meta name="twitter:site" content={app.xSite} />
        <meta name="twitter:creator" content={app.xSite} />
        <meta
          name="twitter:description"
          content={app.xDescrption}
        />
        <meta
          name="keywords"
          content={app.keywords}
        />

        {/* Open Graph  */}
        <meta property="og:image" content="./icons/favicon.png" />
        <meta property="og:title" content={app.fullName} />
        <meta
          property="og:description"
          content={app.description}
        />
        <meta name="author" content={app.fullName} />
        <meta property="og:site_name" content={app.fullName} />
        <meta property="og:type" content="website" />
      </Head>
      <body>
        <div className="cursor-dot" data-cursor-dot />
        <div className="cursor-outline" data-cursor-outline />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
