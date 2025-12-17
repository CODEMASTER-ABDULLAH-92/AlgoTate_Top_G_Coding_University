// import type { Metadata } from "next";
import "./globals.css";
// import { ReactLenis } from "lenis/react";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased custom-font bg-gradient-to-b from-[#0a0a0a] to-[#121212] text-gray-100">
        {/* <ReactLenis /> */}
        {children}
      </body>
    </html>
  );
}
