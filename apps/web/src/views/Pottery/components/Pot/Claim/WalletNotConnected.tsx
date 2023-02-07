import { Flex, BunnyPlaceholderIcon, Text } from '@tmyswap/uikit'
import ConnectWalletButton from 'components/ConnectWalletButton'
import { useTranslation } from '@tmyswap/localization'

const WalletNotConnected: React.FC<React.PropsWithChildren> = () => {
  const { t } = useTranslation()
  return (
    <Flex flexDirection="column" padding="16px">
      <BunnyPlaceholderIcon width={80} height={80} />
      <Text m="16px 0" bold textAlign="center">
        {t('Wallet not connected')}
      </Text>
      <ConnectWalletButton />
    </Flex>
  )
}

export default WalletNotConnected
