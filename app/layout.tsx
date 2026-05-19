import './globals.css';

export const metadata = {
  title: 'Rene SoMe Agent',
  description: 'AI native communications workflow platform'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="da">
      <body>{children}</body>
    </html>
  );
}
