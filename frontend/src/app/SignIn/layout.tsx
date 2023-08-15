import { ReactNode } from 'react';

import { LayoutHScreen } from '@templates/HScreen';

export default function Layout({ children }: { children: ReactNode }) {
  return <LayoutHScreen>{children}</LayoutHScreen>;
}
