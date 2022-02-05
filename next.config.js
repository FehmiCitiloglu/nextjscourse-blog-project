module.exports = {
  reactStrictMode: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  images: {
    loader: "imgix",
    path: "https://fehmicitiloglu.github.io/nextjscourse-blog-project/",
  },
};
