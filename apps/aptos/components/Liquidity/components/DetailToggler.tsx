import { useTranslation } from '@tmyswap/localization'
import { RowBetween, Text } from '@tmyswap/uikit'

// import { useState } from 'react'

export default function DetailToggler({ children }) {
  const { t } = useTranslation()

  // const [showDetailed, setShowDetailed] = useState(false)

  return (
    <>
      <RowBetween>
        <Text>{t('Amount')}</Text>
        {/* <Button variant="text" paddingRight="0" scale="sm" onClick={() => setShowDetailed((prev) => !prev)}>
          {t('Simple')}
        </Button> */}
      </RowBetween>
      {children()}
    </>
  )
}
