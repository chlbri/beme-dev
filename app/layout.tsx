import { FC } from 'react';
import './globals.css';
import { Header } from './Header';

type Props = {
  children: React.ReactNode;
};

const RootLayout: FC<Props> = ({ children }) => (
  <html lang="en">
    {/*
      <head /> will contain the components returned by the nearest parent
      head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
    */}
    <head />
    <body className="bg-gray-100 dark:bg-zinc-900 transition-all duration-500 ease-in-out dark:text-gray-50">
      <Header />
      <div className="max-w-6xl mx-auto">{children}</div>
    </body>
  </html>
);

export default RootLayout;
