import type { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./GlobalRedux/provider";
import { App as AntdApp } from "antd";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdRegistry>
          <AntdApp>
            <Providers>{children}</Providers>
          </AntdApp>
        </AntdRegistry>
      </body>
    </html>
  );
}