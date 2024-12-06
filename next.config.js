module.exports = {
    compress: true,
    optimizeFonts: true,
    swcMinify: true,
    async redirects() {
        return [
            // Rotas para a página inicial
            {
                source: "/en",
                destination: "/?lang=en",
                permanent: true,
            },
            {
                source: "/es",
                destination: "/?lang=es",
                permanent: true,
            },

            // Rotas para a página "Sobre"
            {
                source: "/en/about",
                destination: "/sobre?lang=en",
                permanent: true,
            },
            {
                source: "/es/nosotros",
                destination: "/sobre?lang=es",
                permanent: true,
            },

            // Rotas para "Serviços"
            {
                source: "/en/services",
                destination: "/servicos?lang=en",
                permanent: true,
            },
            {
                source: "/es/servicios",
                destination: "/servicos?lang=es",
                permanent: true,
            },
            {
                source: "/en/services/air",
                destination: "/servicos/aereo?lang=en",
                permanent: true,
            },
            {
                source: "/es/servicios/aereo",
                destination: "/servicos/aereo?lang=es",
                permanent: true,
            },
            {
                source: "/en/services/maritime",
                destination: "/servicos/maritimo?lang=en",
                permanent: true,
            },
            {
                source: "/es/servicios/maritimo",
                destination: "/servicos/maritimo?lang=es",
                permanent: true,
            },
            {
                source: "/en/services/road",
                destination: "/servicos/rodoviario?lang=en",
                permanent: true,
            },
            {
                source: "/es/servicios/carretero",
                destination: "/servicos/rodoviario?lang=es",
                permanent: true,
            },
            {
                source: "/en/services/china",
                destination: "/servicos/china?lang=en",
                permanent: true,
            },
            {
                source: "/es/servicios/china",
                destination: "/servicos/china?lang=es",
                permanent: true,
            },
            {
                source: "/en/services/insurance",
                destination: "/servicos/seguro?lang=en",
                permanent: true,
            },
            {
                source: "/es/servicios/seguro",
                destination: "/servicos/seguro?lang=es",
                permanent: true,
            },

            // Rotas para "Ferramentas"
            {
                source: "/en/tools",
                destination: "/ferramentas?lang=en",
                permanent: true,
            },
            {
                source: "/es/herramientas",
                destination: "/ferramentas?lang=es",
                permanent: true,
            },

            // Rotas para "Portos"
            {
                source: "/en/ports",
                destination: "/portos?lang=en",
                permanent: true,
            },
            {
                source: "/es/puertos",
                destination: "/portos?lang=es",
                permanent: true,
            },

            // Rotas para "Galeria"
            {
                source: "/en/gallery",
                destination: "/galeria?lang=en",
                permanent: true,
            },
            {
                source: "/es/galeria",
                destination: "/galeria?lang=es",
                permanent: true,
            },
            {
                source: "/en/gallery/photos",
                destination: "/galeria/fotos?lang=en",
                permanent: true,
            },
            {
                source: "/es/galeria/fotos",
                destination: "/galeria/fotos?lang=es",
                permanent: true,
            },
            {
                source: "/en/gallery/videos",
                destination: "/galeria/videos?lang=en",
                permanent: true,
            },
            {
                source: "/es/galeria/videos",
                destination: "/galeria/videos?lang=es",
                permanent: true,
            },
            {
                source: "/en/gallery/trivia",
                destination: "/galeria/curiosidades?lang=en",
                permanent: true,
            },
            {
                source: "/es/galeria/curiosidades",
                destination: "/galeria/curiosidades?lang=es",
                permanent: true,
            },

            // Rotas para "Contato"
            {
                source: "/en/contact",
                destination: "/contato?lang=en",
                permanent: true,
            },
            {
                source: "/es/contacto",
                destination: "/contato?lang=es",
                permanent: true,
            },
        ];
    },
};
