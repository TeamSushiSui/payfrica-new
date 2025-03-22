"use client";
import "./globals.css";
import { ProvidersAndLayout } from "./ProvidersAndLayout";
import { GlobalStateProvider } from "../GlobalStateProvider";

export default function RootLayout({ children }) {
  return (
    <GlobalStateProvider>
    <html lang="en">
      <body>
        <ProvidersAndLayout>
          {children}
          </ProvidersAndLayout>
      </body>
    </html>
    </GlobalStateProvider>
  );
}
