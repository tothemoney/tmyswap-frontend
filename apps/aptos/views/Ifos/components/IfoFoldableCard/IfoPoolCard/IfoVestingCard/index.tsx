import { useMemo } from 'react'
import BigNumber from 'bignumber.js'
import { Flex, Box, Text, IfoProgressStepper, IfoVestingFooter } from '@tmyswap/uikit'
import { useTranslation } from '@tmyswap/localization'
import Divider from 'components/Divider'
import { Ifo, PoolIds } from 'config/constants/types'
import { PublicIfoData, WalletIfoData } from 'views/Ifos/types'
import useIfoVesting from 'views/Ifos/hooks/useIfoVesting'
import { getFullDisplayBalance } from '@tmyswap/utils/formatBalance'
import TotalPurchased from './TotalPurchased'
import TotalAvailableClaim from './TotalAvailableClaim'
import ReleasedTokenInfo from './ReleasedTokenInfo'
import { ClaimButton } from '../ClaimButton'
import VestingClaimButton from '../VestingClaimButton'

interface IfoVestingCardProps {
  poolId: PoolIds
  ifo: Ifo
  publicIfoData: PublicIfoData
  walletIfoData: WalletIfoData
}

const IfoVestingCard: React.FC<React.PropsWithChildren<IfoVestingCardProps>> = ({
  poolId,
  ifo,
  publicIfoData,
  walletIfoData,
}) => {
  const { t } = useTranslation()
  const { token } = ifo
  const userPool = walletIfoData[poolId]
  const { vestingInformation } = publicIfoData[poolId]

  const { amountReleased, amountInVesting, amountAvailableToClaim, amountAlreadyClaimed, totalPurchased } =
    useIfoVesting({
      poolId,
      publicIfoData,
      walletIfoData,
    })

  const amountClaimed = useMemo(
    () =>
      amountAlreadyClaimed.gt(0) ? getFullDisplayBalance(amountAlreadyClaimed, token.decimals, token.decimals) : '0',
    [token, amountAlreadyClaimed],
  )

  const releaseRate = useMemo(() => {
    const rate = new BigNumber(userPool.vestingAmountTotal).div(vestingInformation.duration)
    return getFullDisplayBalance(rate, token.decimals, token.decimals)
  }, [vestingInformation, userPool, token])

  return (
    <Flex flexDirection="column">
      <Box>
        <IfoProgressStepper
          vestingStartTime={publicIfoData.vestingStartTime || 0}
          cliff={publicIfoData[poolId]?.vestingInformation?.cliff || 0}
          duration={publicIfoData[poolId]?.vestingInformation?.duration || 0}
        />
        <TotalPurchased token={ifo.token} totalPurchased={totalPurchased} />
        <ReleasedTokenInfo ifo={ifo} amountReleased={amountReleased} amountInVesting={amountInVesting} />
        <Divider />
        <TotalAvailableClaim ifo={ifo} amountAvailableToClaim={amountAvailableToClaim} />
        <Text mb="24px" color="textSubtle" fontSize="14px">
          {t('You’ve already claimed %amount% %symbol%', { symbol: token.symbol, amount: amountClaimed })}
        </Text>
        <Box mb="24px">
          {!userPool.isVestingInitialized ? (
            <ClaimButton ifo={ifo} poolId={poolId} walletIfoData={walletIfoData} />
          ) : (
            <VestingClaimButton
              ifo={ifo}
              poolId={poolId}
              amountAvailableToClaim={amountAvailableToClaim}
              walletIfoData={walletIfoData}
            />
          )}
        </Box>
      </Box>
      <IfoVestingFooter
        duration={publicIfoData[poolId]?.vestingInformation?.duration}
        vestingStartTime={publicIfoData.vestingStartTime}
        releaseRate={releaseRate}
      />
    </Flex>
  )
}

export default IfoVestingCard
