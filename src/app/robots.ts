import { headers } from "next/headers";

export default function robots() {
  const headersList = headers();
  let domain = headersList.get("host") as string;

  return {
    rules: [
      {
        userAgent: "*",
      },
    ],
    sitemap: `https://${domain}/sitemap.xml`,
    host: `https://${domain}`,
  };
}
