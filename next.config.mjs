/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: [
      "www.linkedin.com",
      "media.licdn.com",
      "public-files.gumroad.com",
    ], // List of allowed hosts
  },
};

export default nextConfig;
