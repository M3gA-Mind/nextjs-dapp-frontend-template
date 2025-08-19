"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { Provider } from "react-redux";
import { store } from "@/lib/store";
import { getConfig } from "@/lib/wagmi";
import { queryClient } from "@/lib/query";

import "@rainbow-me/rainbowkit/styles.css";

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <Provider store={store}>
      <WagmiProvider config={getConfig()}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>{children}</RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </Provider>
  );
}
