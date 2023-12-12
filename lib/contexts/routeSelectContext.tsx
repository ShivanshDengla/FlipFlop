import { ChainId, TokenInfo, ethGasToken, getUsdc } from "@decent.xyz/box-common";
import { pusdceToken } from "../constants";
import { Dispatch, PropsWithChildren, createContext, useReducer } from "react";

export const chainIcons: { [key: number]: string } = {
  [ChainId.ETHEREUM]: "/ethereum.svg",
  [ChainId.ARBITRUM]: "/arbitrum.svg",
  [ChainId.POLYGON]: "/polygon.svg",
  [ChainId.BASE]: "/base.png",
  [ChainId.AVALANCHE]: "/avalanche.svg",
};

export const chainNames: { [key: number]: string } = {
  [ChainId.ETHEREUM]: "Ethereum",
  [ChainId.ARBITRUM]: "Arbitrum One",
  [ChainId.POLYGON]: "Polygon",
  [ChainId.BASE]: "Base",
  [ChainId.AVALANCHE]: "Avalanche",
};

export const destChainIcons: { [key: number]: string } = {

  [ChainId.OPTIMISM]: "/optimism.svg",

};

export const destChainNames: { [key: number]: string } = {

  [ChainId.OPTIMISM]: "OP Mainnet",

};

export type RouteVars = {
  srcChain: ChainId;
  srcToken: TokenInfo;
  dstChain: ChainId;
  dstToken: TokenInfo;
  sameChain: boolean;
  purchaseName: string;
};

export const RouteSelectContext = createContext<{
  routeVars: RouteVars;
  updateRouteVars: Dispatch<Partial<RouteVars>>;
}>({
  routeVars: {
    srcChain: ChainId.OPTIMISM,
    srcToken: getDefaultToken(ChainId.OPTIMISM),
    dstChain: ChainId.OPTIMISM,
    dstToken: pusdceToken,
    purchaseName: "",
    sameChain: false,
  },
  updateRouteVars: () => {},
});

function routeReducer(prev: RouteVars, next: Partial<RouteVars>) {
  const newVars = { ...prev, ...next };

  if (newVars.dstChain !== prev.dstChain && !next.dstToken) {
    newVars.dstToken = getDefaultToken(newVars.dstChain);
  }

  newVars.sameChain =
    newVars.srcChain == newVars.dstChain &&
    newVars.srcToken.address == newVars.dstToken.address;

  return newVars;
}

export function getDefaultToken(chainId: ChainId) {
  const usdcToken: TokenInfo = {
    address: getUsdc(chainId),
    decimals: 6,
    name: "USD Coin",
    symbol: "USDC",
    logo: `https://s3.coinmarketcap.com/static-gravity/image/5a8229787b5e4c809b5914eef709b59a.png`,
    chainId: chainId,
    isNative: false,
  };
  return { ...usdcToken, chainId };
}

export default function RouteSelectProvider({ children }: PropsWithChildren) {
  const [routeVars, updateRouteVars] = useReducer(routeReducer, {
    srcChain: ChainId.ARBITRUM,
    srcToken: ethGasToken,
    dstChain: ChainId.OPTIMISM,
    dstToken: pusdceToken,
    sameChain: false,
    purchaseName: "",
  });

  const value = { routeVars, updateRouteVars };

  return (
    <RouteSelectContext.Provider value={value}>
      {children}
    </RouteSelectContext.Provider>
  );
}
