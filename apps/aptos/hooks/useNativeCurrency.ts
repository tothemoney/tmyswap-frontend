import { AptosCoin } from '@tmyswap/aptos-swap-sdk'
import { defaultChain } from '@tmyswap/awgmi'
import { useMemo } from 'react'
import { useActiveChainId } from './useNetwork'

const useNativeCurrency = (chainId?: number) => {
  const webChainId = useActiveChainId()

  return useMemo(() => {
    return AptosCoin.onChain(chainId || webChainId || defaultChain.id)
  }, [chainId, webChainId])
}

export default useNativeCurrency
