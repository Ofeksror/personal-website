import './globals.css'
import { Roboto_Slab } from 'next/font/google'

export const metadata = {
  title: 'Ofek Sror',
  description: 'Ofek Sror\'s personal website',
}

const robotoSlab = Roboto_Slab({ subsets: ['latin'] });

export default function RootLayout({children,}: {children: React.ReactNode}) {
return (
    <html lang="en">
      <body className={robotoSlab.className}>
        { children }
      </body>
    </html>
  )
}
