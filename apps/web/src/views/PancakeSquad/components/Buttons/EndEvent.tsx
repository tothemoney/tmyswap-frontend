import { Button, Flex, NextLinkFromReactRouter } from '@tmyswap/uikit'
import { ContextApi } from '@tmyswap/localization'
import { SaleStatusEnum, UserStatusEnum } from '../../types'

type EndEventProps = {
  t: ContextApi['t']
  account: string
  saleStatus: SaleStatusEnum
  userStatus: UserStatusEnum
  maxSupply: number
  totalSupplyMinted: number
  numberTokensOfUser: number
}

const EndEventButtons: React.FC<React.PropsWithChildren<EndEventProps>> = ({
  t,
  account,
  saleStatus,
  numberTokensOfUser,
  maxSupply,
  totalSupplyMinted,
}) => {
  const hasSquad = saleStatus === SaleStatusEnum.Claim && numberTokensOfUser > 0
  const canViewMarket = maxSupply === totalSupplyMinted

  return (
    <Flex flexDirection={['column', null, null, 'row']}>
      {canViewMarket && (
        <Button mb={['4px', null, null, '0']} mr={[0, null, null, '4px']}>
          <NextLinkFromReactRouter to="/nfts">{t('View market')}</NextLinkFromReactRouter>
        </Button>
      )}
      {hasSquad && (
        <Button>
          <NextLinkFromReactRouter to={`/profile/${account}`}>
            {t('Your Squad (%tokens%)', { tokens: numberTokensOfUser })}
          </NextLinkFromReactRouter>
        </Button>
      )}
    </Flex>
  )
}

export default EndEventButtons
