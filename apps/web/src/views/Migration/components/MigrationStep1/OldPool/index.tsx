import { Token } from '@tmyswap/sdk'
import { Pool } from '@tmyswap/uikit'
import React from 'react'
import PoolsTable from './PoolTable'

interface OldPoolProps {
  account: string
  pools: Pool.DeserializedPool<Token>[]
  userDataLoaded: boolean
}

const OldPool: React.FC<React.PropsWithChildren<OldPoolProps>> = ({ account, pools, userDataLoaded }) => {
  const userDataReady: boolean = !account || (!!account && userDataLoaded)
  return <PoolsTable pools={pools} account={account} userDataReady={userDataReady} />
}

export default OldPool
