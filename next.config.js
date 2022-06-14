/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  exportPathMap: async function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/en':{page:'/', query:{lang: 'en'}},
      '/es':{page:'/', query:{lang: 'es'}},
      '/en/about': { page: '/sobre',  query:{lang: 'en'}},
      '/en/services': { page: '/servicos',  query:{lang: 'en'}},
      '/en/tools': { page: '/ferramentas',  query:{lang: 'en'}},
      '/en/harbours': { page: '/ferramentas',  query:{lang: 'en'}},
      '/en/contact': { page: '/ferramentas',  query:{lang: 'en'}},
    }
  },
}

module.exports = nextConfig
