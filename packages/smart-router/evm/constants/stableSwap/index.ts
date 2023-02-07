import { ChainId } from '@tmyswap/sdk'

import { StableSwapPool } from '../../types/pool'
import { poolMap } from './pools'

export function getStableSwapPools(chainId: ChainId): StableSwapPool[] {
  return poolMap[chainId] || []
}
