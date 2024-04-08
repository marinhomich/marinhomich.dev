import { headers } from "next/headers";

export default async function sitemap() {
  const headersList = headers();
  let domain = headersList.get("host") as string;

  return [
    {
      url: `https://${domain}`,
      lastModified: new Date().toISOString().split("T")[0],
    },
  ];
}
