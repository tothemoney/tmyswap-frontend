import { Card, Heading, PageHeader } from '@tmyswap/uikit'
import Page from 'components/Layout/Page'
import { useTranslation } from '@tmyswap/localization'
import ActivityHistory from '../ActivityHistory/ActivityHistory'

const Activity = () => {
  const { t } = useTranslation()

  return (
    <>
      <PageHeader>
        <Heading as="h1" scale="xxl" color="secondary" data-test="nft-activity-title">
          {t('Activity')}
        </Heading>
      </PageHeader>
      <Page>
        <Card>
          <ActivityHistory />
        </Card>
      </Page>
    </>
  )
}

export default Activity
