import { defaultChain } from '@tmyswap/awgmi'
import { mainnet, testnet, Chain } from '@tmyswap/awgmi/core'

export { defaultChain }

export const chains = [mainnet, testnet].filter(Boolean) as Chain[]
