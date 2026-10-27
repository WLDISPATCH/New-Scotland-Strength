import { useEffect } from "react";
import pageMeta from "../content/pageMeta.json";

export type PagePath = keyof typeof pageMeta;

// Head tags are also baked into each page's HTML at build time (scripts/prerender.mjs);
// this keeps them in sync during client-side navigation.
export default function PageMeta({ path }: { path: PagePath }) {
  useEffect(() => {
    const { title, description } = pageMeta[path];
    const url = `https://www.newscotlandstrength.com${path}`;

    document.title = title;

    const set = (selector: string, attr: string, value: string) =>
      document.querySelector(selector)?.setAttribute(attr, value);

    set('meta[name="description"]', "content", description);
    set('link[rel="canonical"]', "href", url);
    set('meta[property="og:title"]', "content", title);
    set('meta[property="og:description"]', "content", description);
    set('meta[property="og:url"]', "content", url);
    set('meta[name="twitter:title"]', "content", title);
    set('meta[name="twitter:description"]', "content", description);
  }, [path]);

  return null;
}
