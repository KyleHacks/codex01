import "./globals.css";

export const metadata = {
  title: "Codex01",
  description: "Minimal sections layout",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
