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
            "/servicos/aereo": {
                page: "/servicos/aereo",
                query: { lang: "pt" },
            },
            "/servicos/maritimo": {
                page: "/servicos/maritimo",
                query: { lang: "pt" },
            },
            "/servicos/rodoviario": {
                page: "/servicos/rodoviario",
                query: { lang: "pt" },
            },
            "/ferramentas": { page: "/ferramentas", query: { lang: "pt" } },
            "/portos": { page: "/portos", query: { lang: "pt" } },
            "/contato": { page: "/contato", query: { lang: "pt" } },
            "/galeria": { page: "/galeria", query: { lang: "pt" } },
            "/galeria/fotos": { page: "/galeria/fotos", query: { lang: "pt" } },
            "/galeria/videos": {
                page: "/galeria/videos",
                query: { lang: "pt" },
            },
            "/galeria/curiosidades": {
                page: "/galeria/curiosidades",
                query: { lang: "pt" },
            },
            "/en": { page: "/", query: { lang: "en" } },
            "/en/about": { page: "/sobre", query: { lang: "en" } },
            "/en/services": { page: "/servicos", query: { lang: "en" } },
            "/en/services/air": {
                page: "/servicos/aereo",
                query: { lang: "en" },
            },
            "/en/services/road": {
                page: "/servicos/rodoviario",
                query: { lang: "en" },
            },
            "/en/services/maritime": {
                page: "/servicos/maritimo",
                query: { lang: "en" },
            },
            "/en/tools": { page: "/ferramentas", query: { lang: "en" } },
            "/en/ports": { page: "/portos", query: { lang: "en" } },
            "/en/contact": { page: "/contato", query: { lang: "en" } },
            "/en/gallery": { page: "/gallery", query: { lang: "en" } },
            "/en/gallery/photos": {
                page: "/gallery/photos",
                query: { lang: "en" },
            },
            "/en/gallery/videos": {
                page: "/gallery/videos",
                query: { lang: "en" },
            },
            "/en/gallery/trivia": {
                page: "/gallery/trivia",
                query: { lang: "en" },
            },
            "/es": { page: "/", query: { lang: "es" } },
            "/es/nosostros": { page: "/sobre", query: { lang: "es" } },
            "/es/servicios": { page: "/servicos", query: { lang: "es" } },
            "/es/servicios/aereo": {
                page: "/servicos/aereo",
                query: { lang: "es" },
            },
            "/es/servicios/carretero": {
                page: "/servicos/rodoviario",
                query: { lang: "es" },
            },
            "/es/servicios/maritimo": {
                page: "/servicos/maritimo",
                query: { lang: "es" },
            },
            "/es/herramientas": { page: "/ferramentas", query: { lang: "es" } },
            "/es/puertos": { page: "/portos", query: { lang: "es" } },
            "/es/contacto": { page: "/contato", query: { lang: "es" } },
            "/es/galeria": { page: "/galeria", query: { lang: "es" } },
            "/es/galeria/fotos": {
                page: "/galeria/fotos",
                query: { lang: "es" },
            },
            "/es/galeria/videos": {
                page: "/galeria/videos",
                query: { lang: "es" },
            },
            "/es/galeria/curiosidades": {
                page: "/galeria/videos",
                query: { lang: "es" },
            },
        };
    },
};

module.exports = nextConfig;
