import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | TmySwap',
  defaultTitle: 'Blog | TmySwap',
  description:
    'Cheaper and faster than Uniswap? Discover TmySwap, the leading DEX on TMY Chain (TMY) with the best farms in DeFi and a lottery for CAKE.',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@TmySwap',
    site: '@TmySwap',
  },
  openGraph: {
    title: '🥞 TmySwap - A next evolution DeFi exchange on TMY Chain (TMY)',
    description:
      'Discover TmySwap, the first DEX on TMY Chain (TMY)',
    images: [{ url: 'https://tmyswap.org/images/hero_tmy.png' }],
  },
}
