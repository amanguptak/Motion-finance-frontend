// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

// next.config.js
// next.config.mjs
export default {
    reactStrictMode: true,
    exportPathMap: async function (defaultConfig, { dev, dir, outDir }) {
      // ... (Optional: Handle export paths if needed)
    },
    // ... (Other Next.js configuration options)
  
    // Adding the proxy configuration
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'http://localhost:5000/api/:path*',
        },
      ];
    },
  };
  
  