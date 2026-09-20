import "./globals.css";

export const metadata = {
  title: "SMC Alpha Trading Bot",
  description: "Smart Money Concepts market scanner"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
