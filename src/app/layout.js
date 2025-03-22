"use client";
import "./globals.css";
import { GlobalStateProvider } from "../GlobalStateProvider";

// export const metadata = {
//   title: "Payfrica App",
//   description: "This is the Payfrica App",
// };

export default function RootLayout({ children }) {
  return (
    <GlobalStateProvider>
      <html lang="en">
        <body>
          <div>{children}</div>
        </body>
      </html>
    </GlobalStateProvider>
  );
}
