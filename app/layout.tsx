import { Metadata } from 'next';

import localFont from 'next/font/local';

import { Container, Header } from '../src/components/layout';
import '../src/css/globals.css';

const pretendard = localFont({
  src: '../public/fonts/pretendard.woff2',
  display: 'swap',
  weight: '100 900',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: '@eunjios',
  description: '이은지의 포트폴리오',
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
      </body>
    </html>
  );
}
