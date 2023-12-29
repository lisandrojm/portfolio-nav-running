/* src/app/_components/SectionContainer.tsx */

import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function SectionContainer({ children }: Props) {
  return <section className="container mx-auto px-3 lg:px-40">{children}</section>;
}
