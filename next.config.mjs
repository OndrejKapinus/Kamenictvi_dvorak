/** @type {import('next').NextConfig} */
const nextConfig = {
  // 🚀 Nastavení pro statický export na Render
  trailingSlash: true,
  images: {
    // 🖼️ Povolené domény pro externí obrázky
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https', 
        hostname: 'avatar.vercel.sh',
      },
      {
        protocol: 'https',
        hostname: 'www.kamenictvi-dvorak.cz',
      }
    ],
    // ⚡ Vypne optimalizaci obrázků pro statický build
    unoptimized: true,
  },
};

export default nextConfig;



