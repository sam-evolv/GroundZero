import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Bundle the seed vault into serverless functions so the local store works in
  // a deploy (for example a token-less read-only preview). With the GitHub store
  // configured, reads and writes go over the API instead.
  outputFileTracingIncludes: {
    "/": ["./vault/**/*"],
    "/goals": ["./vault/**/*"],
  },
};

export default nextConfig;
