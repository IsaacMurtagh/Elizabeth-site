import Head from "next/head";
import variables from "@config/variables";
import pathToPageTitle from "@util/pathToPageTitle";

export default function seo({ path }) {
  const title = pathToPageTitle({ path, siteName: variables.siteName });
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>{title}</title>

      {/* Open Graph */}
      <meta property="og:url" content={`${variables.siteBaseUrl}${path}`} key="ogurl" />
      <meta property="og:image" content='/public/logo.png' key="ogimage" />
      <meta property="og:site_name" content={variables.siteName} key="ogsitename" />
      <meta property="og:title" content={title} key="ogtitle" />
    </Head>
  )
}