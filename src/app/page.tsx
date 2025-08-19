"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ConnectWallet } from "@/components/connect-wallet";
import { ExampleQuery } from "@/components/example-query";
import { useAccount } from "wagmi";

export default function Home() {
  const { isConnected } = useAccount();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Nextjs DApp Template
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            A modern Web3 application launcher
          </p>
        </header>

        <div className="max-w-4xl mx-auto">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Wallet Connection</span>
                <ConnectWallet />
              </CardTitle>
              <CardDescription>
                Connect your wallet to access Web3 features
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isConnected ? (
                <div className="text-green-600 dark:text-green-400">
                  ✅ Wallet connected successfully!
                </div>
              ) : (
                <div className="text-gray-500 dark:text-gray-400">
                  Please connect your wallet to get started
                </div>
              )}
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Next.js 15</CardTitle>
                <CardDescription>
                  Latest version with App Router and TypeScript
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>RainbowKit + Wagmi</CardTitle>
                <CardDescription>
                  Modern wallet connection and Web3 interactions
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>TanStack Query</CardTitle>
                <CardDescription>
                  Powerful data fetching and caching
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Redux Toolkit</CardTitle>
                <CardDescription>
                  State management with modern Redux
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>shadcn/ui</CardTitle>
                <CardDescription>
                  Beautiful and accessible UI components
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tailwind CSS</CardTitle>
                <CardDescription>Utility-first CSS framework</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="mt-12">
            <ExampleQuery />
          </div>
        </div>
      </div>
    </div>
  );
}
