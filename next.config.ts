import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: false,
  // Pin the project root so a package-lock.json in a parent folder isn't picked up.
  turbopack: { root: path.join(__dirname) },
};

export default nextConfig;
