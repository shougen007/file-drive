/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          hostname: "loyal-salamander-140.convex.cloud",
        },
      ],
    },
  };
  
  export default nextConfig;