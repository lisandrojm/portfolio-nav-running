/* src/app/_components/SectionContainer.tsx */

import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function SectionContainer({ children }: Props) {
  return <div className="container mx-auto px-3 xl:px-20">{children}</div>;
}
