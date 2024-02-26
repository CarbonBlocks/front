// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// module.exports = nextConfig;
// next.config.js
module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Fix "fs" module not found on the client-side
      config.resolve.fallback = {
        fs: false,
        net: false,
        tls: false,
        dns: false,
        ...config.resolve.fallback,
      };
    }
    return config;
  },
};
