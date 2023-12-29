import SectionContainer from '@/_components/SectionContainer';
import Footer from '@/_components/Footer';
import { ReactNode } from 'react';
import Header from '@/_components/Header';

interface Props {
  children: ReactNode;
}

const LayoutWrapper = ({ children }: Props) => {
  return (
    <div className="flex h-screen flex-col justify-between">
      <Header />
      <main className="mb-auto">{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutWrapper;
