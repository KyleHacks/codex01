import "./globals.css";

export const metadata = {
  title: "Night Atlas",
  description: "A minimal dark portfolio with clear navigation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
