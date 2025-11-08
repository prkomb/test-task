import "./globals.css";

export const metadata = {
  title: "Crypto Chart",
  description: "BTC/SOL mock chart with motion preloader",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
