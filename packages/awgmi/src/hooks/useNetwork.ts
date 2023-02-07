import { getNetwork, watchNetwork } from '@tmyswap/awgmi/core'
import { useSyncExternalStoreWithTracked } from './useSyncExternalStoreWithTracked'

export function useNetwork() {
  return useSyncExternalStoreWithTracked(watchNetwork, getNetwork)
}
