/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "kxdnaoofwzidrdodgfiw.supabase.co",
          port: "",
          pathname: "/storage/v1/object/public/cabin-images/**",
        },
      ],
    },
    // output:'export'
  };
  
  export default nextConfig;