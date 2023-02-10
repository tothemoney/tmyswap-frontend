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
      'The most popular AMM on BSC! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by TmySwap), NFTs, and more, on a platform you can trust.',
    images: [{ url: 'https://tmyswap.org/images/hero.png' }],
  },
}
