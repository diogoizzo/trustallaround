/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    exportPathMap: async function (
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
    ) {
        return {
            "/": { page: "/", query: { lang: "pt" } },
            "/sobre": { page: "/", query: { lang: "pt" } },
            "/servicos": { page: "/servicos", query: { lang: "pt" } },
            "/ferramentas": { page: "/ferramentas", query: { lang: "pt" } },
            "/portos": { page: "/portos", query: { lang: "pt" } },
            "/contato": { page: "/contato", query: { lang: "pt" } },
            "/en": { page: "/", query: { lang: "en" } },
            "/en/about": { page: "/sobre", query: { lang: "en" } },
            "/en/services": { page: "/servicos", query: { lang: "en" } },
            "/en/tools": { page: "/ferramentas", query: { lang: "en" } },
            "/en/ports": { page: "/portos", query: { lang: "en" } },
            "/en/contact": { page: "/contato", query: { lang: "en" } },
            "/es": { page: "/", query: { lang: "es" } },
            "/es/nosostros": { page: "/sobre", query: { lang: "es" } },
            "/es/servicios": { page: "/servicos", query: { lang: "es" } },
            "/es/herramientas": { page: "/ferramentas", query: { lang: "es" } },
            "/es/puertos": { page: "/portos", query: { lang: "es" } },
            "/es/contacto": { page: "/contato", query: { lang: "es" } },
        };
    },
    experimental: {
        images: {
            unoptimized: true,
        },
    },
};

module.exports = nextConfig;
