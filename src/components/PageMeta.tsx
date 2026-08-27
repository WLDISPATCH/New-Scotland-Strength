import { Helmet } from "react-helmet-async";

type PageMetaProps = {
  title: string;
  description: string;
  path: string;
};

// Emits per-page head tags. Helmet applies them client-side on navigation and,
// during the build-time prerender, serializes them into each route's static
// HTML so crawlers and social share cards see the correct title/description.
export default function PageMeta({ title, description, path }: PageMetaProps) {
  const url = `https://www.newscotlandstrength.com${path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />

      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
