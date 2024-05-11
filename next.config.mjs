// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

// next.config.js
// next.config.mjs
export default {
    reactStrictMode: false,
    exportPathMap: async function (defaultConfig, { dev, dir, outDir }) {
      // ... (Optional: Handle export paths if needed)
    },
    // ... (Other Next.js configuration options)
    images: {
      domains: ['images.unsplash.com','motion-aman-bucket.s3.ap-south-1.amazonaws.com'],  // Add other domains as needed
    },
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
  
  