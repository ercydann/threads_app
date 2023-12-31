import { ClerkProvider } from '@clerk/nextjs/app-beta'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Topbar from '@/components/shared/Topbar'
import Leftsidebar from '@/components/shared/LeftSidebar'
import Rightsidebar from '@/components/shared/RightSidbar'
import Bottombar from '@/components/shared/Bottombar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Threads',
  description: 'A Next.js Meta Threads Application',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
     <ClerkProvider >
        <html lang="en">
        <body className={inter.className}>
          <Topbar />

           <main className='flex flex-row'>
            <Leftsidebar />

              <section className='main-container'>
                <div className='w-full max-w-4xl'>
                    {children}
                </div>
              </section>

            <Rightsidebar />
           </main>

          <Bottombar />
        </body>
      </html>
    </ClerkProvider>
    
  )
}
