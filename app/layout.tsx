import './globals.css'

export const metadata = {
  title: 'Ofek Sror',
  description: 'Ofek Sror\'s personal website',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        { children }
      </body>
    </html>
  )
}
