import "./globals.css";

export const metadata = {
  title: "Payfrica App",
  description: "This is the Payfrica App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
