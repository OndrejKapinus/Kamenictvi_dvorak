/** @type {import('next').NextConfig} */
const nextConfig = {
  // 🚀 Nastavení pro Render deployment
  distDir: 'build', // 📁 Výstup do 'build' složky pro Render
  output: 'export', // 📦 Statický export pro Render
  trailingSlash: true, // 🛤️ Povinné trailing slash pro statické stránky
  skipTrailingSlashRedirect: true, // 🔄 Neřešit redirect pro trailing slash
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



