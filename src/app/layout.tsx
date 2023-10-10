import Navbar from '@/components/Navbar'
import { cn } from '@/lib/utils'
import { Inter } from 'next/font/google'
import Providers from '@/components/Providers'
import { Toaster } from '@/components/ui/Toaster'

import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    title: 'CommunityHub',
    description: "CommunityHub is a network of communities where people can dive into their interests, hobbies and passions. There's a community for whatever you're interested in",
  },
  keywords: [
    "Next.js blog",
    "React blog",
    "Tailwind CSS blog",
    "Developer blog",
    "Radix UI",
  ],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
}

export default function RootLayout({
  children,
  authModal,
}: {
  children: React.ReactNode
  authModal: React.ReactNode
}) {
  return (
    <html
      lang='en'
      className={cn(
        'bg-white text-slate-900 antialiased light',
        inter.className
      )}>
      <body className='min-h-screen pt-10 bg-slate-50 antialiased'>
        <Providers>
          <Navbar />
          {authModal}
          <div className='p-4 max-w-7xl mx-auto h-full pt-10'>
            {children}
          </div>
        </Providers>
        <Toaster />
      </body>
    </html>
  )
}
