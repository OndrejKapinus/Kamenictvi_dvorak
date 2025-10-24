/** @type {import('next').NextConfig} */
const nextConfig = {
  // 🚀 Nastavení pro Render deployment
  distDir: 'build', // 📁 Výstup do 'build' složky pro Render
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



