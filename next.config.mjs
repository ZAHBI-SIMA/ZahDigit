/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // Par défaut, Next.js envoie `s-maxage=31536000` sur les pages
        // prérendues : il part du principe que le CDN est purgé à chaque
        // déploiement (ce que fait Vercel, mais pas le CDN Hostinger).
        // Résultat : le CDN servait un HTML vieux de plusieurs heures qui
        // référençait des fichiers CSS/JS supprimés par le rebuild — donc
        // une page entièrement sans style. On force ici le CDN à
        // revalider le HTML régulièrement.
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, s-maxage=60, stale-while-revalidate=300",
          },
        ],
      },
      {
        // Les assets sous /_next/static portent un hash de contenu dans
        // leur nom : ils peuvent être mis en cache indéfiniment sans
        // risque. Cette règle passe après la précédente pour la
        // surcharger sur ce chemin.
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
