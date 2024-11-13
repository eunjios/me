import { Metadata } from 'next';
import localFont from 'next/font/local';
import React from 'react';

import '../src/css/globals.css';
import { Container, Footer, Header } from '@/components/layout';

const pretendard = localFont({
  src: '../public/fonts/pretendard.woff2',
  display: 'swap',
  weight: '100 900',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: '이은지 | Frontend Engineer',
  description: '이은지의 포트폴리오',
  icons: {
    icon: '/assets/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={`${pretendard.variable}`}>
      <body className={pretendard.className}>
        <Header />
        <Container>{children}</Container>
        <Container>
          <Footer />
        </Container>
      </body>
    </html>
  );
}
