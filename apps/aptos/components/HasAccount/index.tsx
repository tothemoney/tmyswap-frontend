import { useAccount } from '@tmyswap/awgmi'
import { useIsMounted } from '@tmyswap/hooks'

export default function HasAccount({ fallbackComp, children }) {
  const { account } = useAccount()
  const isMounted = useIsMounted()

  return isMounted && account ? <>{children}</> : fallbackComp
}
