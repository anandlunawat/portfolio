import './globals.css'
import Navbar from './Components/Navbar'
import SideNav from './Components/SideNav'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Anand Lunawat',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">      
      <body className={inter.className}>
        {/* <Navbar />
        <SideNav /> */}
        {children}
      </body>      
    </html>
  )
}
