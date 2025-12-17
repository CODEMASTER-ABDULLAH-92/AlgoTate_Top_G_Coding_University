"use client"
import { useEffect } from "react";

const SEO = ({
  title = "Algo Tate | Top G Coding University",
  description = "",
  keywords = "",
  image = "/api/placeholder/1200/630",
  // url = window.location.href,
  author = "Muhammad Abdullah",
  robots = "index, follow",
}) => {
  
  useEffect(() => {
    // Title
    document.title = title;

    // Meta Description
    const setMeta = (name, content) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    const setOG = (property, content) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    // Standard meta
    setMeta("description", description);
    setMeta("keywords", keywords);
    setMeta("author", author);
    setMeta("robots", robots);
    setMeta("viewport", "width=device-width, initial-scale=1.0");

    // Open Graph Tags
    setOG("og:title", title);
    setOG("og:description", description);
    setOG("og:type", "website");
    setOG("og:image", image);
    // setOG("og:url", url);

    // Twitter Cards
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", image);

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    // canonical.setAttribute("href", url);

    // Favicon
    let favicon = document.querySelector('link[rel="icon"]');
    if (!favicon) {
      favicon = document.createElement("link");
      favicon.setAttribute("rel", "icon");
      favicon.setAttribute("type", "image/x-icon");
      document.head.appendChild(favicon);
    }
    favicon.setAttribute("href", "/favicon.ico");

  }, [title, description, keywords, image, author, robots]);

  return null; // Component does not render UI
};

export default SEO;
