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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="IE=Edge" />

        {/* Twitter  */}
        <meta name="twitter:title" content="⭕️Rushclin02" />
        <meta name="twitter:site" content="@RushclinTakam" />
        <meta name="twitter:creator" content="@RushclinTakam" />
        <meta
          name="twitter:description"
          content="Développeur FrontEnd et Mobile Junior"
        />
        <meta
          name="keywords"
          content="RUSHCLIN TAKAM, Developemrnt, RUSHCLIN, TAKAM, Développeur FrontEnd, Intégrateur Web, Camerounais, Dschang"
        />

        {/* Open Graph  */}
        <meta property="og:image" content="./icons/favicon.png" />
        <meta property="og:title" content="TAKAM RUSHCLIN" />
        <meta
          property="og:description"
          content="Développement des logiciels de bases,
      applications webs, mobiles et des sites webs
      responsives.
      Modélisation et conception MERISE ou UML
      Travail en équipe et sous-pression"
        />
        <meta name="author" content="TAKAM RUSHCLIN" />
        <meta property="og:site_name" content="TAKAM RUSHCLIN " />
        <meta property="og:type" content="website" />

        {/* Title  */}
        <title>RUSHCLIN TAKAM • Front-End and Mobile Developer</title>
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
