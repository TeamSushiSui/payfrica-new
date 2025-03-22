import "./globals.css";
import { ProvidersAndLayout } from "./ProvidersAndLayout";

export const metadata = {
  title: "Payfrica App",
  description: "This is the Payfrica App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ProvidersAndLayout>
          {children}
          </ProvidersAndLayout>
      </body>
    </html>
  );
}
