import "./globals.css";
export const metadata = {
  title: "API Dummy",
  description: "Generated by create next app",
};

import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}