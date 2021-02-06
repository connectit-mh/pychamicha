import React from "react";

const getSitemap = () => `<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<url>
  <loc>https://pycha-micha.cieszyn.pl/</loc>
  <lastmod>2021-02-06T18:31:55+00:00</lastmod>
  <priority>1.00</priority>
</url>
<url>
  <loc>https://pycha-micha.cieszyn.pl/menu</loc>
  <lastmod>2021-02-06T18:31:55+00:00</lastmod>
  <priority>0.90</priority>
</url>
<url>
  <loc>https://pycha-micha.cieszyn.pl/menu</loc>
  <lastmod>2021-02-06T18:31:55+00:00</lastmod>
  <priority>0.75</priority>
</url>
</urlset>`;

class Sitemap extends React.Component {
  static async getInitialProps({ res }) {
    res.setHeader("Content-Type", "text/xml");
    res.write(getSitemap());
    res.end();
  }
}

export default Sitemap;
