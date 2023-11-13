import "./globals.css"
import { Header, Footer } from "./sections"
import { DM_Sans } from 'next/font/google'

const dm_sans = DM_Sans({
  subsets: ['latin'],
  weight: ["400","500","700"]
})

export const metadata = {
  title: 'Agency Minimal Landing Page',
  description: 'A Nextjs Agency portfolio website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dm_sans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
