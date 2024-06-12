// src/app/layout.tsx
'use client'
import React, { ReactNode } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Inter } from 'next/font/google';
import './globals.css';
import { VisibilityProvider, useVisibility } from '@/components/visible/VisibilityContext';

const inter = Inter({ subsets: ['latin'] });

interface LayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <VisibilityProvider>
      <html lang="en">
        <head></head>
        <body className={inter.className}>
          <LayoutContent>{children}</LayoutContent>
        </body>
      </html>
    </VisibilityProvider>
  );
};

interface LayoutContentProps {
  children: ReactNode;
}

const LayoutContent: React.FC<LayoutContentProps> = ({ children }) => {
  const { isVisible } = useVisibility();

  return (
    <>
      {/* {isVisible && <Header scrollToSection={() => {}} />} Placeholder */}
      {children}
      {isVisible && <Footer />}
    </>
  );
};

export default RootLayout;
