import { Token } from '@tmyswap/sdk'
import { Pool } from '@tmyswap/uikit'
import StakeModal from './StakeModal'

export default Pool.withStakeActions<Token>(StakeModal)
