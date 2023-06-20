
import Navbar from '@components/navbar/Navbar'

export const metadata = {
  title: 'REMEDIE',
  description: 'App em NextJS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body >
        <header>
          <Navbar></Navbar>
        </header>
        <main>{children}</main>
        <footer>
          <p>Direitos Autorais 2023</p>
        </footer>
        </body>
    </html>
  )
}