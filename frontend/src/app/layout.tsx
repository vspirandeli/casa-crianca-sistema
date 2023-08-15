import '../styles/globals.css';
import type { Metadata } from 'next';
import { twMerge } from 'tailwind-merge';

import { LayoutProvider } from '@hooks/useLayout';

export const metadata: Metadata = {
  title: 'Login | Casa da Criança',
  description: 'Página de login para sistema da Casa da Criança de Pederneiras',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <html lang="pt-BR" className="dark"> // to set darkmode
    <html lang="pt-BR">
      <body
        className={twMerge(
          'max-w-screen-2xl mx-auto shadow-lg bg-gray-300 dark:bg-gray-700',
        )}
      >
        <LayoutProvider>{children}</LayoutProvider>
      </body>
    </html>
  );
}
