import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

export const Seo = ({
  author,
  title,
  titleTemplate,
  description,
  url,
  ogImage,
  path,
  keywords,
  lang,
}) => {
  const formatTitleTemplate = `${title} ${
    titleTemplate ? `| ${titleTemplate}` : ""
  }`

  return (
    <Helmet
      title={title}
      titleTemplate={formatTitleTemplate}
      link={[
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: `${url}/images/favicon-16x16.png`,
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: `${url}/images/favicon-32x32.png`,
        },
      ]}
    >
      <html lang={lang} />
      <meta
        name="viewport"
        content="width=device-width, user-scalable=no"
      ></meta>
      <meta name="description" content={description} />
      <meta name="image" content={`${url}/${ogImage}`} />
      <meta name="image:alt" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />

      {/* Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={formatTitleTemplate} />
      <meta property="og:url" content={`${url}${path ? path : ""}`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${url}/${ogImage}`} />
      <meta property="og:image:alt" content={description}></meta>

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={formatTitleTemplate} />
      <meta name="twitter:url" content={`${url}${path ? path : ""}`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${url}/${ogImage}`} />
      <meta name="twitter:image:alt" content={description}></meta>
      <meta name="twitter:creator" content={author}></meta>
    </Helmet>
  )
}

Seo.propTypes = {
  /** The twitter creator */
  author: PropTypes.string.isRequired,
  /** The site title */
  title: PropTypes.string.isRequired,
  /** The site individual route */
  titleTemplate: PropTypes.string.isRequired,
  /** The site description */
  description: PropTypes.string.isRequired,
  /** The site URL */
  url: PropTypes.string.isRequired,
  /** Image url to use for opengraph image */
  ogImage: PropTypes.string,
  /** Absolute URL path */
  path: PropTypes.string.isRequired,
  /** Keywords to use in meta keywords */
  keywords: PropTypes.arrayOf(PropTypes.string),
  /** Lang to use as meta lang */
  lang: PropTypes.string.isRequired,
}

Seo.defaultProps = {
  lang: "eng",
}
