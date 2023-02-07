import { Token } from '@tmyswap/sdk'
import { Pool } from '@tmyswap/uikit'
import StakeModal from '../../Modals/StakeModal'

export default Pool.withStakeActions<Token>(StakeModal)
