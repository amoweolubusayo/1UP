import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { infuraProvider } from "wagmi/providers/infura";
import { publicProvider } from "wagmi/providers/public";
import { InjectedConnector } from "wagmi/connectors/injected";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { useAccount, useDisconnect } from "wagmi";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { useEffect } from "react";
import {
  LivepeerConfig,
  createReactClient,
  studioProvider,
} from '@livepeer/react';

const livepeerClient = createReactClient({
  provider: studioProvider({
    apiKey: process.env.NEXT_PUBLIC_STUDIO_API_KEY,
  }),
});

const { chains, provider } = configureChains(
  [chain.polygonMumbai],
  [infuraProvider({ apiKey: process.env.INFURA_ID }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "primero",
  chains,
});

const connector = new MetaMaskConnector();

const wagmiClient = createClient({
  autoConnect: true,
  provider,
  connectors,
});

export default function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <ApolloProvider client={client}>
        <LivepeerConfig client={livepeerClient}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          </LivepeerConfig>
        </ApolloProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
