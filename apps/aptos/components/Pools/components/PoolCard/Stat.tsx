import { Flex, Text, Pool } from '@tmyswap/uikit'
import BigNumber from 'bignumber.js'
import { useTranslation } from '@tmyswap/localization'
import { Coin } from '@tmyswap/aptos-swap-sdk'
import useActiveWeb3React from 'hooks/useActiveWeb3React'

export const AprInfo: React.FC<
  React.PropsWithChildren<{ pool: Pool.DeserializedPool<Coin>; stakedBalance: BigNumber }>
> = ({ pool, stakedBalance }) => {
  const { t } = useTranslation()
  const { account = '' } = useActiveWeb3React()

  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Text small>{t('APR')}:</Text>
      <Pool.Apr<Coin>
        shouldShowApr
        pool={pool}
        showIcon
        stakedBalance={stakedBalance}
        performanceFee={0}
        fontSize="14px"
        account={account}
        autoCompoundFrequency={0}
      />
    </Flex>
  )
}
