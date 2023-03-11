import Image from "next/image";
import "./globals.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <header>
          <Image src="/logo.svg" width={75} height={75} priority alt="" />
          <span>tail</span>
          {/* humburger */}
          <div />
        </header>
        {children}
      </body>
    </html>
  );
}
