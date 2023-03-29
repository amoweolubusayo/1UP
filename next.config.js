module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "ipfs.io", "imgur.com","plus.unsplash.com"],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://api.example.com/:path*",
      },
    ];
  },
};
