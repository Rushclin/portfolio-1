import React from "react";
import Head from "next/head";
import { app } from "@/config/app";

interface MetaProps {
  name: string;
  content: string;
  property?: undefined;
}

interface SEOProps {
  description?: string;
  author?: string;
  meta?: MetaProps[];
  title?: string;
  lang?: string;
}
const SEO: React.FC<SEOProps> = ({
  description = app.description,
  author = app.author,
  meta,
  title = "Acceuil",
}) => {
  const metaData = [
    {
      name: `description`,
      content: description,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
  ].concat(meta!);

  return (
    <Head>
      <title>{title}</title>
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
    </Head>
  );
};

SEO.defaultProps = {
  lang: `fr`,
  meta: [],
  description: ``,
};

export default SEO;
