// src/app/layout.tsx
'use client'
import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Inter } from 'next/font/google';
import './globals.css';
import { VisibilityProvider, useVisibility } from '@/components/visible/VisibilityContext';

const inter = Inter({ subsets: ['latin'] });

const RootLayout = ({ children }) => {
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

const LayoutContent = ({ children }) => {
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
