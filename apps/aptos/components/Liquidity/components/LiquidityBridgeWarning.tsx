import { Currency } from '@tmyswap/aptos-swap-sdk'
import useBridgeInfo from 'components/Swap/hooks/useBridgeInfo'
import { Message, Flex, Text, Link } from '@tmyswap/uikit'
import { useTranslation } from '@tmyswap/localization'

const LiquidityBridgeWarning = ({ currency }: { currency?: Currency }) => {
  const { t } = useTranslation()
  const { showBridgeWarning, bridgeResult } = useBridgeInfo({ currency })

  return (
    <>
      {showBridgeWarning && (
        <Message variant="warning" mb="20px">
          <Flex>
            <Text fontSize="12px" color="warning" m="auto">
              {t('Use')}
            </Text>
            <Link
              external
              m="0 4px"
              fontSize="12px"
              color="warning"
              href={bridgeResult?.url}
              style={{ textDecoration: 'underline' }}
            >
              {bridgeResult?.platform}
            </Link>
            <Text fontSize="12px" color="warning" m="auto">
              {t('to bridge %symbol%.', { symbol: currency?.symbol ?? '' })}
            </Text>
          </Flex>
        </Message>
      )}
    </>
  )
}

export default LiquidityBridgeWarning
