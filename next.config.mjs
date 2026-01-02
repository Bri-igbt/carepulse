import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  
  output: "export",

  images: {
    unoptimized: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },
};

export default withSentryConfig(
  nextConfig,
  {
    org: "cbstack",
    project: "javascript-nextjs",

    silent: !process.env.CI,

    widenClientFileUpload: true,
    disableLogger: true,

    
    automaticVercelMonitors: false,
  },
  {

    hideSourceMaps: true,
  }
);
