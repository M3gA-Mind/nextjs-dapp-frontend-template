"use client";
import { createConfig, http } from "wagmi";
import { linea } from "wagmi/chains";
import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import {
  rainbowWallet,
  metaMaskWallet,
  rabbyWallet,
  coinbaseWallet,
  ledgerWallet,
  trustWallet,
  phantomWallet,
  okxWallet,
  imTokenWallet,
  safeWallet,
  argentWallet,
  bitgetWallet,
  zerionWallet,
  tahoWallet,
  uniswapWallet,
  frameWallet,
  xdefiWallet,
  talismanWallet,
  roninWallet,
  gateWallet,
  oneKeyWallet,
  tokenPocketWallet,
  coreWallet,
  ramperWallet,
  bestWallet,
  subWallet,
} from "@rainbow-me/rainbowkit/wallets";

// Create config function to ensure it only runs on client side
function createWagmiConfig() {
  const connectors = connectorsForWallets(
    [
      {
        groupName: "Popular",
        wallets: [
          rainbowWallet,
          metaMaskWallet,
          coinbaseWallet,
          trustWallet,
          phantomWallet,
        ],
      },
      {
        groupName: "Hardware",
        wallets: [ledgerWallet, oneKeyWallet],
      },
      {
        groupName: "Mobile",
        wallets: [
          rabbyWallet,
          imTokenWallet,
          bitgetWallet,
          tokenPocketWallet,
          coreWallet,
          ramperWallet,
          bestWallet,
          subWallet,
          okxWallet,
        ],
      },
      {
        groupName: "DeFi & Security",
        wallets: [
          safeWallet,
          argentWallet,
          zerionWallet,
          tahoWallet,
          uniswapWallet,
          frameWallet,
          xdefiWallet,
          talismanWallet,
          roninWallet,
          gateWallet,
        ],
      },
    ],
    {
      appName: "Toshi Launcher",
      projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || "",
    }
  );

  return createConfig({
    chains: [linea],
    connectors,
    transports: {
      [linea.id]: http("https://rpc.linea.build"),
    },
  });
}

// Only create config on client side
let wagmiConfig: ReturnType<typeof createWagmiConfig> | undefined;

export function getConfig() {
  // Check if we're in a browser environment with IndexedDB support
  if (typeof window === "undefined" || typeof indexedDB === "undefined") {
    // Return a minimal config for SSR or environments without IndexedDB
    return createConfig({
      chains: [linea],
      connectors: [],
      transports: {
        [linea.id]: http("https://rpc.linea.build"),
      },
    });
  }

  if (!wagmiConfig) {
    wagmiConfig = createWagmiConfig();
  }

  return wagmiConfig;
}

// Export config for backward compatibility
export const config = getConfig();
