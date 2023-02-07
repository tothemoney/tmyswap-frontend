import { Pool } from '@tmyswap/uikit'
import { Coin } from '@tmyswap/aptos-swap-sdk'
import CakeCollectModal from './CakeCollectModal'
import CakeStakeModal from './CakeStakeModal'

const HarvestActions = Pool.withCollectModalCardAction(CakeCollectModal)
const StakeActions = Pool.withStakeActions(CakeStakeModal)

export default Pool.withCardActions<Coin>(HarvestActions, StakeActions)
