import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="h-screen bg-white drop-shadow-md dark:bg-slate-800">
      <section className="h-screen">{children}</section>
    </main>
  );
}
