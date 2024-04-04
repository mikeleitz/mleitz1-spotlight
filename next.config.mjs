import rehypePrism from '@mapbox/rehype-prism'
import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/blog/tools/decompile-java-cli/entry.html',
        destination: '/articles/decompile-java-class-files',
        permanent: true,
      },
      {
        source: '/blog/2019/11/21/tmux-terminal-emulator-overview-with-demo',
        destination: '/articles/tmux-the-terminal-emulator',
        permanent: true,
      },
      {
        source: '/blog/2019/7/8/create-your-own-personal-kubernetes-cluster-using-raspberry-pis',
        destination: '/articles/kubernetes-basics',
        permanent: true,
      },
      {
        source: '/blog/KubernetesBasics',
        destination: '/articles/kubernetes-basics',
        permanent: true,
      },
      {
        source: '/blog/PriceOfProductivity',
        destination: '/articles/price-of-productivity',
        permanent: true,
      },
      {
        source: '/blog',
        destination: '/articles',
        permanent: true,
      },      
      
      // Wildcard path matching
      // {
      //   source: '/blog/:slug',
      //   destination: '/news/:slug',
      //   permanent: true,
      // },
    ]
  },
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
})

export default withMDX(nextConfig)
