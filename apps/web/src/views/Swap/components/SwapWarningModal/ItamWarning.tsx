import { useTranslation } from '@tmyswap/localization'
import { Text, Link } from '@tmyswap/uikit'

const ItamWarning = () => {
  const { t } = useTranslation()

  return (
    <>
      <Text>
        {t('ITAM has been rebranded as ITAM CUBE.')}{' '}
        <Link style={{ display: 'inline' }} external href="https://itam.network/swap">
          {t('Please proceed to ITAM bridge to conduct a one-way swap of your ITAM tokens.')}
        </Link>{' '}
        {t('All transfers of the old ITAM token will be disabled after the swap.')}
      </Text>
    </>
  )
}

export default ItamWarning
