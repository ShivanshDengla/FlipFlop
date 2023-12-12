import { ChainId, TokenInfo } from "@decent.xyz/box-common";

export const USDC_OPTIMISM = "0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85";

export const usdcToken: TokenInfo = {
  address: USDC_OPTIMISM,
  decimals: 6,
  name: "USD Coin",
  symbol: "USDC",
  logo: `https://s3.coinmarketcap.com/static-gravity/image/5a8229787b5e4c809b5914eef709b59a.png`,
  chainId: ChainId.OPTIMISM,
  isNative: false,
};

export const PUSDCE_OPTIMISM = "0xe3b3a464ee575e8e25d2508918383b89c832f275";

export const pusdceToken: TokenInfo = {
  address: PUSDCE_OPTIMISM,
  decimals: 6,
  name: "PoolTogether Prize USD Coin",
  symbol: "PUSDC.E",
  logo: `https://assets.coingecko.com/coins/images/32455/standard/prizeUSDCIcon_200.png?1698241065`,
  chainId: ChainId.OPTIMISM,
  isNative: false,
};
