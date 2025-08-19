# Toshi Launcher

A modern Web3 application launcher built with Next.js 15, TypeScript, and the latest Web3 technologies.

## 🚀 Features

- **Next.js 15** - Latest version with App Router and TypeScript
- **RainbowKit + Wagmi** - Modern wallet connection and Web3 interactions
- **TanStack Query** - Powerful data fetching and caching
- **Redux Toolkit** - State management with modern Redux
- **shadcn/ui** - Beautiful and accessible UI components
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Full type safety
- **Yarn** - Fast and reliable package manager

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Web3**: RainbowKit, Wagmi, Viem
- **State Management**: Redux Toolkit
- **Data Fetching**: TanStack Query
- **Package Manager**: Yarn

## 📦 Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd toshi-launcher
```

2. Install dependencies:

```bash
yarn install
```

3. Set up environment variables:

```bash
cp .env.example .env.local
```

4. Update the `.env.local` file with your configuration:

```env
# WalletConnect Project ID (get one at https://cloud.walletconnect.com)
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_project_id_here
```

5. Start the development server:

```bash
yarn dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔧 Configuration

### WalletConnect Project ID

To use WalletConnect features, you need to get a Project ID from [WalletConnect Cloud](https://cloud.walletconnect.com):

1. Go to [WalletConnect Cloud](https://cloud.walletconnect.com)
2. Sign up or log in
3. Create a new project
4. Copy the Project ID
5. Add it to your `.env.local` file

### Supported Chains

The application is configured to support the following chains:

- Ethereum Mainnet
- Polygon
- Optimism
- Arbitrum
- Base
- Zora

You can modify the chain configuration in `src/lib/wagmi.ts`.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── connect-wallet.tsx # Wallet connection component
│   └── providers.tsx     # App providers
└── lib/                  # Utility functions and configurations
    ├── hooks.ts          # Redux hooks
    ├── query.ts          # TanStack Query configuration
    ├── store.ts          # Redux store
    ├── utils.ts          # Utility functions
    └── wagmi.ts          # Wagmi configuration
```

## 🎨 UI Components

This project uses shadcn/ui for UI components. To add new components:

```bash
npx shadcn@latest add <component-name>
```

Available components:

- Button
- Card
- Input
- Label

## 🔗 Web3 Integration

### Wallet Connection

The app uses RainbowKit for wallet connection. Users can connect with:

- MetaMask
- WalletConnect
- Coinbase Wallet
- And many more

### State Management

- **Redux Toolkit**: For global application state
- **TanStack Query**: For server state and caching
- **Wagmi**: For Web3 state management

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms

The app can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📝 Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint` - Run ESLint
- `yarn type-check` - Run TypeScript type checking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🔗 Links

- [Next.js Documentation](https://nextjs.org/docs)
- [RainbowKit Documentation](https://www.rainbowkit.com/)
- [Wagmi Documentation](https://wagmi.sh/)
- [TanStack Query Documentation](https://tanstack.com/query)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
