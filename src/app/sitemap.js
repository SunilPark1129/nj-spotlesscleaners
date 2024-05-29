export default async function sitemap() {
  return [
    {
      url: `https://spotlesscleaners-nj.com/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `https://spotlesscleaners-nj.com/about`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `https://spotlesscleaners-nj.com/service`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `https://spotlesscleaners-nj.com/location`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ];
}
