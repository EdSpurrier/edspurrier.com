import React from 'react'
import { Helmet } from 'react-helmet';
import useHostStore from "host/hostStore";

const Head = () => {
  const pageTitle = useHostStore((state) => state.pageTitle);

  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>Ed Spurrier{pageTitle&& ` - ${pageTitle}`}</title>
    </Helmet>
  )
}

export default Head