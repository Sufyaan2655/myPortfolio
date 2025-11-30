import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
// If your repo is named "username.github.io", set this to empty string ""
// Otherwise, set it to your repo name (e.g., "/myPortfolio")
const githubPagesBasePath = process.env.GITHUB_PAGES_BASE_PATH || "/myPortfolio";

const nextConfig: NextConfig = {
  basePath: isGithubPages ? githubPagesBasePath : "",
  assetPrefix: isGithubPages ? githubPagesBasePath : "",
  output: isGithubPages ? "export" : undefined,
  trailingSlash: isGithubPages,
  images: {
    unoptimized: isGithubPages,
    remotePatterns: [
      { hostname: "cdn.hashnode.com" },
      { hostname: "media.graphassets.com" },
      { hostname: "ap-south-1.graphassets.com" },
      { hostname: "via.placeholder.com" },
      { hostname: "cdn.simpleicons.org" },
      { hostname: "api.iconify.design" },
      { hostname: "share.google.com" },
      { hostname: "logo.clearbit.com" },
      { hostname: "www.headstarter.ai" },
      { hostname: "headstarter.ai" },
      { hostname: "www.blackrock.com" },
      { hostname: "blackrock.com" },
    ],
    dangerouslyAllowSVG: true,
  },
  // Headers are not supported in static export, so we skip them for GitHub Pages
};

export default nextConfig;
