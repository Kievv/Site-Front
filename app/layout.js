import Navbar from '@components/navbar/Navbar';
import { RemediosContextProvider } from '@contexts/RemediosContext';
import { UserContextProvider } from '@contexts/UserContext';
import React from 'react';

export const metadata = {
  title: 'REMEDIE',
  description: 'App em NextJS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <header>
          <Navbar></Navbar>
        </header>
        <main>
          <UserContextProvider>
            <RemediosContextProvider>{children}</RemediosContextProvider>
          </UserContextProvider>
        </main>
        <footer>
          <p>Direitos Autorais 2023</p>
        </footer>
      </body>
    </html>
  );
}
