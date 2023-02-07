import PoweredBy from 'components/layerZero/PoweredBy'
import { LinkExternal } from '@tmyswap/uikit'

const AptosBridgeFooter = () => {
  return (
    <>
      <PoweredBy />
      <LinkExternal m="20px auto" href="https://docs.tmyswap.org/get-started-aptos/aptos-faq#cake-bridging">
        Need Help?
      </LinkExternal>
      <LinkExternal m="20px auto" href="https://docs.tmyswap.org/get-started-aptos/aptos-coin-guide">
        Don’t see your assets?
      </LinkExternal>
    </>
  )
}

export default AptosBridgeFooter
