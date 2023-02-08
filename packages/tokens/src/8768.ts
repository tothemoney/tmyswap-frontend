import { ChainId, WBNB, ERC20Token } from '@tmyswap/sdk'
import addresses from '@tmyswap/addresses'
import { BUSD_BSC, CAKE_MAINNET, USDT_BSC } from './common'

export const tmyTokens = {
  wbnb: WBNB[ChainId.BSC],
  // bnb here points to the wbnb contract. Wherever the currency BNB is required, conditional checks for the symbol 'BNB' can be used
  tmy: new ERC20Token(
    ChainId.BSC,
    addresses.WTMY,
    18,
    addresses.SYMBOL,
    addresses.SYMBOL,
    addresses.PROJECT_URL,
  ),
  usds: new ERC20Token(
    ChainId.BSC,
    '0x23396cF899Ca06c4472205fC903bDB4de249D6fC',
    18,
    'UST',
    'Wrapped USDS Token',
    'https://tmychain.org/',
  ),
}
