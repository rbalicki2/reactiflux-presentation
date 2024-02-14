import * as React from "react";
import Helmet from "react-helmet";

export default function ({ children, align }) {
  return (
    <>
      <Helmet>
        {align != null ? (
          <style type="text/css">{` body { text-align: ${align}; } `}</style>
        ) : null}
        <link rel="stylesheet" href="http://localhost:8001/static/styles.css" />
      </Helmet>
      <div style={{ maxWidth: "80vw" }}>{children}</div>
      <div style={{ position: "fixed", bottom: 0 }}>
        <h3>
          <code id="blue" style={{ textDecoration: "underline" }}>
            https://isograph.dev
          </code>
        </h3>
      </div>
    </>
  );
}
