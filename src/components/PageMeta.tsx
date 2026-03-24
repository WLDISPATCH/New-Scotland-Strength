import { useEffect } from "react";

type PageMetaProps = {
  title: string;
  description: string;
  path: string;
};

export default function PageMeta({ title, description, path }: PageMetaProps) {
  useEffect(() => {
    document.title = title;

    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) {
      descriptionMeta.setAttribute("content", description);
    }

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute("href", `https://www.newscotlandstrength.com${path}`);
    }
  }, [description, path, title]);

  return null;
}
