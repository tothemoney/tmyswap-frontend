import { useState } from 'react'
import { useTranslation } from '@tmyswap/localization'
import { Text, Flex, Checkbox, Button } from '@tmyswap/uikit'

interface AcknowledgementProps {
  handleContinueClick: () => void
}

const Acknowledgement: React.FC<React.PropsWithChildren<AcknowledgementProps>> = ({ handleContinueClick }) => {
  const { t } = useTranslation()
  const [isConfirmed, setIsConfirmed] = useState(false)

  return (
    <>
      <Flex justifyContent="space-between">
        <label htmlFor="acknowledgement">
          <Flex alignItems="center">
            <Checkbox
              id="acknowledgement"
              name="confirmed"
              type="checkbox"
              checked={isConfirmed}
              onChange={() => setIsConfirmed(!isConfirmed)}
              scale="sm"
            />
            <Text ml="10px" style={{ userSelect: 'none' }}>
              {t('I understand')}
            </Text>
          </Flex>
        </label>
        <Button disabled={!isConfirmed} onClick={handleContinueClick}>
          {t('Continue')}
        </Button>
      </Flex>
    </>
  )
}

export default Acknowledgement
