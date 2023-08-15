import { ReactNode } from 'react';

export function LayoutHScreen({ children }: { children: ReactNode }) {
  return (
    <main className="h-screen bg-white drop-shadow-md dark:bg-slate-800 overflow-hidden">
      <section className="h-screen">{children}</section>
    </main>
  );
}
