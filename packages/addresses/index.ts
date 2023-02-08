import { Chain } from 'wagmi';

const config = {
  CHAIN_ID: 8768,
  CHAIN_NAME: "TMY Chain",
  RPC_URL: "https://node1.tmyblockchain.org/rpc",
  FACTORY:"0xd382Af605a5699Ab8c96e53e0063C4276773456b",
  INIT_CODE_PAIR_HASH: "0x3e2427e1de228da4316eeebff5e4e72f96281ec95b7dcb677efe0705a1bf2f56",
  WTMY:"0x8e9bC1E2696Bc4c159dfAcD02Df7437F6D19A1c3",
  SYMBOL: "TMY",
  WRAPPED_SYMBOL: "WTMY",
  PROJECT_URL: "https://tmyswap.org",
  ROUTER:"0x8cbF6BB9219bFaF195186Cd2B91e2c6E1CFaaC32"
} as const;
export default config;

export const tmyChain: Chain = {
  id: config.CHAIN_ID,
  name: config.CHAIN_NAME,
  nativeCurrency: {
    name: config.SYMBOL,
    /** 2-6 characters long */
    symbol: config.SYMBOL,
    decimals: 18,
  },
  network: 'tmychain',
  rpcUrls: {
    default: { http: [config.RPC_URL] },
  },
  blockExplorers: {
    default: { name: "TmyScan", url: "https://tmyscan.com" }
  },
};
