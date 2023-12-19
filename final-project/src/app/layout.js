import { Inter } from 'next/font/google'
import './globals.css'
import Header from "./babycomponents/Header"
import Footer from "./babycomponents/Footer"
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Shelter App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>        
        {children}
        <Toaster />
        
      </body>
      <Footer />
    </html>
  )
}
